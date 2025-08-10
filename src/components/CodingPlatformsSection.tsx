import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Trophy, Code, Star, GitBranch, Users, Award } from 'lucide-react';
import { useCodingStats } from '@/hooks/useCodingStats';

const CodingPlatformsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { 
    githubStats, 
    hackerrankStats, 
    hackerearthStats, 
    codechefStats, 
    codeforcesStats, 
    loading 
  } = useCodingStats();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const platforms = [
    {
      name: 'GitHub',
      id: 'Dhiyanesh40',
      url: 'https://github.com/Dhiyanesh40',
      color: 'from-gray-600 to-gray-800',
      icon: GitBranch,
      stats: githubStats ? [
        { label: 'Public Repos', value: githubStats.publicRepos, icon: Code },
        { label: 'Followers', value: githubStats.followers, icon: Users },
        { label: 'Total Stars', value: githubStats.totalStars, icon: Star },
        { label: 'Total Forks', value: githubStats.totalForks, icon: GitBranch }
      ] : []
    },
    {
      name: 'HackerRank',
      id: '23ADR040',
      url: 'https://www.hackerrank.com/profile/23ADR040',
      color: 'from-green-600 to-green-800',
      icon: Award,
      stats: hackerrankStats ? [
        { label: 'Rank', value: hackerrankStats.rank, icon: Trophy },
        { label: 'Badges', value: hackerrankStats.badges, icon: Award },
        { label: 'Points', value: hackerrankStats.points, icon: Star },
        { label: 'Certificates', value: hackerrankStats.certificates, icon: Award }
      ] : []
    },
    {
      name: 'HackerEarth',
      id: '@dhiyaneshb.23aid',
      url: 'https://www.hackerearth.com/@dhiyaneshb.23aid',
      color: 'from-blue-600 to-indigo-600',
      icon: Code,
      stats: hackerearthStats ? [
        { label: 'Rating', value: hackerearthStats.rating, icon: Trophy },
        { label: 'Global Rank', value: hackerearthStats.globalRank, icon: Star },
        { label: 'Problems Solved', value: hackerearthStats.problemsSolved, icon: Code },
        { label: 'Contests', value: hackerearthStats.contestsParticipated, icon: Award }
      ] : []
    },
    {
      name: 'CodeChef',
      id: 'dhiyanesh_40',
      url: 'https://www.codechef.com/users/dhiyanesh_40',
      color: 'from-orange-600 to-red-600',
      icon: Trophy,
      stats: codechefStats ? [
        { label: 'Current Rating', value: codechefStats.currentRating, icon: Trophy },
        { label: 'Highest Rating', value: codechefStats.highestRating, icon: Star },
        { label: 'Global Rank', value: codechefStats.globalRank, icon: Award },
        { label: 'Problems Solved', value: codechefStats.problemsSolved, icon: Code }
      ] : []
    },
    {
      name: 'Codeforces',
      id: 'dhiyaneshb.23aid',
      url: 'https://codeforces.com/profile/dhiyaneshb.23aid',
      color: 'from-purple-600 to-pink-600',
      icon: Code,
      stats: codeforcesStats ? [
        { label: 'Rating', value: codeforcesStats.rating, icon: Trophy },
        { label: 'Max Rating', value: codeforcesStats.maxRating, icon: Star },
        { label: 'Rank', value: codeforcesStats.rank, icon: Award },
        { label: 'Contribution', value: codeforcesStats.contribution, icon: Users }
      ] : []
    }
  ];

  if (loading) {
    return (
      <section id="coding-platforms" ref={sectionRef} className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold font-poppins text-foreground mb-4">
              Coding Platforms
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto rounded-full mb-8"></div>
            <p className="text-muted-foreground">Loading real-time statistics...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="coding-platforms" ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins text-foreground mb-4">
            Coding Platforms
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto font-inter">
            Real-time statistics from various competitive programming and development platforms
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {platforms.map((platform, index) => (
            <Card 
              key={platform.name}
              className={`group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-up bg-card border-border`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${platform.color} flex items-center justify-center shadow-lg`}>
                      <platform.icon className="text-white" size={20} />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-card-foreground">
                        {platform.name}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {platform.id}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(platform.url, '_blank')}
                    className="hover:bg-muted/50"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    View
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {platform.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="text-center p-3 rounded-lg bg-muted/30">
                      <div className="flex items-center justify-center mb-2">
                        <stat.icon className="text-muted-foreground" size={16} />
                      </div>
                      <p className="text-lg font-bold text-card-foreground">
                        {stat.value || 'N/A'}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingPlatformsSection;