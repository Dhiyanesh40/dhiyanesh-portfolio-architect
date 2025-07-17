
import { ArrowUp, Github, Linkedin, Instagram, MessageCircle, Mail, Phone, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/Dhiyanesh40',
      label: 'GitHub',
      color: 'hover:text-gray-600 dark:hover:text-gray-400'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/dhiyaneshb',
      label: 'LinkedIn',
      color: 'hover:text-blue-500'
    },
    {
      icon: Twitter,
      href: 'https://x.com/Dhiyanesh_19?t=-DYxelikuCVSUrjcTN1aIQ&s=08',
      label: 'Twitter/X',
      color: 'hover:text-blue-400'
    },
    {
      icon: Instagram,
      href: 'https://instagram.com/dhiyanesh_b',
      label: 'Instagram',
      color: 'hover:text-pink-500'
    },
    {
      icon: MessageCircle,
      href: 'https://wa.me/+919876543210',
      label: 'WhatsApp',
      color: 'hover:text-green-500'
    },
    {
      icon: Mail,
      href: 'mailto:dhiyaneshb.23aid@kongu.edu',
      label: 'Email',
      color: 'hover:text-red-500'
    },
    {
      icon: Phone,
      href: 'tel:+919876543210',
      label: 'Phone',
      color: 'hover:text-blue-500'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold font-poppins mb-4">
            Dhiyanesh B
          </h3>
          <p className="text-gray-400 font-inter mb-8 max-w-2xl mx-auto">
            Aspiring Data Scientist & AI Engineer passionate about transforming data into insights 
            and building intelligent systems for a better tomorrow.
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full bg-gray-800 text-gray-400 transition-all duration-300 transform hover:scale-110 hover:bg-gray-700 ${social.color}`}
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
          
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500 text-sm">
              © 2024 Dhiyanesh B. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <Button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-30 p-0"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </Button>
    </footer>
  );
};

export default Footer;
