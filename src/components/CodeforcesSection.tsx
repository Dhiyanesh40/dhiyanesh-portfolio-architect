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
    <section id="codeforces" ref={sectionRef} className="py-20 bg-background">
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

        {/* Profile Link */}
        <div className="max-w-4xl mx-auto">
          <Card className="animate-fade-up bg-card border-border" style={{ animationDelay: '0.5s' }}>
            <CardHeader>
              <CardTitle className="text-center text-card-foreground">
                {codeforcesStats?.error ? 'Codeforces Data Unavailable' : 'Codeforces Profile'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                {codeforcesStats?.error ? (
                  <p className="text-muted-foreground mb-4">{codeforcesStats.error}</p>
                ) : (
                  <p className="text-muted-foreground mb-6">
                    Visit my Codeforces profile to see my complete competitive programming journey and achievements.
                  </p>
                )}
                <Button
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                  onClick={() => window.open('https://codeforces.com/profile/dhiyaneshb.23aid', '_blank')}
                >
                  <ExternalLink size={16} className="mr-2" />
                  View Codeforces Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CodeforcesSection;