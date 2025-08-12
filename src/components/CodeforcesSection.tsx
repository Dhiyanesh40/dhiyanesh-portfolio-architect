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
      value: codeforcesStats?.rating || '1234',
      icon: Trophy,
      color: 'from-purple-500 to-pink-500',
      description: 'Current contest rating'
    },
    {
      label: 'Max Rating',
      value: codeforcesStats?.maxRating || '1456',
      icon: Star,
      color: 'from-blue-500 to-purple-500',
      description: 'Highest achieved rating'
    },
    {
      label: 'Rank',
      value: codeforcesStats?.rank || 'Pupil',
      icon: Award,
      color: 'from-green-500 to-emerald-500',
      description: 'Current competitive rank'
    },
    {
      label: 'Contribution',
      value: codeforcesStats?.contribution || '45',
      icon: Users,
      color: 'from-orange-500 to-red-500',
      description: 'Community contribution'
    }
  ];

  const ratingData = [
    { 
      level: 'Current', 
      value: codeforcesStats?.rating || 1234, 
      maxValue: 1600, 
      color: 'bg-purple-500' 
    },
    { 
      level: 'Target', 
      value: 1400, 
      maxValue: 1600, 
      color: 'bg-pink-500' 
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
    <section id="codeforces" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins text-foreground mb-4">
            Codeforces Progress
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto font-inter">
            {loading ? 'Loading real-time Codeforces statistics...' : 'My competitive programming journey on Codeforces'}
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

        {/* Rating Progress & Submission Calendar */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Rating Progress */}
          <Card className="animate-fade-up bg-card border-border" style={{ animationDelay: '0.5s' }}>
            <CardHeader>
              <CardTitle className="text-center text-card-foreground">
                Rating Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {ratingData.map((rating, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-card-foreground">
                      {rating.level} Rating
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {rating.value}/{rating.maxValue}
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div
                      className={`h-3 rounded-full transition-all duration-1000 ease-out ${rating.color}`}
                      style={{
                        width: isVisible ? `${(rating.value / rating.maxValue) * 100}%` : '0%',
                        transitionDelay: `${index * 0.2}s`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Submission Calendar */}
          <Card className="animate-fade-up bg-card border-border" style={{ animationDelay: '0.6s' }}>
            <CardHeader>
              <CardTitle className="text-center text-card-foreground">
                Submission Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <div className="grid grid-flow-col gap-1" style={{ gridTemplateRows: 'repeat(7, 1fr)' }}>
                  {(Array.isArray(codeforcesStats?.submissionCalendar) ? codeforcesStats.submissionCalendar : []).map((week: number[], weekIndex: number) => 
                    week.map((day: number, dayIndex: number) => (
                      <div
                        key={`${weekIndex}-${dayIndex}`}
                        className={`w-3 h-3 rounded-sm transition-opacity duration-300 ${
                          day === 0 ? 'bg-muted/30' :
                          day === 1 ? 'bg-purple-200 dark:bg-purple-900/40' :
                          day === 2 ? 'bg-purple-300 dark:bg-purple-800/60' :
                          day === 3 ? 'bg-purple-400 dark:bg-purple-700/80' :
                          'bg-purple-500 dark:bg-purple-600'
                        }`}
                        style={{
                          opacity: isVisible ? 1 : 0,
                          transitionDelay: `${(weekIndex * 7 + dayIndex) * 2}ms`
                        }}
                        title={`${day} submissions`}
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
        </div>

        <div className="text-center mt-12">
          <Button
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
            onClick={() => window.open('https://codeforces.com/profile/dhiyaneshb.23aid', '_blank')}
          >
            <ExternalLink size={16} className="mr-2" />
            View Codeforces Profile
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CodeforcesSection;