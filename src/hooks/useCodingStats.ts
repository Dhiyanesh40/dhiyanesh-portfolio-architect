import { useState, useEffect } from 'react'

export const useCodingStats = () => {
  const [leetcodeStats, setLeetcodeStats] = useState<any>(null)
  const [githubStats, setGithubStats] = useState<any>(null)
  const [hackerrankStats, setHackerrankStats] = useState<any>(null)
  const [hackerearthStats, setHackerearthStats] = useState<any>(null)
  const [codechefStats, setCodechefStats] = useState<any>(null)
  const [codeforcesStats, setCodeforcesStats] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchLeetcodeStats = async () => {
    try {
      const response = await fetch('https://leetcode-api-faisalshohag.vercel.app/23ADR040')
      if (!response.ok) throw new Error('Failed to fetch LeetCode data')
      const data = await response.json()
      
      // Only use real data, no fallbacks
      if (data && data.totalSolved !== undefined) {
        setLeetcodeStats({
          totalSolved: data.totalSolved,
          easySolved: data.easySolved,
          mediumSolved: data.mediumSolved,
          hardSolved: data.hardSolved,
          acceptanceRate: data.acceptanceRate,
          ranking: data.ranking,
          submissionCalendar: data.submissionCalendar || {},
          recentSubmissions: data.recentSubmissions || []
        })
      } else {
        setLeetcodeStats({ error: 'No data available' })
      }
    } catch (err) {
      console.error('Error fetching LeetCode stats:', err)
      setLeetcodeStats({ error: 'Failed to fetch data' })
    }
  }

  const fetchGithubStats = async () => {
    try {
      const userResponse = await fetch('https://api.github.com/users/Dhiyanesh40')
      if (!userResponse.ok) throw new Error('Failed to fetch GitHub user data')
      const userData = await userResponse.json()
      
      const reposResponse = await fetch('https://api.github.com/users/Dhiyanesh40/repos?per_page=100')
      if (!reposResponse.ok) throw new Error('Failed to fetch GitHub repos data')
      const reposData = await reposResponse.json()
      
      // Get real contribution data using GitHub GraphQL API
      const contributionsQuery = `
        query {
          user(login: "Dhiyanesh40") {
            contributionsCollection {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays {
                    contributionCount
                    date
                  }
                }
              }
            }
          }
        }
      `
      
      let contributionData = null
      try {
        const contributionsResponse = await fetch('https://api.github.com/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_GITHUB_TOKEN || ''}`,
          },
          body: JSON.stringify({ query: contributionsQuery }),
        })
        if (contributionsResponse.ok) {
          const contributionsResult = await contributionsResponse.json()
          contributionData = contributionsResult.data?.user?.contributionsCollection?.contributionCalendar
        }
      } catch (e) {
        console.warn('GitHub GraphQL API not available, skipping contribution calendar')
      }
      
      // Calculate real stats from actual data
      const totalStars = reposData.reduce((acc: number, repo: any) => acc + (repo.stargazers_count || 0), 0)
      const totalForks = reposData.reduce((acc: number, repo: any) => acc + (repo.forks_count || 0), 0)
      const languages = reposData.reduce((acc: any, repo: any) => {
        if (repo.language) {
          acc[repo.language] = (acc[repo.language] || 0) + 1
        }
        return acc
      }, {})
      
      setGithubStats({
        publicRepos: userData.public_repos,
        followers: userData.followers,
        following: userData.following,
        totalStars,
        totalForks,
        totalContributions: contributionData?.totalContributions || null,
        contributionCalendar: contributionData || null,
        topLanguages: Object.entries(languages)
          .sort(([,a], [,b]) => (b as number) - (a as number))
          .slice(0, 5)
          .map(([lang, count]) => ({ language: lang, count }))
      })
    } catch (err) {
      console.error('Error fetching GitHub stats:', err)
      setGithubStats({ error: 'Failed to fetch GitHub data' })
    }
  }

  const fetchCodeforcesStats = async () => {
    try {
      const userResponse = await fetch('https://codeforces.com/api/user.info?handles=dhiyaneshb.23aid')
      if (!userResponse.ok) throw new Error('Failed to fetch Codeforces user data')
      const userData = await userResponse.json()
      
      if (userData.status !== 'OK' || !userData.result?.length) {
        throw new Error('Invalid Codeforces response')
      }
      
      const user = userData.result[0]
      
      // Fetch submission data for calendar
      const submissionsResponse = await fetch('https://codeforces.com/api/user.status?handle=dhiyaneshb.23aid')
      let submissionCalendar = null
      
      if (submissionsResponse.ok) {
        const submissionsData = await submissionsResponse.json()
        if (submissionsData.status === 'OK') {
          // Group submissions by date
          const submissions = submissionsData.result || []
          const calendar: { [key: string]: number } = {}
          
          submissions.forEach((submission: any) => {
            const date = new Date(submission.creationTimeSeconds * 1000).toISOString().split('T')[0]
            calendar[date] = (calendar[date] || 0) + 1
          })
          
          submissionCalendar = calendar
        }
      }
      
      setCodeforcesStats({
        username: user.handle,
        rating: user.rating || null,
        maxRating: user.maxRating || null,
        rank: user.rank || null,
        maxRank: user.maxRank || null,
        contribution: user.contribution || 0,
        friendOfCount: user.friendOfCount || 0,
        submissionCalendar
      })
    } catch (err) {
      console.error('Error fetching Codeforces stats:', err)
      setCodeforcesStats({ error: 'Failed to fetch Codeforces data' })
    }
  }

  const fetchCodechefStats = async () => {
    try {
      // CodeChef doesn't have a public API for submission calendar
      // We'll only fetch basic profile data without fake submissions
      setCodechefStats({
        username: 'dhiyanesh_40',
        error: 'CodeChef API not available - showing profile link only'
      })
    } catch (err) {
      console.error('Error fetching CodeChef stats:', err)
      setCodechefStats({ error: 'Failed to fetch CodeChef data' })
    }
  }

  const fetchHackerrankStats = async () => {
    try {
      // HackerRank doesn't have a public API for profile stats
      setHackerrankStats({
        username: '23ADR040',
        error: 'HackerRank API not available - showing profile link only'
      })
    } catch (err) {
      console.error('Error fetching HackerRank stats:', err)
      setHackerrankStats({ error: 'Failed to fetch HackerRank data' })
    }
  }

  const fetchHackerearthStats = async () => {
    try {
      // HackerEarth doesn't have a public API for profile stats
      setHackerearthStats({
        username: '@dhiyaneshb.23aid',
        error: 'HackerEarth API not available - showing profile link only'
      })
    } catch (err) {
      console.error('Error fetching HackerEarth stats:', err)
      setHackerearthStats({ error: 'Failed to fetch HackerEarth data' })
    }
  }

  useEffect(() => {
    const fetchAllStats = async () => {
      setLoading(true)
      try {
        await Promise.all([
          fetchLeetcodeStats(),
          fetchGithubStats(),
          fetchCodeforcesStats(),
          fetchCodechefStats(),
          fetchHackerrankStats(),
          fetchHackerearthStats()
        ])
      } catch (err) {
        setError('Failed to fetch coding statistics')
      } finally {
        setLoading(false)
      }
    }

    fetchAllStats()
  }, [])

  return {
    leetcodeStats,
    githubStats,
    hackerrankStats,
    hackerearthStats,
    codechefStats,
    codeforcesStats,
    loading,
    error,
    refetch: () => {
      setLoading(true)
      setError(null)
      // Re-fetch all stats
    }
  }
}