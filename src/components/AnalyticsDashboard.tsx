import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts";
import { TrendingUp, Users, Clock, Target, Award, Zap } from "lucide-react";

const skillDistribution = [
  { skill: "JavaScript", count: 85, color: "#6366F1" },
  { skill: "Python", count: 72, color: "#8B5CF6" },
  { skill: "React", count: 68, color: "#EC4899" },
  { skill: "SQL", count: 54, color: "#10B981" },
  { skill: "AWS", count: 42, color: "#F59E0B" },
  { skill: "Docker", count: 38, color: "#EF4444" }
];

const monthlyTrends = [
  { month: "Jan", applications: 145, qualified: 89 },
  { month: "Feb", applications: 178, qualified: 112 },
  { month: "Mar", applications: 203, qualified: 134 },
  { month: "Apr", applications: 189, qualified: 125 },
  { month: "May", applications: 221, qualified: 156 },
  { month: "Jun", applications: 267, qualified: 189 }
];

const roleDistribution = [
  { role: "Frontend", value: 35, color: "#6366F1" },
  { role: "Backend", value: 28, color: "#8B5CF6" },
  { role: "Full Stack", value: 22, color: "#EC4899" },
  { role: "ML Engineer", value: 15, color: "#10B981" }
];

export const AnalyticsDashboard = () => {
  return (
    <section className="py-16 px-6 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Hiring Analytics
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-time insights into your recruitment pipeline and candidate quality
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 shadow-card border-border/50">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <Badge variant="secondary" className="text-xs">
                <TrendingUp className="w-3 h-3 mr-1" />
                +23%
              </Badge>
            </div>
            <div className="text-3xl font-bold mb-1">1,247</div>
            <div className="text-sm text-muted-foreground">Total Applications</div>
          </Card>

          <Card className="p-6 shadow-card border-border/50">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-full bg-success/10">
                <Target className="h-6 w-6 text-success" />
              </div>
              <Badge variant="secondary" className="text-xs">
                <TrendingUp className="w-3 h-3 mr-1" />
                +18%
              </Badge>
            </div>
            <div className="text-3xl font-bold mb-1">763</div>
            <div className="text-sm text-muted-foreground">Qualified Candidates</div>
          </Card>

          <Card className="p-6 shadow-card border-border/50">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-full bg-warning/10">
                <Clock className="h-6 w-6 text-warning" />
              </div>
              <Badge variant="secondary" className="text-xs">
                <TrendingUp className="w-3 h-3 mr-1" />
                -45%
              </Badge>
            </div>
            <div className="text-3xl font-bold mb-1">2.3h</div>
            <div className="text-sm text-muted-foreground">Avg Screen Time</div>
          </Card>

          <Card className="p-6 shadow-card border-border/50">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-full bg-accent/10">
                <Award className="h-6 w-6 text-accent" />
              </div>
              <Badge variant="secondary" className="text-xs">
                <Zap className="w-3 h-3 mr-1" />
                95%
              </Badge>
            </div>
            <div className="text-3xl font-bold mb-1">87%</div>
            <div className="text-sm text-muted-foreground">Match Accuracy</div>
          </Card>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Monthly Trends */}
          <Card className="p-6 shadow-card border-border/50">
            <h3 className="text-lg font-semibold mb-6">Application Trends</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyTrends}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }} 
                />
                <Line type="monotone" dataKey="applications" stroke="hsl(var(--primary))" strokeWidth={3} />
                <Line type="monotone" dataKey="qualified" stroke="hsl(var(--success))" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          {/* Role Distribution */}
          <Card className="p-6 shadow-card border-border/50">
            <h3 className="text-lg font-semibold mb-6">Applications by Role</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={roleDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {roleDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--card))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }} 
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-wrap gap-2 mt-4">
              {roleDistribution.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm text-muted-foreground">
                    {item.role} ({item.value}%)
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Skills Chart */}
        <Card className="p-6 shadow-card border-border/50">
          <h3 className="text-lg font-semibold mb-6">Top Skills in Candidate Pool</h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={skillDistribution} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis type="number" stroke="hsl(var(--muted-foreground))" />
              <YAxis dataKey="skill" type="category" stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }} 
              />
              <Bar dataKey="count" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </section>
  );
};