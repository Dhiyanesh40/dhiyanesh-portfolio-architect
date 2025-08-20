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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="aspect-[4/3] w-full transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20 hover:z-10 relative">
              <CodeChefSection />
            </div>
            <div className="aspect-[4/3] w-full transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20 hover:z-10 relative">
              <CodeforcesSection />
            </div>
            <div className="aspect-[4/3] w-full transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20 hover:z-10 relative">
              <HackerRankSection />
            </div>
            <div className="aspect-[4/3] w-full transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20 hover:z-10 relative">
              <HackerEarthSection />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CodingPlatformsSection;
