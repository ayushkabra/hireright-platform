import { AppSidebar } from "@/components/layout/AppSidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { StatusBadge } from "@/components/ui/status-badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  ArrowLeft,
  Edit,
  Share2,
  MoreHorizontal,
  MapPin,
  Building2,
  Calendar,
  DollarSign,
  Users,
  CheckCircle2,
  Clock,
  UserPlus,
  FileText,
  Sparkles,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MatchScore } from "@/components/ui/match-score";

// Mock data
const job = {
  id: "1",
  title: "Senior Frontend Developer",
  department: "Engineering",
  location: "Remote",
  type: "Full-time",
  status: "active" as const,
  compensation: "$120K - $150K",
  created: "December 15, 2025",
  hiringManager: "Jane Smith",
  candidates: {
    total: 24,
    new: 8,
    screening: 6,
    interview: 5,
    offered: 3,
    hired: 2,
  },
  stakeholders: [
    { name: "Jane Smith", role: "Hiring Manager", status: "completed" },
    { name: "Mike Chen", role: "Tech Lead", status: "completed" },
    { name: "Sarah Johnson", role: "Team Member", status: "pending" },
  ],
  description: `We are looking for a Senior Frontend Developer to join our Engineering team. You will be responsible for building and maintaining our web applications using modern technologies.

## Responsibilities
- Develop and maintain web applications using React and TypeScript
- Collaborate with designers and backend engineers
- Write clean, maintainable, and well-tested code
- Participate in code reviews and mentor junior developers

## Requirements
- 5+ years of experience with React and TypeScript
- Strong understanding of web fundamentals (HTML, CSS, JavaScript)
- Experience with state management (Redux, Zustand, or similar)
- Familiarity with testing frameworks (Jest, React Testing Library)

## Nice to Have
- Experience with Next.js or similar frameworks
- Knowledge of CI/CD pipelines
- Open source contributions`,
};

const candidates = [
  {
    id: "1",
    name: "Sarah Chen",
    email: "sarah.chen@email.com",
    matchScore: 94,
    stage: "interview",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face",
  },
  {
    id: "2",
    name: "Michael Park",
    email: "michael.park@email.com",
    matchScore: 89,
    stage: "screening",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    email: "emily.r@email.com",
    matchScore: 85,
    stage: "interview",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
  },
];

const JobDetail = () => {
  const { id } = useParams();

  return (
    <AppSidebar>
      <div className="page-container">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4">
            <Link to="/jobs">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-bold">{job.title}</h1>
                <StatusBadge status={job.status} />
              </div>
              <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Building2 className="h-4 w-4" />
                  {job.department}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" />
                  {job.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <DollarSign className="h-4 w-4" />
                  {job.compensation}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  Posted {job.created}
                </span>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <Share2 className="h-4 w-4" />
            </Button>
            <Button variant="outline">
              <Edit className="mr-2 h-4 w-4" />
              Edit
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Duplicate</DropdownMenuItem>
                <DropdownMenuItem>Archive</DropdownMenuItem>
                <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-5">
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold">{job.candidates.total}</p>
              <p className="text-sm text-muted-foreground">Total Candidates</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-primary">{job.candidates.new}</p>
              <p className="text-sm text-muted-foreground">New</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-warning">{job.candidates.screening}</p>
              <p className="text-sm text-muted-foreground">Screening</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-accent">{job.candidates.interview}</p>
              <p className="text-sm text-muted-foreground">Interview</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-2xl font-bold text-success">{job.candidates.hired}</p>
              <p className="text-sm text-muted-foreground">Hired</p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="candidates">Candidates</TabsTrigger>
            <TabsTrigger value="stakeholders">Stakeholders</TabsTrigger>
            <TabsTrigger value="description">Job Description</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-3">
              {/* Pipeline */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Hiring Pipeline</CardTitle>
                  <CardDescription>Track candidates through each stage</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { stage: "Applied", count: job.candidates.new, total: job.candidates.total },
                    { stage: "Screening", count: job.candidates.screening, total: job.candidates.total },
                    { stage: "Interview", count: job.candidates.interview, total: job.candidates.total },
                    { stage: "Offered", count: job.candidates.offered, total: job.candidates.total },
                    { stage: "Hired", count: job.candidates.hired, total: job.candidates.total },
                  ].map((item) => (
                    <div key={item.stage} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{item.stage}</span>
                        <span className="text-muted-foreground">
                          {item.count} / {item.total}
                        </span>
                      </div>
                      <Progress value={(item.count / item.total) * 100} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Top Candidates */}
              <Card>
                <CardHeader>
                  <CardTitle>Top Candidates</CardTitle>
                  <CardDescription>Highest match scores</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {candidates.slice(0, 3).map((candidate) => (
                    <Link
                      key={candidate.id}
                      to={`/candidates/${candidate.id}`}
                      className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-muted"
                    >
                      <img
                        src={candidate.image}
                        alt={candidate.name}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{candidate.name}</p>
                        <p className="text-xs text-muted-foreground capitalize">{candidate.stage}</p>
                      </div>
                      <MatchScore score={candidate.matchScore} size="sm" showLabel={false} />
                    </Link>
                  ))}
                  <Link to={`/jobs/${id}/candidates`}>
                    <Button variant="outline" className="w-full">
                      View All Candidates
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="candidates" className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">All Candidates ({candidates.length})</h3>
              <Button>
                <UserPlus className="mr-2 h-4 w-4" />
                Add Candidate
              </Button>
            </div>
            <div className="space-y-2">
              {candidates.map((candidate) => (
                <Link
                  key={candidate.id}
                  to={`/candidates/${candidate.id}`}
                  className="flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted/50"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={candidate.image}
                      alt={candidate.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium">{candidate.name}</p>
                      <p className="text-sm text-muted-foreground">{candidate.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <StatusBadge status={candidate.stage as any} />
                    <MatchScore score={candidate.matchScore} size="sm" showLabel={false} />
                  </div>
                </Link>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="stakeholders" className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Stakeholder Inputs</h3>
              <Button>
                <UserPlus className="mr-2 h-4 w-4" />
                Invite Stakeholder
              </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {job.stakeholders.map((stakeholder) => (
                <Card key={stakeholder.name}>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-medium">{stakeholder.name}</p>
                        <p className="text-sm text-muted-foreground">{stakeholder.role}</p>
                      </div>
                      {stakeholder.status === "completed" ? (
                        <CheckCircle2 className="h-5 w-5 text-success" />
                      ) : (
                        <Clock className="h-5 w-5 text-warning" />
                      )}
                    </div>
                    <Button
                      variant={stakeholder.status === "completed" ? "secondary" : "outline"}
                      className="mt-4 w-full"
                    >
                      {stakeholder.status === "completed" ? "View Input" : "Pending"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="description" className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Generated Job Description</h3>
              <div className="flex gap-2">
                <Button variant="outline">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Regenerate
                </Button>
                <Button variant="outline">
                  <FileText className="mr-2 h-4 w-4" />
                  Export
                </Button>
              </div>
            </div>
            <Card>
              <CardContent className="p-6 prose prose-sm max-w-none">
                <div className="whitespace-pre-wrap">{job.description}</div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppSidebar>
  );
};

export default JobDetail;
