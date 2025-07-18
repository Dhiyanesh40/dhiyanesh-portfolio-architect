
import { useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveDemo?: string;
  github?: string;
  category: string;
}

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'AI-Powered Data Analytics Dashboard',
      description: 'A comprehensive dashboard for real-time data visualization and machine learning insights with predictive analytics capabilities.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      technologies: ['Python', 'TensorFlow', 'React', 'D3.js', 'PostgreSQL'],
      liveDemo: '#',
      github: '#',
      category: 'Data Science'
    },
    {
      id: 2,
      title: 'Smart Recommendation System',
      description: 'Machine learning-based recommendation engine using collaborative filtering and content-based algorithms.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
      technologies: ['Python', 'Scikit-learn', 'Flask', 'MongoDB', 'Docker'],
      liveDemo: '#',
      github: '#',
      category: 'Machine Learning'
    },
    {
      id: 3,
      title: 'Backend API for E-commerce',
      description: 'Scalable RESTful API with authentication, payment integration, and real-time notifications.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Stripe API'],
      liveDemo: '#',
      github: '#',
      category: 'Backend'
    },
    {
      id: 4,
      title: 'Sentiment Analysis Tool',
      description: 'Natural language processing application for analyzing sentiment in social media posts and reviews.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop',
      technologies: ['Python', 'NLTK', 'React', 'Chart.js', 'AWS'],
      liveDemo: '#',
      github: '#',
      category: 'NLP'
    },
    {
      id: 5,
      title: 'Cybersecurity Scanner',
      description: 'Automated vulnerability assessment tool for web applications with detailed reporting.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop',
      technologies: ['Python', 'Nmap', 'BeautifulSoup', 'Django', 'SQLite'],
      liveDemo: '#',
      github: '#',
      category: 'Security'
    },
    {
      id: 6,
      title: 'Real-time Chat Application',
      description: 'Full-stack chat application with real-time messaging, file sharing, and user authentication.',
      image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=400&h=300&fit=crop',
      technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'Cloudinary'],
      liveDemo: '#',
      github: '#',
      category: 'Full Stack'
    },
    {
      id: 7,
      title: 'AI Image Recognition System',
      description: 'Deep learning model for image classification and object detection with real-time processing capabilities.',
      image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'FastAPI', 'Docker'],
      liveDemo: '#',
      github: '#',
      category: 'Computer Vision'
    }
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-poppins text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto font-inter">
            Here are some of my recent projects that showcase my skills and passion for technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <Card 
              key={project.id}
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden animate-fade-up bg-card border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex space-x-2">
                    {project.liveDemo && (
                      <Button
                        size="sm"
                        className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30"
                        onClick={() => window.open(project.liveDemo, '_blank')}
                      >
                        <Eye size={16} className="mr-1" />
                        Demo
                      </Button>
                    )}
                    {project.github && (
                      <Button
                        size="sm"
                        className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github size={16} className="mr-1" />
                        Code
                      </Button>
                    )}
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold font-poppins text-card-foreground mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground font-inter text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-xs font-medium hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {projects.length > 6 && (
          <div className="text-center mt-12">
            <Button
              onClick={() => setShowAll(!showAll)}
              variant="outline"
              className="group border-2 border-border hover:border-blue-600 dark:hover:border-blue-400 text-foreground hover:text-blue-600 dark:hover:text-blue-400 font-inter font-medium px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 mb-6"
            >
              {showAll ? 'Show Less' : 'Show More Projects'}
            </Button>
          </div>
        )}

        <div className="text-center mt-6">
          <Button
            onClick={() => window.open('https://github.com/Dhiyanesh40', '_blank')}
            variant="outline"
            className="group border-2 border-border hover:border-blue-600 dark:hover:border-blue-400 text-foreground hover:text-blue-600 dark:hover:text-blue-400 font-inter font-medium px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            <Github className="mr-2 group-hover:rotate-12 transition-transform duration-200" size={18} />
            View All Projects on GitHub
            <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
