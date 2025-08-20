
import { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Download, Send, Twitter, Code2, Trophy, Award, Star, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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
      icon: Twitter,
      label: 'Twitter/X',
      value: 'Dhiyanesh_19',
      href: 'https://x.com/Dhiyanesh_19?t=-DYxelikuCVSUrjcTN1aIQ&s=08',
      color: 'text-blue-500'
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
    {
      icon: MapPin,
      label: 'Location',
      value: 'Erode, Tamil Nadu, India',
      href: '#',
      color: 'text-green-500'
    }
  ];

  const downloadResume = () => {
    // Create a dummy resume download - replace with actual resume URL
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Replace with actual resume path
    link.download = 'Dhiyanesh_B_Resume.pdf';
    link.click();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Contact Info */}
          <div className="animate-fade-up">
            <h3 className="text-2xl font-bold font-poppins text-foreground mb-6">
              Let's Connect
            </h3>
            <p className="text-muted-foreground font-inter mb-8 leading-relaxed">
              Whether you have a project in mind, want to collaborate, or just want to say hello, 
              I'd love to hear from you. Let's create something amazing together!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
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

          {/* Right side - Contact Form */}
          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <Card className="bg-card border-border shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold font-poppins text-foreground mb-6">
                  Send a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your Name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-inter font-medium py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                  >
                    <Send className="mr-2 group-hover:translate-x-1 transition-transform duration-200" size={18} />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
