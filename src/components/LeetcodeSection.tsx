
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Trophy, Target, Zap, Code } from 'lucide-react';

const LeetcodeSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    {
      label: 'Problems Solved',
      value: '150+',
      icon: Code,
      color: 'from-green-500 to-emerald-500',
      description: 'Across all difficulty levels'
    },
    {
      label: 'Contest Rating',
      value: '1580',
      icon: Trophy,
      color: 'from-yellow-500 to-orange-500',
      description: 'Current contest rating'
    },
    {
      label: 'Contests Participated',
      value: '25+',
      icon: Target,
      color: 'from-blue-500 to-purple-500',
      description: 'Weekly and biweekly contests'
    },
    {
      label: 'Streak',
      value: '45 days',
      icon: Zap,
      color: 'from-purple-500 to-pink-500',
      description: 'Current solving streak'
    }
  ];

  const difficultyStats = [
    { level: 'Easy', solved: 75, total: 100, color: 'bg-green-500' },
    { level: 'Medium', solved: 60, total: 80, color: 'bg-yellow-500' },
    { level: 'Hard', solved: 15, total: 25, color: 'bg-red-500' }
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
            My competitive programming journey and problem-solving skills
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

        {/* Difficulty Breakdown */}
        <div className="max-w-4xl mx-auto">
          <Card className="animate-fade-up bg-card border-border" style={{ animationDelay: '0.5s' }}>
            <CardHeader>
              <CardTitle className="text-center text-card-foreground">
                Problem Difficulty Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {difficultyStats.map((difficulty, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-card-foreground">
                      {difficulty.level}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {difficulty.solved}/{difficulty.total}
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div
                      className={`h-3 rounded-full transition-all duration-1000 ease-out ${difficulty.color}`}
                      style={{
                        width: isVisible ? `${(difficulty.solved / difficulty.total) * 100}%` : '0%',
                        transitionDelay: `${index * 0.2}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
              
              <div className="pt-6 text-center">
                <Button
                  className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white"
                  onClick={() => window.open('https://leetcode.com/u/23ADR040/', '_blank')}
                >
                  <ExternalLink size={16} className="mr-2" />
                  View LeetCode Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LeetcodeSection;
