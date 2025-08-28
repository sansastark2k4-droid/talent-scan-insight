import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Star, Eye, Download, Mail, MapPin } from "lucide-react";

interface Candidate {
  id: string;
  name: string;
  email: string;
  location: string;
  fitScore: number;
  avatar?: string;
  skills: string[];
  experience: string;
  education: string;
  role: string;
}

const mockCandidates: Candidate[] = [
  {
    id: "1",
    name: "Sarah Chen",
    email: "sarah.chen@email.com",
    location: "San Francisco, CA",
    fitScore: 95,
    skills: ["React", "TypeScript", "Node.js", "Python", "Machine Learning"],
    experience: "5+ years",
    education: "MS Computer Science, Stanford",
    role: "Full Stack Developer"
  },
  {
    id: "2", 
    name: "Marcus Rodriguez",
    email: "marcus.r@email.com",
    location: "Austin, TX",
    fitScore: 88,
    skills: ["Python", "TensorFlow", "SQL", "Docker", "AWS"],
    experience: "4+ years",
    education: "BS Data Science, UT Austin",
    role: "ML Engineer"
  },
  {
    id: "3",
    name: "Priya Patel",
    email: "priya.patel@email.com", 
    location: "Seattle, WA",
    fitScore: 82,
    skills: ["Java", "Spring Boot", "Kubernetes", "PostgreSQL"],
    experience: "6+ years",
    education: "MS Software Engineering, UW",
    role: "Backend Developer"
  },
  {
    id: "4",
    name: "Alex Thompson",
    email: "alex.t@email.com",
    location: "New York, NY", 
    fitScore: 79,
    skills: ["React", "Vue.js", "CSS", "JavaScript", "Figma"],
    experience: "3+ years",
    education: "BS Design, NYU",
    role: "Frontend Developer"
  }
];

export const CandidateList = () => {
  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-success";
    if (score >= 80) return "text-warning";
    return "text-muted-foreground";
  };

  const getScoreBadgeColor = (score: number) => {
    if (score >= 90) return "bg-success/10 text-success border-success/20";
    if (score >= 80) return "bg-warning/10 text-warning border-warning/20";
    return "bg-muted/10 text-muted-foreground border-muted/20";
  };

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Top Candidates
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            AI-powered candidate ranking based on job requirements and skill matching
          </p>
        </div>

        <div className="space-y-6">
          {mockCandidates.map((candidate, index) => (
            <Card key={candidate.id} className="p-6 shadow-card hover:shadow-elevated transition-smooth border-border/50">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={candidate.avatar} />
                    <AvatarFallback className="gradient-primary text-primary-foreground font-semibold">
                      {candidate.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <div className="flex items-center space-x-3 mb-1">
                      <h3 className="text-xl font-semibold">{candidate.name}</h3>
                      <Badge variant="outline" className={getScoreBadgeColor(candidate.fitScore)}>
                        <Star className="w-3 h-3 mr-1" />
                        {candidate.fitScore}% Match
                      </Badge>
                      {index === 0 && (
                        <Badge className="gradient-primary text-primary-foreground">
                          Top Pick
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span>{candidate.role}</span>
                      <span>•</span>
                      <span>{candidate.experience}</span>
                      <span>•</span>
                      <div className="flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {candidate.location}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" className="border-primary/20 hover:bg-primary/5">
                    <Eye className="w-4 h-4 mr-2" />
                    View
                  </Button>
                  <Button variant="outline" size="sm" className="border-primary/20 hover:bg-primary/5">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact
                  </Button>
                  <Button variant="outline" size="sm" className="border-primary/20 hover:bg-primary/5">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">AI Fit Score</span>
                  <span className={`text-sm font-bold ${getScoreColor(candidate.fitScore)}`}>
                    {candidate.fitScore}%
                  </span>
                </div>
                <Progress value={candidate.fitScore} className="h-2" />
              </div>

              <div className="mb-4">
                <p className="text-sm text-muted-foreground mb-2">Education</p>
                <p className="text-sm">{candidate.education}</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2">Key Skills</p>
                <div className="flex flex-wrap gap-2">
                  {candidate.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" className="border-primary/20 hover:bg-primary/5">
            Load More Candidates
          </Button>
        </div>
      </div>
    </section>
  );
};