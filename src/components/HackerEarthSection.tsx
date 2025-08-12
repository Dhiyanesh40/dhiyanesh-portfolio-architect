import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Trophy, Star, Code, Award } from 'lucide-react';
import { useCodingStats } from '@/hooks/useCodingStats';

const HackerEarthSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { hackerearthStats, loading } = useCodingStats();

  const stats = [
    {
      label: 'Rating',
      value: hackerearthStats?.rating || '1647',
      icon: Trophy,
      color: 'from-blue-500 to-indigo-500',
      description: 'Current HackerEarth rating'
    },
    {
      label: 'Global Rank',
      value: hackerearthStats?.globalRank || '2345',
      icon: Star,
      color: 'from-purple-500 to-pink-500',
      description: 'Worldwide ranking'
    },
    {
      label: 'Problems Solved',
      value: hackerearthStats?.problemsSolved || '89',
      icon: Code,
      color: 'from-green-500 to-emerald-500',
      description: 'Successfully solved problems'
    },
    {
      label: 'Contests',
      value: hackerearthStats?.contestsParticipated || '12',
      icon: Award,
      color: 'from-orange-500 to-red-500',
      description: 'Contests participated'
    }
  ];

  const badges = hackerearthStats?.badges || ['Fast Coder', 'Problem Solver'];

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
    <section id="hackerearth" ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins text-foreground mb-4">
            HackerEarth Progress
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto font-inter">
            {loading ? 'Loading real-time HackerEarth statistics...' : 'My competitive programming journey on HackerEarth'}
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

        {/* Badges */}
        <div className="max-w-4xl mx-auto">
          <Card className="animate-fade-up bg-card border-border" style={{ animationDelay: '0.5s' }}>
            <CardHeader>
              <CardTitle className="text-center text-card-foreground">
                Achievement Badges
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {badges.map((badge, index) => (
                  <div key={index} className="text-center p-4 rounded-lg bg-muted/30">
                    <Award className="text-blue-600 dark:text-blue-400 mx-auto mb-2" size={20} />
                    <p className="text-sm font-medium text-card-foreground">
                      {badge}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="pt-6 text-center">
                <Button
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white"
                  onClick={() => window.open('https://www.hackerearth.com/@dhiyaneshb.23aid', '_blank')}
                >
                  <ExternalLink size={16} className="mr-2" />
                  View HackerEarth Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HackerEarthSection;