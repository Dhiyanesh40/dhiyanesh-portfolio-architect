
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold font-poppins mb-4">
            Dhiyanesh B
          </h3>
          <p className="text-gray-400 font-inter mb-6 max-w-2xl mx-auto">
            Aspiring Data Scientist & AI Engineer passionate about transforming data into insights 
            and building intelligent systems for a better tomorrow.
          </p>
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
