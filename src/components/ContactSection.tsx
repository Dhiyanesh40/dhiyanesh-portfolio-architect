
import { Mail, Linkedin, Github, MapPin, Code } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'dhiyaneshb.23aid@kongu.edu',
      href: 'mailto:dhiyaneshb.23aid@kongu.edu',
      color: 'text-red-500'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/dhiyaneshb',
      href: 'https://linkedin.com/in/dhiyaneshb',
      color: 'text-blue-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/Dhiyanesh40',
      href: 'https://github.com/Dhiyanesh40',
      color: 'text-gray-700 dark:text-gray-300'
    },
    {
      icon: Code,
      label: 'LeetCode',
      value: 'leetcode.com/u/23ADR040',
      href: 'https://leetcode.com/u/23ADR040/',
      color: 'text-orange-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Erode, Tamil Nadu, India',
      href: '#',
      color: 'text-green-500'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins text-foreground mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto font-inter">
            I'm always open to discussing new opportunities and interesting projects
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-up">
            <h3 className="text-2xl font-bold font-poppins text-foreground mb-6 text-center">
              Let's Connect
            </h3>
            <p className="text-muted-foreground font-inter mb-8 leading-relaxed text-center max-w-2xl mx-auto">
              Whether you have a project in mind, want to collaborate, or just want to say hello, 
              I'd love to hear from you. Let's create something amazing together!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {contactInfo.map((item, index) => (
                <Card 
                  key={item.label}
                  className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer bg-card border-border"
                  onClick={() => item.href !== '#' && window.open(item.href, '_blank')}
                >
                  <CardContent className="p-6 text-center">
                    <div className={`p-4 rounded-full bg-muted group-hover:bg-muted/80 transition-colors duration-300 w-16 h-16 mx-auto mb-4 flex items-center justify-center`}>
                      <item.icon className={`${item.color} group-hover:scale-110 transition-transform duration-300`} size={24} />
                    </div>
                    <h4 className="font-semibold text-card-foreground font-inter mb-2">{item.label}</h4>
                    <p className="text-sm text-muted-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 break-words">
                      {item.value}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
