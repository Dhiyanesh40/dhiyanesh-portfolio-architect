
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface Skill {
  name: string;
  icon: string;
  gradient: string;
}

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills: Skill[] = [
    { name: 'Python', icon: '🐍', gradient: 'from-blue-500 to-yellow-500' },
    { name: 'JavaScript', icon: '⚡', gradient: 'from-yellow-400 to-orange-500' },
    { name: 'React', icon: '⚛️', gradient: 'from-blue-400 to-cyan-400' },
    { name: 'Node.js', icon: '🟢', gradient: 'from-green-500 to-green-700' },
    { name: 'HTML', icon: '🌐', gradient: 'from-orange-500 to-red-500' },
    { name: 'CSS', icon: '🎨', gradient: 'from-blue-500 to-purple-500' },
    { name: 'Machine Learning', icon: '🤖', gradient: 'from-purple-500 to-pink-500' },
    { name: 'Deep Learning', icon: '🧠', gradient: 'from-indigo-500 to-purple-600' },
    { name: 'TensorFlow', icon: '🔥', gradient: 'from-orange-500 to-red-600' },
    { name: 'MongoDB', icon: '🍃', gradient: 'from-green-500 to-teal-500' },
    { name: 'Git', icon: '🔧', gradient: 'from-orange-600 to-red-600' },
    { name: 'Docker', icon: '🐳', gradient: 'from-blue-500 to-cyan-500' },
    { name: 'AWS', icon: '☁️', gradient: 'from-orange-400 to-yellow-500' },
    { name: 'PostgreSQL', icon: '🐘', gradient: 'from-blue-600 to-indigo-600' },
    { name: 'Express.js', icon: '🚀', gradient: 'from-gray-600 to-gray-800' },
    { name: 'TypeScript', icon: '📘', gradient: 'from-blue-600 to-blue-800' },
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
    <section id="skills" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins text-foreground mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto font-inter">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={skill.name}
              className={`group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-3 hover:scale-105 animate-fade-up bg-card border-border cursor-pointer`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 flex flex-col items-center space-y-3">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${skill.gradient} flex items-center justify-center text-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                  {skill.icon}
                </div>
                <h3 className="text-sm font-medium text-card-foreground text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {skill.name}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
