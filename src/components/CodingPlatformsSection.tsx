import LeetcodeSection from './LeetcodeSection';
import GitHubSection from './GitHubSection';
import CodeChefSection from './CodeChefSection';
import CodeforcesSection from './CodeforcesSection';
import HackerRankSection from './HackerRankSection';
import HackerEarthSection from './HackerEarthSection';

const CodingPlatformsSection = () => {
  return (
    <>
      {/* Main platforms with heatmaps */}
      <LeetcodeSection />
      <GitHubSection />
      
      {/* Other platforms in 2x2 grid */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-poppins text-foreground mb-4">
              Other Coding Platforms
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto font-inter">
              My profiles across various competitive programming platforms
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="h-96 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
              <CodeChefSection />
            </div>
            <div className="h-96 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
              <CodeforcesSection />
            </div>
            <div className="h-96 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
              <HackerRankSection />
            </div>
            <div className="h-96 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20">
              <HackerEarthSection />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CodingPlatformsSection;
