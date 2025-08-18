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
    <div className="h-full">
      <Card className="h-full bg-card border-border hover:border-primary/50 transition-all duration-300">
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-xl font-bold text-card-foreground">
            HackerRank
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col justify-between h-full pb-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="text-center p-3 rounded-lg bg-muted/30">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-2">
                <Trophy className="text-white" size={16} />
              </div>
              <p className="text-lg font-bold text-card-foreground">
                {hackerrankStats?.rating || 'N/A'}
              </p>
              <p className="text-xs text-muted-foreground">
                Rating
              </p>
            </div>
            <div className="text-center p-3 rounded-lg bg-muted/30">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center mx-auto mb-2">
                <Award className="text-white" size={16} />
              </div>
              <p className="text-lg font-bold text-card-foreground">
                {hackerrankStats?.badges || 'N/A'}
              </p>
              <p className="text-xs text-muted-foreground">
                Badges
              </p>
            </div>
            <div className="text-center p-3 rounded-lg bg-muted/30">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-2">
                <Star className="text-white" size={16} />
              </div>
              <p className="text-lg font-bold text-card-foreground">
                {hackerrankStats?.rank || 'N/A'}
              </p>
              <p className="text-xs text-muted-foreground">
                Rank
              </p>
            </div>
            <div className="text-center p-3 rounded-lg bg-muted/30">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-2">
                <Code className="text-white" size={16} />
              </div>
              <p className="text-lg font-bold text-card-foreground">
                {hackerrankStats?.solved || 'N/A'}
              </p>
              <p className="text-xs text-muted-foreground">
                Problems
              </p>
            </div>
          </div>
          
          {/* Profile Button */}
          <div className="text-center mt-auto">
            <Button
              size="sm"
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white"
              onClick={() => window.open('https://www.hackerrank.com/profile/23ADR040', '_blank')}
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

export default HackerRankSection;