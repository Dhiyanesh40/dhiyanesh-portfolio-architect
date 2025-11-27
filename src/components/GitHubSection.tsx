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
      value: githubStats?.publicRepos?.toString() || 'N/A',
      icon: Code,
      color: 'from-gray-600 to-gray-800',
      description: 'Open source repositories'
    },
    {
      label: 'Followers',
      value: githubStats?.followers?.toString() || 'N/A',
      icon: Users,
      color: 'from-blue-500 to-purple-500',
      description: 'GitHub community followers'
    },
    {
      label: 'Total Stars',
      value: githubStats?.totalStars?.toString() || 'N/A',
      icon: Star,
      color: 'from-yellow-500 to-orange-500',
      description: 'Stars across all repositories'
    },
    {
      label: 'Total Forks',
      value: githubStats?.totalForks?.toString() || 'N/A',
      icon: GitBranch,
      color: 'from-green-500 to-emerald-500',
      description: 'Forks across all repositories'
    }
  ];


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

        {/* View Profile Button */}
        <div className="text-center">
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