import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Trophy, Star, Award, Code } from 'lucide-react';
import { useCodingStats } from '@/hooks/useCodingStats';

const CodeChefSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { codechefStats, loading } = useCodingStats();

  const isDataAvailable = !codechefStats?.error

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
            CodeChef
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col justify-between h-full pb-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="text-center p-3 rounded-lg bg-muted/30">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mx-auto mb-2">
                <Trophy className="text-white" size={16} />
              </div>
              <p className="text-lg font-bold text-card-foreground">
                {codechefStats?.rating || 'N/A'}
              </p>
              <p className="text-xs text-muted-foreground">
                Rating
              </p>
            </div>
            <div className="text-center p-3 rounded-lg bg-muted/30">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-400 to-yellow-500 flex items-center justify-center mx-auto mb-2">
                <Star className="text-white" size={16} />
              </div>
              <p className="text-lg font-bold text-card-foreground">
                {codechefStats?.maxRating || 'N/A'}
              </p>
              <p className="text-xs text-muted-foreground">
                Max Rating
              </p>
            </div>
            <div className="text-center p-3 rounded-lg bg-muted/30">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-2">
                <Award className="text-white" size={16} />
              </div>
              <p className="text-lg font-bold text-card-foreground">
                {codechefStats?.rank || 'N/A'}
              </p>
              <p className="text-xs text-muted-foreground">
                Rank
              </p>
            </div>
            <div className="text-center p-3 rounded-lg bg-muted/30">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-2">
                <Code className="text-white" size={16} />
              </div>
              <p className="text-lg font-bold text-card-foreground">
                {codechefStats?.solved || 'N/A'}
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
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
              onClick={() => window.open('https://www.codechef.com/users/dhiyanesh_40', '_blank')}
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

export default CodeChefSection;