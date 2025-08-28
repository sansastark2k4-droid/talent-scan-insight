import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Users, BarChart3 } from "lucide-react";
import heroImage from "@/assets/hero-dashboard.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-primary opacity-10" />
      
      {/* Hero image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="AI Resume Screening Dashboard" 
          className="w-full h-full object-cover opacity-20" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="flex items-center justify-center mb-6">
          <div className="p-3 rounded-full gradient-primary shadow-glow">
            <Brain className="h-8 w-8 text-primary-foreground" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          AI Resume Screener
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Transform your hiring process with intelligent candidate screening. 
          <br className="hidden md:block" />
          Find the perfect match in seconds, not hours.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="gradient-primary text-primary-foreground shadow-glow transition-spring hover:shadow-elevated">
            Start Screening <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5">
            View Demo
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="p-3 rounded-full bg-success/10 mb-3">
              <Users className="h-6 w-6 text-success" />
            </div>
            <div className="text-3xl font-bold text-success">95%</div>
            <div className="text-muted-foreground">Accuracy Rate</div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="p-3 rounded-full bg-warning/10 mb-3">
              <BarChart3 className="h-6 w-6 text-warning" />
            </div>
            <div className="text-3xl font-bold text-warning">70%</div>
            <div className="text-muted-foreground">Time Saved</div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="p-3 rounded-full bg-primary/10 mb-3">
              <Brain className="h-6 w-6 text-primary" />
            </div>
            <div className="text-3xl font-bold text-primary">10K+</div>
            <div className="text-muted-foreground">Resumes Analyzed</div>
          </div>
        </div>
      </div>
    </section>
  );
};