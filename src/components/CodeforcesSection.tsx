import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Trophy, Star, Award, Users } from 'lucide-react';
import { useCodingStats } from '@/hooks/useCodingStats';

const CodeforcesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { codeforcesStats, loading } = useCodingStats();

  const stats = [
    {
      label: 'Current Rating',
      value: codeforcesStats?.rating || 'N/A',
      icon: Trophy,
      color: 'from-purple-500 to-pink-500',
      description: 'Current contest rating'
    },
    {
      label: 'Max Rating',
      value: codeforcesStats?.maxRating || 'N/A',
      icon: Star,
      color: 'from-blue-500 to-purple-500',
      description: 'Highest achieved rating'
    },
    {
      label: 'Rank',
      value: codeforcesStats?.rank || 'N/A',
      icon: Award,
      color: 'from-green-500 to-emerald-500',
      description: 'Current competitive rank'
    },
    {
      label: 'Contribution',
      value: codeforcesStats?.contribution?.toString() || 'N/A',
      icon: Users,
      color: 'from-orange-500 to-red-500',
      description: 'Community contribution'
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
    <div className="h-full">
      <Card className="h-full bg-card border-border hover:border-primary/50 transition-all duration-300">
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-xl font-bold text-card-foreground">
            Codeforces
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col justify-between h-full pb-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-3 rounded-lg bg-muted/30"
              >
                <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center mx-auto mb-2`}>
                  <stat.icon className="text-white" size={16} />
                </div>
                <p className="text-lg font-bold text-card-foreground">
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          
          {/* Profile Button */}
          <div className="text-center mt-auto">
            <Button
              size="sm"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
              onClick={() => window.open('https://codeforces.com/profile/dhiyaneshb.23aid', '_blank')}
            >
              <ExternalLink size={14} className="mr-1" />
              View Profile
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CodeforcesSection;