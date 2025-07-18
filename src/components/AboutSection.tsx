
import { MapPin, GraduationCap, Building, Download } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  const downloadResume = () => {
    // Create a dummy resume download - replace with actual resume URL
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Replace with actual resume path
    link.download = 'Dhiyanesh_B_Resume.pdf';
    link.click();
  };

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins text-foreground mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="flex justify-center animate-fade-up">
            <div className="relative">
              <img
                src="https://image.lexica.art/full_jpg/03fd6ca2-02d8-40fd-bc57-0fbeb42a4e63"
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
            <h3 className="text-2xl font-bold font-poppins text-foreground mb-6">
              Passionate about Data Science & AI Innovation
            </h3>
            
            <p className="text-muted-foreground font-inter leading-relaxed mb-6">
              I'm a dedicated B.Tech Artificial Intelligence and Data Science student at Kongu Engineering College, 
              with hands-on industry experience as an in-plant trainee at SKP Title Search Pvt. Ltd. My journey in 
              technology is driven by a passion for transforming complex data into actionable insights and building 
              intelligent systems that solve real-world problems.
            </p>

            <p className="text-muted-foreground font-inter leading-relaxed mb-8">
              My expertise spans across data analytics, machine learning, backend development, ethical hacking, 
              and system design. I believe in continuous learning and staying updated with the latest technological 
              advancements to deliver innovative solutions.
            </p>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <Card className="group hover:shadow-lg transition-shadow duration-300 bg-card border-border">
                <CardContent className="p-4 flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors duration-300">
                    <MapPin className="text-blue-600 dark:text-blue-400" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Location</p>
                    <p className="text-sm text-muted-foreground">Erode, Tamil Nadu</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow duration-300 bg-card border-border">
                <CardContent className="p-4 flex items-center space-x-3">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg group-hover:bg-purple-200 dark:group-hover:bg-purple-800 transition-colors duration-300">
                    <GraduationCap className="text-purple-600 dark:text-purple-400" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Education</p>
                    <p className="text-sm text-muted-foreground">B.Tech AI & Data Science</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow duration-300 sm:col-span-2 bg-card border-border">
                <CardContent className="p-4 flex items-center space-x-3">
                  <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg group-hover:bg-green-200 dark:group-hover:bg-green-800 transition-colors duration-300">
                    <Building className="text-green-600 dark:text-green-400" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-card-foreground">Experience</p>
                    <p className="text-sm text-muted-foreground">In-plant Trainee at SKP Title Search Pvt. Ltd.</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Download Resume Button */}
            <div className="flex justify-center sm:justify-start">
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

export default AboutSection;
