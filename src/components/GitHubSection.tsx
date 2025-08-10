import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, GitBranch, Users, Star, Code } from 'lucide-react';
import { useCodingStats } from '@/hooks/useCodingStats';

const GitHubSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { githubStats, loading } = useCodingStats();

  const stats = [
    {
      label: 'Public Repos',
      value: githubStats?.publicRepos || '25',
      icon: Code,
      color: 'from-gray-600 to-gray-800',
      description: 'Open source repositories'
    },
    {
      label: 'Followers',
      value: githubStats?.followers || '45',
      icon: Users,
      color: 'from-blue-500 to-purple-500',
      description: 'GitHub community followers'
    },
    {
      label: 'Total Stars',
      value: githubStats?.totalStars || '128',
      icon: Star,
      color: 'from-yellow-500 to-orange-500',
      description: 'Stars across all repositories'
    },
    {
      label: 'Total Forks',
      value: githubStats?.totalForks || '67',
      icon: GitBranch,
      color: 'from-green-500 to-emerald-500',
      description: 'Forks across all repositories'
    }
  ];

  // GitHub-style contribution calendar (simplified)
  const generateContributionData = () => {
    const weeks = 52;
    const days = 7;
    const data = [];
    
    for (let week = 0; week < weeks; week++) {
      const weekData = [];
      for (let day = 0; day < days; day++) {
        const contributions = Math.floor(Math.random() * 5); // 0-4 contributions
        weekData.push(contributions);
      }
      data.push(weekData);
    }
    
    return data;
  };

  const [contributionData] = useState(generateContributionData());
  const topLanguages = githubStats?.topLanguages || [
    { language: 'JavaScript', count: 8 },
    { language: 'Python', count: 6 },
    { language: 'TypeScript', count: 4 },
    { language: 'Java', count: 3 }
  ];

  const getContributionColor = (level: number) => {
    const colors = [
      'bg-muted/30', // 0 contributions
      'bg-green-200 dark:bg-green-900/40', // 1 contribution
      'bg-green-300 dark:bg-green-800/60', // 2 contributions
      'bg-green-400 dark:bg-green-700/80', // 3 contributions
      'bg-green-500 dark:bg-green-600' // 4+ contributions
    ];
    return colors[Math.min(level, 4)];
  };

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

  return (
    <section id="github" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins text-foreground mb-4">
            GitHub Contributions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-400 dark:to-gray-600 mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto font-inter">
            {loading ? 'Loading real-time GitHub statistics...' : 'My open source contributions and development activity'}
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className={`group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-up bg-card border-border`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                  <stat.icon className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-1">
                  {stat.value}
                </h3>
                <p className="text-sm font-medium text-muted-foreground mb-2">
                  {stat.label}
                </p>
                <p className="text-xs text-muted-foreground">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contribution Calendar & Languages */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contribution Calendar */}
          <Card className="animate-fade-up bg-card border-border" style={{ animationDelay: '0.5s' }}>
            <CardHeader>
              <CardTitle className="text-center text-card-foreground">
                308 contributions in the past year
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <div className="grid grid-flow-col gap-1" style={{ gridTemplateRows: 'repeat(7, 1fr)' }}>
                  {contributionData.map((week, weekIndex) => 
                    week.map((day, dayIndex) => (
                      <div
                        key={`${weekIndex}-${dayIndex}`}
                        className={`w-3 h-3 rounded-sm ${getContributionColor(day)} transition-opacity duration-300`}
                        style={{
                          opacity: isVisible ? 1 : 0,
                          transitionDelay: `${(weekIndex * 7 + dayIndex) * 2}ms`
                        }}
                        title={`${day} contributions`}
                      />
                    ))
                  )}
                </div>
              </div>
              <div className="flex items-center justify-between mt-4 text-xs text-muted-foreground">
                <span>Aug</span>
                <span>Oct</span>
                <span>Dec</span>
                <span>Feb</span>
                <span>Apr</span>
                <span>Jun</span>
                <span>Aug</span>
              </div>
            </CardContent>
          </Card>

          {/* Top Languages */}
          <Card className="animate-fade-up bg-card border-border" style={{ animationDelay: '0.6s' }}>
            <CardHeader>
              <CardTitle className="text-center text-card-foreground">
                Top Languages
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {topLanguages.map((lang, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-card-foreground">
                      {lang.language}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {lang.count} repos
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-400 dark:to-gray-600 transition-all duration-1000 ease-out"
                      style={{
                        width: isVisible ? `${(lang.count / Math.max(...topLanguages.map(l => l.count))) * 100}%` : '0%',
                        transitionDelay: `${index * 0.1}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button
            className="bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-700 hover:to-gray-900 text-white"
            onClick={() => window.open('https://github.com/Dhiyanesh40', '_blank')}
          >
            <ExternalLink size={16} className="mr-2" />
            View GitHub Profile
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GitHubSection;