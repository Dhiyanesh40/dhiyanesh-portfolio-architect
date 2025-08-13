import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Trophy, Award, Star, Code } from 'lucide-react';
import { useCodingStats } from '@/hooks/useCodingStats';

const HackerRankSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { hackerrankStats, loading } = useCodingStats();

  const isDataAvailable = !hackerrankStats?.error

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
    <section id="hackerrank" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins text-foreground mb-4">
            HackerRank Progress
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto font-inter">
            {loading ? 'Loading real-time HackerRank statistics...' : 'My problem-solving skills and achievements on HackerRank'}
          </p>
        </div>

        {/* Profile Access */}
        <div className="max-w-4xl mx-auto">
          <Card className="animate-fade-up bg-card border-border" style={{ animationDelay: '0.5s' }}>
            <CardHeader>
              <CardTitle className="text-center text-card-foreground">
                {isDataAvailable ? 'HackerRank Profile' : 'HackerRank Data Unavailable'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                {isDataAvailable ? (
                  <p className="text-muted-foreground mb-6">
                    Visit my HackerRank profile to see my latest achievements, skills, and problem-solving progress.
                  </p>
                ) : (
                  <p className="text-muted-foreground mb-6">
                    {hackerrankStats?.error || 'HackerRank public API is not available for profile statistics.'}
                  </p>
                )}
                
                <Button
                  className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white"
                  onClick={() => window.open('https://www.hackerrank.com/profile/23ADR040', '_blank')}
                >
                  <ExternalLink size={16} className="mr-2" />
                  View HackerRank Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HackerRankSection;