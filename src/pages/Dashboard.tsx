import { AppSidebar } from "@/components/layout/AppSidebar";
import { StatCard } from "@/components/ui/stat-card";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/ui/status-badge";
import { MatchScore } from "@/components/ui/match-score";
import {
  Briefcase,
  Users,
  Clock,
  TrendingUp,
  Plus,
  ArrowRight,
  MapPin,
  Building2,
} from "lucide-react";
import { Link } from "react-router-dom";

// Mock data
const recentJobs = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Remote",
    status: "active" as const,
    candidates: 24,
    created: "2 days ago",
  },
  {
    id: "2",
    title: "Product Manager",
    department: "Product",
    location: "New York, NY",
    status: "active" as const,
    candidates: 18,
    created: "5 days ago",
  },
  {
    id: "3",
    title: "UX Designer",
    department: "Design",
    location: "Hybrid",
    status: "pending" as const,
    candidates: 12,
    created: "1 week ago",
  },
];

const topCandidates = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "Senior Frontend Developer",
    matchScore: 94,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face",
  },
  {
    id: "2",
    name: "Michael Park",
    role: "Senior Frontend Developer",
    matchScore: 89,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Product Manager",
    matchScore: 87,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
  },
  {
    id: "4",
    name: "David Kim",
    role: "UX Designer",
    matchScore: 82,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
  },
];

const Dashboard = () => {
  return (
    <AppSidebar>
      <div className="page-container">
        {/* Header */}
        <div className="section-header">
          <div>
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back! Here's your hiring overview.</p>
          </div>
          <Link to="/jobs/new">
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              New Job
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Active Jobs"
            value={12}
            icon={Briefcase}
            trend={{ value: 8, label: "vs last month" }}
            subtitle="vs last month"
          />
          <StatCard
            title="Total Candidates"
            value={284}
            icon={Users}
            trend={{ value: 12, label: "vs last month" }}
            subtitle="vs last month"
          />
          <StatCard
            title="Avg. Time to Hire"
            value="18 days"
            icon={Clock}
            trend={{ value: -5, label: "faster" }}
            subtitle="faster than avg"
          />
          <StatCard
            title="Offer Accept Rate"
            value="87%"
            icon={TrendingUp}
            trend={{ value: 3, label: "vs last quarter" }}
            subtitle="vs last quarter"
          />
        </div>

        {/* Main content grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Recent Jobs */}
          <Card className="lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Recent Jobs</CardTitle>
                <CardDescription>Your latest job openings</CardDescription>
              </div>
              <Link to="/jobs">
                <Button variant="ghost" size="sm" className="gap-1">
                  View all <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentJobs.map((job) => (
                <Link
                  key={job.id}
                  to={`/jobs/${job.id}`}
                  className="flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted/50"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="font-medium">{job.title}</h3>
                      <StatusBadge status={job.status} />
                    </div>
                    <div className="mt-1 flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Building2 className="h-3.5 w-3.5" />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {job.location}
                      </span>
                      <span>{job.candidates} candidates</span>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">{job.created}</span>
                </Link>
              ))}
            </CardContent>
          </Card>

          {/* Top Candidates */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Top Candidates</CardTitle>
                <CardDescription>Highest match scores</CardDescription>
              </div>
              <Link to="/candidates">
                <Button variant="ghost" size="sm" className="gap-1">
                  View all <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardHeader>
            <CardContent className="space-y-4">
              {topCandidates.map((candidate) => (
                <Link
                  key={candidate.id}
                  to={`/candidates/${candidate.id}`}
                  className="flex items-center gap-4 rounded-lg p-2 transition-colors hover:bg-muted/50"
                >
                  <img
                    src={candidate.image}
                    alt={candidate.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{candidate.name}</p>
                    <p className="text-sm text-muted-foreground truncate">{candidate.role}</p>
                  </div>
                  <MatchScore score={candidate.matchScore} size="sm" showLabel={false} />
                </Link>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks to help you get started</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <Link to="/jobs/new">
                <Button variant="outline" className="w-full justify-start gap-3 h-auto py-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium">Create Job</p>
                    <p className="text-sm text-muted-foreground">Post a new opening</p>
                  </div>
                </Button>
              </Link>
              <Link to="/candidates">
                <Button variant="outline" className="w-full justify-start gap-3 h-auto py-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                    <Users className="h-5 w-5 text-accent" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium">Review Candidates</p>
                    <p className="text-sm text-muted-foreground">Screen applications</p>
                  </div>
                </Button>
              </Link>
              <Link to="/analytics">
                <Button variant="outline" className="w-full justify-start gap-3 h-auto py-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10">
                    <TrendingUp className="h-5 w-5 text-success" />
                  </div>
                  <div className="text-left">
                    <p className="font-medium">View Analytics</p>
                    <p className="text-sm text-muted-foreground">Track performance</p>
                  </div>
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppSidebar>
  );
};

export default Dashboard;
