import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { username } = await req.json()
    
    // Fetch GitHub user stats
    const userResponse = await fetch(`https://api.github.com/users/${username}`)
    const userData = await userResponse.json()
    
    // Fetch GitHub repos
    const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
    const reposData = await reposResponse.json()
    
    // Calculate stats
    const totalStars = reposData.reduce((acc: number, repo: any) => acc + repo.stargazers_count, 0)
    const totalForks = reposData.reduce((acc: number, repo: any) => acc + repo.forks_count, 0)
    const languages = reposData.reduce((acc: any, repo: any) => {
      if (repo.language) {
        acc[repo.language] = (acc[repo.language] || 0) + 1
      }
      return acc
    }, {})
    
    const stats = {
      username: userData.login,
      name: userData.name,
      publicRepos: userData.public_repos,
      followers: userData.followers,
      following: userData.following,
      totalStars,
      totalForks,
      topLanguages: Object.entries(languages)
        .sort(([,a], [,b]) => (b as number) - (a as number))
        .slice(0, 5)
        .map(([lang, count]) => ({ language: lang, count })),
      createdAt: userData.created_at,
      avatarUrl: userData.avatar_url
    }
    
    return new Response(
      JSON.stringify(stats),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    )
  }
})