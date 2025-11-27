
import { useState } from 'react';
import { Mail, Linkedin, Github, Download, Code2, Trophy, Award, Star, Zap, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'dhiyaneshb.23aid@kongu.edu',
      href: 'https://mail.google.com/mail/u/0/?to=dhiyaneshb.23aid@kongu.edu&fs=1&tf=cm',
      color: 'text-red-500'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'dhiyaneshb',
      href: 'https://linkedin.com/in/dhiyaneshb',
      color: 'text-blue-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'Dhiyanesh40',
      href: 'https://github.com/Dhiyanesh40',
      color: 'text-gray-700 dark:text-gray-300'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+91 9361426949',
      href: 'https://wa.me/919361426949',
      color: 'text-green-500'
    },
    {
      icon: Zap,
      label: 'LeetCode',
      value: '23ADR040',
      href: 'https://leetcode.com/u/23ADR040/',
      color: 'text-orange-500'
    },
    {
      icon: Trophy,
      label: 'HackerRank',
      value: '23ADR040',
      href: 'https://www.hackerrank.com/profile/23ADR040',
      color: 'text-green-600'
    },
    {
      icon: Award,
      label: 'HackerEarth',
      value: 'dhiyaneshb.23aid',
      href: 'https://www.hackerearth.com/@dhiyaneshb.23aid',
      color: 'text-blue-500'
    },
    {
      icon: Star,
      label: 'CodeChef',
      value: 'dhiyanesh_b',
      href: 'https://www.codechef.com/users/dhiyanesh_b',
      color: 'text-amber-600'
    },
    {
      icon: Code2,
      label: 'Codeforces',
      value: 'Dhiyanesh_19',
      href: 'https://codeforces.com/profile/Dhiyanesh_19',
      color: 'text-red-500'
    },
  ];

  const downloadResume = () => {
    // Create a dummy resume download - replace with actual resume URL
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Replace with actual resume path
    link.download = 'Dhiyanesh_B_Resume.pdf';
    link.click();
  };

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

        <div className="max-w-6xl mx-auto">
          <div className="animate-fade-up">
            <h3 className="text-2xl font-bold font-poppins text-foreground mb-6">
              Let's Connect
            </h3>
            <p className="text-muted-foreground font-inter mb-8 leading-relaxed">
              Whether you have a project in mind, want to collaborate, or just want to say hello, 
              I'd love to hear from you. Let's create something amazing together!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {contactInfo.map((item, index) => (
                <Card 
                  key={item.label}
                  className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer bg-card border-border"
                  onClick={() => item.href !== '#' && window.open(item.href, '_blank')}
                >
                  <CardContent className="p-4 text-center">
                    <div className={`p-3 rounded-full bg-muted group-hover:bg-muted/80 transition-colors duration-300 w-12 h-12 mx-auto mb-3 flex items-center justify-center`}>
                      <item.icon className={`${item.color} group-hover:scale-110 transition-transform duration-300`} size={20} />
                    </div>
                    <h4 className="font-semibold text-card-foreground font-inter mb-1 text-sm">{item.label}</h4>
                    <p className="text-xs text-muted-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 break-words">
                      {item.value}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Download Resume Button */}
            <div className="flex justify-center">
              <Button
                onClick={downloadResume}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-inter font-medium px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <Download className="mr-2 group-hover:translate-y-1 transition-transform duration-200" size={18} />
                Download Resume
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
