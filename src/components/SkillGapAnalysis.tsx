import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { TrendingDown, TrendingUp, AlertTriangle, CheckCircle, Download } from "lucide-react";

interface SkillGap {
  skill: string;
  required: number;
  available: number;
  gap: number;
  trend: 'up' | 'down' | 'stable';
  priority: 'high' | 'medium' | 'low';
}

const skillGaps: SkillGap[] = [
  {
    skill: "Machine Learning",
    required: 85,
    available: 42,
    gap: 43,
    trend: 'down',
    priority: 'high'
  },
  {
    skill: "Kubernetes", 
    required: 70,
    available: 38,
    gap: 32,
    trend: 'down',
    priority: 'high'
  },
  {
    skill: "GraphQL",
    required: 60,
    available: 35,
    gap: 25,
    trend: 'up',
    priority: 'medium'
  },
  {
    skill: "TypeScript",
    required: 90,
    available: 78,
    gap: 12,
    trend: 'up', 
    priority: 'medium'
  },
  {
    skill: "React",
    required: 85,
    available: 88,
    gap: -3,
    trend: 'up',
    priority: 'low'
  },
  {
    skill: "Python",
    required: 80,
    available: 92,
    gap: -12,
    trend: 'stable',
    priority: 'low'
  }
];

export const SkillGapAnalysis = () => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-destructive/10 text-destructive border-destructive/20';
      case 'medium': return 'bg-warning/10 text-warning border-warning/20';
      case 'low': return 'bg-success/10 text-success border-success/20';
      default: return 'bg-muted/10 text-muted-foreground border-muted/20';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="h-4 w-4 text-success" />;
      case 'down': return <TrendingDown className="h-4 w-4 text-destructive" />;
      default: return <div className="h-4 w-4 rounded-full bg-muted-foreground" />;
    }
  };

  const getGapStatus = (gap: number) => {
    if (gap > 30) return { icon: <AlertTriangle className="h-4 w-4 text-destructive" />, text: "Critical Gap", color: "text-destructive" };
    if (gap > 10) return { icon: <TrendingDown className="h-4 w-4 text-warning" />, text: "Skill Gap", color: "text-warning" };
    if (gap > -10) return { icon: <CheckCircle className="h-4 w-4 text-success" />, text: "Good Match", color: "text-success" };
    return { icon: <CheckCircle className="h-4 w-4 text-success" />, text: "Surplus", color: "text-success" };
  };

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Skill Gap Analysis
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Identify skill shortages in your candidate pool and optimize your hiring strategy
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 shadow-card border-border/50">
            <div className="flex items-center justify-between mb-2">
              <div className="p-2 rounded-full bg-destructive/10">
                <AlertTriangle className="h-5 w-5 text-destructive" />
              </div>
              <Badge variant="outline" className="bg-destructive/10 text-destructive border-destructive/20">
                Critical
              </Badge>
            </div>
            <div className="text-2xl font-bold mb-1">2</div>
            <div className="text-sm text-muted-foreground">Critical Gaps</div>
          </Card>

          <Card className="p-6 shadow-card border-border/50">
            <div className="flex items-center justify-between mb-2">
              <div className="p-2 rounded-full bg-warning/10">
                <TrendingDown className="h-5 w-5 text-warning" />
              </div>
              <Badge variant="outline" className="bg-warning/10 text-warning border-warning/20">
                Medium
              </Badge>
            </div>
            <div className="text-2xl font-bold mb-1">1</div>
            <div className="text-sm text-muted-foreground">Skill Gaps</div>
          </Card>

          <Card className="p-6 shadow-card border-border/50">
            <div className="flex items-center justify-between mb-2">
              <div className="p-2 rounded-full bg-success/10">
                <CheckCircle className="h-5 w-5 text-success" />
              </div>
              <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                Good
              </Badge>
            </div>
            <div className="text-2xl font-bold mb-1">3</div>
            <div className="text-sm text-muted-foreground">Well Covered</div>
          </Card>

          <Card className="p-6 shadow-card border-border/50">
            <div className="flex items-center justify-between mb-2">
              <div className="p-2 rounded-full bg-primary/10">
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                Trending
              </Badge>
            </div>
            <div className="text-2xl font-bold mb-1">67%</div>
            <div className="text-sm text-muted-foreground">Avg Coverage</div>
          </Card>
        </div>

        {/* Skills Analysis */}
        <Card className="p-6 shadow-card border-border/50 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Detailed Skill Analysis</h3>
            <Button variant="outline" className="border-primary/20 hover:bg-primary/5">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
          </div>

          <div className="space-y-6">
            {skillGaps.map((skill) => {
              const status = getGapStatus(skill.gap);
              return (
                <div key={skill.skill} className="border border-border/50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <h4 className="font-semibold">{skill.skill}</h4>
                      <Badge variant="outline" className={getPriorityColor(skill.priority)}>
                        {skill.priority} priority
                      </Badge>
                      <div className="flex items-center space-x-1">
                        {getTrendIcon(skill.trend)}
                        <span className="text-xs text-muted-foreground">
                          {skill.trend === 'up' ? 'Improving' : skill.trend === 'down' ? 'Declining' : 'Stable'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      {status.icon}
                      <span className={`text-sm font-medium ${status.color}`}>
                        {status.text}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Required Coverage</span>
                        <span className="font-medium">{skill.required}%</span>
                      </div>
                      <Progress value={skill.required} className="h-2 mb-3" />
                      
                      <div className="flex justify-between text-sm mb-2">
                        <span>Available Coverage</span>
                        <span className="font-medium">{skill.available}%</span>
                      </div>
                      <Progress value={skill.available} className="h-2" />
                    </div>

                    <div className="flex items-center justify-center">
                      <div className="text-center">
                        <div className={`text-3xl font-bold mb-1 ${skill.gap > 0 ? 'text-destructive' : 'text-success'}`}>
                          {skill.gap > 0 ? '+' : ''}{skill.gap}%
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {skill.gap > 0 ? 'Skill Gap' : 'Surplus'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Recommendations */}
        <Card className="p-6 shadow-card border-border/50">
          <h3 className="text-lg font-semibold mb-4">Recommendations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-3 text-destructive">Immediate Actions</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <AlertTriangle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                  <span>Source more Machine Learning candidates - 43% gap</span>
                </li>
                <li className="flex items-start space-x-2">
                  <AlertTriangle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                  <span>Prioritize Kubernetes experience in job requirements</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-3 text-success">Opportunities</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                  <span>Leverage surplus Python talent for cross-training</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                  <span>React skills are well-covered across candidates</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};