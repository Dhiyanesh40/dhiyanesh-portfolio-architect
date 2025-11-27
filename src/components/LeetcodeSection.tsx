
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Trophy, Target, Zap, Code } from 'lucide-react';
import { useCodingStats } from '@/hooks/useCodingStats';

const LeetcodeSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { leetcodeStats, loading } = useCodingStats();

  const stats = [
    {
      label: 'Problems Solved',
      value: leetcodeStats?.totalSolved || 'N/A',
      icon: Code,
      color: 'from-green-500 to-emerald-500',
      description: 'Across all difficulty levels'
    },
    {
      label: 'Easy Solved',
      value: leetcodeStats?.easySolved || 'N/A',
      icon: Trophy,
      color: 'from-green-400 to-green-600',
      description: 'Easy difficulty problems'
    },
    {
      label: 'Medium Solved',
      value: leetcodeStats?.mediumSolved || 'N/A',
      icon: Target,
      color: 'from-yellow-400 to-orange-500',
      description: 'Medium difficulty problems'
    },
    {
      label: 'Hard Solved',
      value: leetcodeStats?.hardSolved || 'N/A',
      icon: Zap,
      color: 'from-red-400 to-red-600',
      description: 'Hard difficulty problems'
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
    <section id="leetcode" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins text-foreground mb-4">
            LeetCode Progress
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto font-inter">
            {loading ? 'Loading real-time LeetCode statistics...' : 'My competitive programming journey and problem-solving skills'}
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
            className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white"
            onClick={() => window.open('https://leetcode.com/u/23ADR040/', '_blank')}
          >
            <ExternalLink size={16} className="mr-2" />
            View LeetCode Profile
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LeetcodeSection;
