import { Button } from "@/components/ui/button";
import { Brain, Menu, X } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg gradient-primary shadow-glow">
              <Brain className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              ResumeAI
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#dashboard" className="text-muted-foreground hover:text-primary transition-smooth">
              Dashboard
            </a>
            <a href="#candidates" className="text-muted-foreground hover:text-primary transition-smooth">
              Candidates
            </a>
            <a href="#analytics" className="text-muted-foreground hover:text-primary transition-smooth">
              Analytics
            </a>
            <a href="#skills" className="text-muted-foreground hover:text-primary transition-smooth">
              Skills Analysis
            </a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-primary/20 hover:bg-primary/5">
              Sign In
            </Button>
            <Button className="gradient-primary text-primary-foreground shadow-glow">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted/50 transition-smooth"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col space-y-4">
              <a href="#dashboard" className="text-muted-foreground hover:text-primary transition-smooth">
                Dashboard
              </a>
              <a href="#candidates" className="text-muted-foreground hover:text-primary transition-smooth">
                Candidates
              </a>
              <a href="#analytics" className="text-muted-foreground hover:text-primary transition-smooth">
                Analytics
              </a>
              <a href="#skills" className="text-muted-foreground hover:text-primary transition-smooth">
                Skills Analysis
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" className="border-primary/20 hover:bg-primary/5">
                  Sign In
                </Button>
                <Button className="gradient-primary text-primary-foreground shadow-glow">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};