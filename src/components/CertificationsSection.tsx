
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Calendar } from 'lucide-react';

interface Certification {
  name: string;
  provider: string;
  date: string;
  verifyUrl: string;
  icon: string;
  color: string;
}

const CertificationsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const certifications: Certification[] = [
    {
      name: 'Machine Learning Specialization',
      provider: 'Coursera',
      date: 'Dec 2023',
      verifyUrl: '#',
      icon: '🤖',
      color: 'from-blue-500 to-purple-500'
    },
    {
      name: 'Deep Learning Specialization',
      provider: 'Coursera',
      date: 'Jan 2024',
      verifyUrl: '#',
      icon: '🧠',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Python for Data Science',
      provider: 'Coursera',
      date: 'Nov 2023',
      verifyUrl: '#',
      icon: '🐍',
      color: 'from-green-500 to-blue-500'
    },
    {
      name: 'React Development',
      provider: 'Coursera',
      date: 'Oct 2023',
      verifyUrl: '#',
      icon: '⚛️',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      name: 'AWS Cloud Practitioner',
      provider: 'AWS',
      date: 'Sep 2023',
      verifyUrl: '#',
      icon: '☁️',
      color: 'from-orange-500 to-yellow-500'
    },
    {
      name: 'Data Structures & Algorithms',
      provider: 'Coursera',
      date: 'Aug 2023',
      verifyUrl: '#',
      icon: '📊',
      color: 'from-red-500 to-orange-500'
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
    <section id="certifications" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins text-foreground mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto font-inter">
            Professional certifications and courses completed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={index}
              className={`group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-3 hover:scale-105 animate-fade-up bg-card border-border cursor-pointer relative overflow-hidden`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${cert.color} flex items-center justify-center text-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-card-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 mb-1">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {cert.provider}
                    </p>
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <Calendar size={12} />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full opacity-0 group-hover:opacity-100 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300"
                  onClick={() => window.open(cert.verifyUrl, '_blank')}
                >
                  <ExternalLink size={14} className="mr-2" />
                  Verify Certificate
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
