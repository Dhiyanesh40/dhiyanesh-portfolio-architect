import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Trophy, Star, Code, Award } from 'lucide-react';
import { useCodingStats } from '@/hooks/useCodingStats';

const HackerEarthSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { hackerearthStats, loading } = useCodingStats();

  const isDataAvailable = !hackerearthStats?.error

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

        {/* Profile Access */}
        <div className="max-w-4xl mx-auto">
          <Card className="animate-fade-up bg-card border-border" style={{ animationDelay: '0.5s' }}>
            <CardHeader>
              <CardTitle className="text-center text-card-foreground">
                {isDataAvailable ? 'HackerEarth Profile' : 'HackerEarth Data Unavailable'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                {isDataAvailable ? (
                  <p className="text-muted-foreground mb-6">
                    Visit my HackerEarth profile to see my latest competitive programming achievements, contest ratings, and problem-solving progress.
                  </p>
                ) : (
                  <p className="text-muted-foreground mb-6">
                    {hackerearthStats?.error || 'HackerEarth public API is not available for profile statistics.'}
                  </p>
                )}
                
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