
import { ArrowRight, Download } from 'lucide-react';
import TypingAnimation from './TypingAnimation';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const typingTexts = [
    'Aspiring Data Scientist',
    'AI Engineer',
    'Backend Developer',
    'Machine Learning Enthusiast'
  ];

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    // Create a dummy resume download - replace with actual resume URL
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Replace with actual resume path
    link.download = 'Dhiyanesh_B_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left animate-fade-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins text-foreground mb-6">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                Dhiyanesh
              </span>
            </h1>
            
            <div className="text-xl sm:text-2xl lg:text-3xl font-inter text-muted-foreground mb-8 h-16 flex items-center justify-center lg:justify-start">
              <TypingAnimation 
                texts={typingTexts}
                speed={80}
                className="font-medium"
              />
            </div>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl font-inter leading-relaxed">
              B.Tech AI & Data Science student at Kongu Engineering College with real-time industry exposure. 
              Passionate about transforming data into insights and building intelligent systems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={scrollToContact}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-inter font-medium px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Hire Me
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={18} />
              </Button>
              
              <Button
                onClick={downloadResume}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-inter font-medium px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <Download className="mr-2 group-hover:translate-y-1 transition-transform duration-200" size={18} />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Right side - DB Initials */}
          <div className="flex justify-center lg:justify-end animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1 animate-pulse-scale">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <span className="text-8xl font-bold font-poppins text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                    DB
                  </span>
                </div>
              </div>
              
              {/* Floating tech icons */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center animate-float">
                <span className="text-2xl">🤖</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-2xl">📊</span>
              </div>
              <div className="absolute top-1/2 -left-8 w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                <span className="text-xl">💻</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
