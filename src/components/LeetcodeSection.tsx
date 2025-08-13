
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

  // Generate calendar heatmap from submission data
  const generateSubmissionCalendar = () => {
    if (!leetcodeStats?.submissionCalendar) return []
    
    const weeks = []
    const today = new Date()
    const oneYear = 365 * 24 * 60 * 60 * 1000
    const startDate = new Date(today.getTime() - oneYear)
    
    for (let i = 0; i < 53; i++) {
      const week = []
      for (let j = 0; j < 7; j++) {
        const date = new Date(startDate.getTime() + (i * 7 + j) * 24 * 60 * 60 * 1000)
        const dateStr = date.toISOString().split('T')[0]
        const count = leetcodeStats.submissionCalendar[dateStr] || 0
        week.push({ date: dateStr, count })
      }
      weeks.push(week)
    }
    return weeks
  }

  const submissionCalendar = generateSubmissionCalendar()

  const getSubmissionColor = (count: number) => {
    if (count === 0) return 'bg-muted/30'
    if (count <= 2) return 'bg-green-200 dark:bg-green-900/40'
    if (count <= 5) return 'bg-green-300 dark:bg-green-800/60'
    if (count <= 10) return 'bg-green-400 dark:bg-green-700/80'
    return 'bg-green-500 dark:bg-green-600'
  }

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

        {/* Submission Calendar */}
        <div className="max-w-4xl mx-auto">
          <Card className="animate-fade-up bg-card border-border" style={{ animationDelay: '0.5s' }}>
            <CardHeader>
              <CardTitle className="text-center text-card-foreground">
                {leetcodeStats?.error ? 'LeetCode Data Unavailable' : 'Submission Activity'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {leetcodeStats?.error ? (
                <div className="text-center py-8">
                  <p className="text-muted-foreground mb-4">{leetcodeStats.error}</p>
                  <Button
                    className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white"
                    onClick={() => window.open('https://leetcode.com/u/23ADR040/', '_blank')}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    View LeetCode Profile
                  </Button>
                </div>
              ) : (
                <>
                  {submissionCalendar.length > 0 && (
                    <div className="overflow-x-auto mb-6">
                      <div className="grid grid-flow-col gap-1" style={{ gridTemplateRows: 'repeat(7, 1fr)' }}>
                        {submissionCalendar.map((week, weekIndex) => 
                          week.map((day, dayIndex) => (
                            <div
                              key={`${weekIndex}-${dayIndex}`}
                              className={`w-3 h-3 rounded-sm ${getSubmissionColor(day.count)} transition-opacity duration-300`}
                              style={{
                                opacity: isVisible ? 1 : 0,
                                transitionDelay: `${(weekIndex * 7 + dayIndex) * 2}ms`
                              }}
                              title={`${day.date}: ${day.count} submissions`}
                            />
                          ))
                        )}
                      </div>
                      <div className="flex items-center justify-between mt-4 text-xs text-muted-foreground">
                        <span>Jan</span>
                        <span>Mar</span>
                        <span>May</span>
                        <span>Jul</span>
                        <span>Sep</span>
                        <span>Nov</span>
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center">
                    <Button
                      className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white"
                      onClick={() => window.open('https://leetcode.com/u/23ADR040/', '_blank')}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      View LeetCode Profile
                    </Button>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LeetcodeSection;
