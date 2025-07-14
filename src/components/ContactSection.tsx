
import { useState } from 'react';
import { Send, Mail, Linkedin, Github, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      alert('Message sent successfully!');
    }, 1000);
  };

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
      color: 'text-gray-700'
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
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins text-gray-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto font-inter">
            I'm always open to discussing new opportunities and interesting projects
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-fade-up">
            <h3 className="text-2xl font-bold font-poppins text-gray-900 mb-6">
              Let's Connect
            </h3>
            <p className="text-gray-600 font-inter mb-8 leading-relaxed">
              Whether you have a project in mind, want to collaborate, or just want to say hello, 
              I'd love to hear from you. Let's create something amazing together!
            </p>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <Card 
                  key={item.label}
                  className="group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                  onClick={() => item.href !== '#' && window.open(item.href, '_blank')}
                >
                  <CardContent className="p-4 flex items-center space-x-4">
                    <div className={`p-3 rounded-lg bg-gray-100 group-hover:bg-gray-200 transition-colors duration-300`}>
                      <item.icon className={`${item.color} group-hover:scale-110 transition-transform duration-300`} size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 font-inter">{item.label}</p>
                      <p className="text-sm text-gray-600 group-hover:text-blue-600 transition-colors duration-300">
                        {item.value}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold font-poppins text-gray-900 mb-6">
                  Send a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400"
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400 resize-none"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-inter font-medium py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={18} />
                      </>
                    )}
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
