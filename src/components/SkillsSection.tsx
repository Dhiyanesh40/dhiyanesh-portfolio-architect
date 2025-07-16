
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Skill {
  name: string;
  level: number;
  icon: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
  color: string;
}

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skillCategories: SkillCategory[] = [
    {
      title: 'Data Science & AI',
      color: 'blue',
      skills: [
        { name: 'Python', level: 90, icon: '🐍' },
        { name: 'Machine Learning', level: 85, icon: '🤖' },
        { name: 'Deep Learning', level: 80, icon: '🧠' },
        { name: 'Data Analysis', level: 88, icon: '📊' },
        { name: 'TensorFlow', level: 75, icon: '🔥' },
        { name: 'Pandas', level: 85, icon: '🐼' },
      ]
    },
    {
      title: 'Backend Development',
      color: 'purple',
      skills: [
        { name: 'Node.js', level: 80, icon: '🟢' },
        { name: 'Express.js', level: 78, icon: '⚡' },
        { name: 'MongoDB', level: 82, icon: '🍃' },
        { name: 'PostgreSQL', level: 75, icon: '🐘' },
        { name: 'REST API', level: 85, icon: '🔗' },
        { name: 'Docker', level: 70, icon: '🐳' },
      ]
    },
    {
      title: 'Tools & Technologies',
      color: 'green',
      skills: [
        { name: 'Git', level: 88, icon: '🔧' },
        { name: 'Linux', level: 80, icon: '🐧' },
        { name: 'AWS', level: 70, icon: '☁️' },
        { name: 'Jupyter', level: 85, icon: '📓' },
        { name: 'VS Code', level: 90, icon: '💻' },
        { name: 'Firebase', level: 75, icon: '🔥' },
      ]
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

  const getProgressBarColor = (color: string) => {
    switch (color) {
      case 'blue': return 'bg-blue-500';
      case 'purple': return 'bg-purple-500';
      case 'green': return 'bg-green-500';
      default: return 'bg-blue-500';
    }
  };

  const getCardBorderColor = (color: string) => {
    switch (color) {
      case 'blue': return 'hover:border-blue-200 dark:hover:border-blue-800';
      case 'purple': return 'hover:border-purple-200 dark:hover:border-purple-800';
      case 'green': return 'hover:border-green-200 dark:hover:border-green-800';
      default: return 'hover:border-blue-200 dark:hover:border-blue-800';
    }
  };

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins text-foreground mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto font-inter">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.title}
              className={`group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${getCardBorderColor(category.color)} animate-fade-up bg-card border-border`}
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-poppins text-card-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl">{skill.icon}</span>
                        <span className="font-inter font-medium text-card-foreground">{skill.name}</span>
                      </div>
                      <span className="text-sm font-inter text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all duration-1000 ease-out ${getProgressBarColor(category.color)}`}
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.1)}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
