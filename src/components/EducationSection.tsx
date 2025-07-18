
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string | null;
  level: string;
}

const EducationSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const education: Education[] = [
    {
      degree: 'B.Tech in Artificial Intelligence and Data Science',
      institution: 'Kongu Engineering College',
      location: 'Erode',
      period: '2023-2027',
      score: '8.02 CGPA',
      level: 'Undergraduate'
    },
    {
      degree: '12th (HSC) - Bio-Maths',
      institution: "Mother's Matriculation Higher Secondary School",
      location: 'Erode',
      period: '2022-2023',
      score: '83%',
      level: 'Higher Secondary'
    },
    {
      degree: '10th (SSLC)',
      institution: "Mother's Matriculation Higher Secondary School",
      location: 'Erode',
      period: '2020-2021',
      score: null,
      level: 'Secondary'
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

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Undergraduate': return 'from-blue-500 to-purple-500';
      case 'Higher Secondary': return 'from-green-500 to-teal-500';
      case 'Secondary': return 'from-orange-500 to-red-500';
      default: return 'from-gray-500 to-gray-700';
    }
  };

  return (
    <section id="education" ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins text-foreground mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto font-inter">
            My academic journey and educational background
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <Card 
              key={index}
              className={`group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-up bg-card border-border`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${getLevelColor(edu.level)} text-white`}>
                    <GraduationCap size={24} />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl font-poppins text-card-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {edu.degree}
                    </CardTitle>
                    <p className="text-lg font-medium text-muted-foreground mt-1">
                      {edu.institution}
                    </p>
                  </div>
                  {edu.score ? (
                    <div className="flex items-center justify-center space-x-2 bg-muted rounded-lg px-3 py-2 w-40">
                      <Award className="text-yellow-500" size={16} />
                      <span className="font-semibold text-card-foreground">{edu.score}</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2 bg-orange-100 dark:bg-orange-900 rounded-lg px-3 py-2 w-40">
                      <Award className="text-orange-600 dark:text-orange-400" size={16} />
                      <span className="font-semibold text-orange-600 dark:text-orange-400">All Pass (COVID-19)</span>
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
