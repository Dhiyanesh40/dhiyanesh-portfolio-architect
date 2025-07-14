
import { Download, MapPin, GraduationCap, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const handleDownloadResume = () => {
    // Replace with actual resume download link
    console.log('Download resume');
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="flex justify-center animate-fade-up">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=600&fit=crop"
                alt="Dhiyanesh B at work"
                className="rounded-2xl shadow-2xl w-full max-w-md"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-3xl">
                🚀
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold font-poppins text-gray-900 mb-6">
              Passionate about Data Science & AI Innovation
            </h3>
            
            <p className="text-gray-600 font-inter leading-relaxed mb-6">
              I'm a dedicated B.Tech Artificial Intelligence and Data Science student at Kongu Engineering College, 
              with hands-on industry experience as an in-plant trainee at SKP Title Search Pvt. Ltd. My journey in 
              technology is driven by a passion for transforming complex data into actionable insights and building 
              intelligent systems that solve real-world problems.
            </p>

            <p className="text-gray-600 font-inter leading-relaxed mb-8">
              My expertise spans across data analytics, machine learning, backend development, ethical hacking, 
              and system design. I believe in continuous learning and staying updated with the latest technological 
              advancements to deliver innovative solutions.
            </p>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <Card className="group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4 flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors duration-300">
                    <MapPin className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Location</p>
                    <p className="text-sm text-gray-600">Erode, Tamil Nadu</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-4 flex items-center space-x-3">
                  <div className="p-2 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors duration-300">
                    <GraduationCap className="text-purple-600" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Education</p>
                    <p className="text-sm text-gray-600">B.Tech AI & Data Science</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow duration-300 sm:col-span-2">
                <CardContent className="p-4 flex items-center space-x-3">
                  <div className="p-2 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors duration-300">
                    <Building className="text-green-600" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Experience</p>
                    <p className="text-sm text-gray-600">In-plant Trainee at SKP Title Search Pvt. Ltd.</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Resume Download Button */}
            <Button
              onClick={handleDownloadResume}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-inter font-medium px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <Download className="mr-2 group-hover:animate-bounce" size={18} />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
