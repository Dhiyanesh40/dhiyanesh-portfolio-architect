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
    <div className="h-full">
      <Card className="h-full bg-card border-border hover:border-primary/50 transition-all duration-300">
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-xl font-bold text-card-foreground">
            HackerEarth
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col justify-between h-full pb-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="text-center p-3 rounded-lg bg-muted/30">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center mx-auto mb-2">
                <Trophy className="text-white" size={16} />
              </div>
              <p className="text-lg font-bold text-card-foreground">
                {hackerearthStats?.rating || 'N/A'}
              </p>
              <p className="text-xs text-muted-foreground">
                Rating
              </p>
            </div>
            <div className="text-center p-3 rounded-lg bg-muted/30">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center mx-auto mb-2">
                <Star className="text-white" size={16} />
              </div>
              <p className="text-lg font-bold text-card-foreground">
                {hackerearthStats?.maxRating || 'N/A'}
              </p>
              <p className="text-xs text-muted-foreground">
                Max Rating
              </p>
            </div>
            <div className="text-center p-3 rounded-lg bg-muted/30">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-2">
                <Code className="text-white" size={16} />
              </div>
              <p className="text-lg font-bold text-card-foreground">
                {hackerearthStats?.solved || 'N/A'}
              </p>
              <p className="text-xs text-muted-foreground">
                Problems
              </p>
            </div>
            <div className="text-center p-3 rounded-lg bg-muted/30">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center mx-auto mb-2">
                <Award className="text-white" size={16} />
              </div>
              <p className="text-lg font-bold text-card-foreground">
                {hackerearthStats?.rank || 'N/A'}
              </p>
              <p className="text-xs text-muted-foreground">
                Rank
              </p>
            </div>
          </div>
          
          {/* Profile Button */}
          <div className="text-center mt-auto">
            <Button
              size="sm"
              className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white"
              onClick={() => window.open('https://www.hackerearth.com/@dhiyaneshb.23aid', '_blank')}
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

export default HackerEarthSection;