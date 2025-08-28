import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { UploadSection } from "@/components/UploadSection";
import { CandidateList } from "@/components/CandidateList";
import { AnalyticsDashboard } from "@/components/AnalyticsDashboard";
import { SkillGapAnalysis } from "@/components/SkillGapAnalysis";
import { Toaster } from "@/components/ui/sonner";
import { Brain } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <UploadSection />
      <CandidateList />
      <AnalyticsDashboard />
      <SkillGapAnalysis />
      
      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/50 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="p-2 rounded-lg gradient-primary shadow-glow">
                <Brain className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                SkillLens
              </span>
            </div>
            <p className="text-muted-foreground mb-4">
              Transforming recruitment with artificial intelligence
            </p>
            <p className="text-sm text-muted-foreground">
              © 2024 SkillLens. Built with advanced machine learning algorithms.
            </p>
          </div>
        </div>
      </footer>
      
      <Toaster richColors position="top-right" />
    </div>
  );
};

export default Index;
