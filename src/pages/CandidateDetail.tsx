import { AppSidebar } from "@/components/layout/AppSidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { StatusBadge } from "@/components/ui/status-badge";
import { MatchScore } from "@/components/ui/match-score";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Calendar,
  FileText,
  Download,
  Share2,
  MoreHorizontal,
  Star,
  MessageSquare,
  Clock,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Mock data
const candidate = {
  id: "1",
  name: "Sarah Chen",
  email: "sarah.chen@email.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  currentRole: "Frontend Developer",
  company: "TechCorp",
  appliedFor: "Senior Frontend Developer",
  matchScore: 94,
  stage: "interview" as const,
  appliedDate: "December 10, 2025",
  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
  summary:
    "Experienced frontend developer with 6+ years building scalable web applications. Strong expertise in React, TypeScript, and modern frontend architectures. Passionate about creating intuitive user experiences and mentoring junior developers.",
  skills: [
    { name: "React", score: 95 },
    { name: "TypeScript", score: 92 },
    { name: "JavaScript", score: 98 },
    { name: "Node.js", score: 85 },
    { name: "GraphQL", score: 80 },
    { name: "CSS/SCSS", score: 90 },
    { name: "Testing", score: 88 },
    { name: "Git", score: 95 },
  ],
  experience: [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp",
      period: "2022 - Present",
      description:
        "Leading frontend development for the main product. Implemented design system, improved performance by 40%, mentored 3 junior developers.",
    },
    {
      title: "Frontend Developer",
      company: "StartupABC",
      period: "2019 - 2022",
      description:
        "Built and maintained React applications. Led migration from JavaScript to TypeScript. Introduced testing practices.",
    },
    {
      title: "Junior Developer",
      company: "WebAgency",
      period: "2017 - 2019",
      description:
        "Developed responsive websites and web applications. Worked with various clients across different industries.",
    },
  ],
  education: [
    {
      degree: "BS Computer Science",
      school: "UC Berkeley",
      year: "2017",
    },
  ],
  scoreBreakdown: {
    skills: 95,
    experience: 92,
    education: 88,
    cultural: 90,
  },
  timeline: [
    { event: "Application received", date: "Dec 10, 2025", status: "completed" },
    { event: "Resume screened", date: "Dec 11, 2025", status: "completed" },
    { event: "Phone screen scheduled", date: "Dec 13, 2025", status: "completed" },
    { event: "Technical interview", date: "Dec 18, 2025", status: "current" },
    { event: "Final interview", date: "Pending", status: "pending" },
    { event: "Offer decision", date: "Pending", status: "pending" },
  ],
};

const CandidateDetail = () => {
  const { id } = useParams();

  return (
    <AppSidebar>
      <div className="page-container">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4">
            <Link to="/candidates">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div className="flex gap-4">
              <img
                src={candidate.image}
                alt={candidate.name}
                className="h-20 w-20 rounded-xl object-cover ring-2 ring-background shadow-lg"
              />
              <div>
                <div className="flex items-center gap-3">
                  <h1 className="text-2xl font-bold">{candidate.name}</h1>
                  <StatusBadge status={candidate.stage} />
                </div>
                <p className="text-muted-foreground">
                  {candidate.currentRole} at {candidate.company}
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Briefcase className="h-4 w-4" />
                    {candidate.appliedFor}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4" />
                    {candidate.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    Applied {candidate.appliedDate}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <Mail className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Phone className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Share2 className="h-4 w-4" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Download Resume</DropdownMenuItem>
                <DropdownMenuItem>Schedule Interview</DropdownMenuItem>
                <DropdownMenuItem>Send Email</DropdownMenuItem>
                <DropdownMenuItem className="text-destructive">Reject</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Tabs defaultValue="profile" className="space-y-6">
              <TabsList>
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="resume">Resume</TabsTrigger>
                <TabsTrigger value="evaluation">Evaluation</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
              </TabsList>

              <TabsContent value="profile" className="space-y-6">
                {/* Summary */}
                <Card>
                  <CardHeader>
                    <CardTitle>Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{candidate.summary}</p>
                  </CardContent>
                </Card>

                {/* Skills */}
                <Card>
                  <CardHeader>
                    <CardTitle>Skills Assessment</CardTitle>
                    <CardDescription>AI-evaluated skill proficiency</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {candidate.skills.map((skill) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-muted-foreground">{skill.score}%</span>
                          </div>
                          <Progress value={skill.score} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Experience */}
                <Card>
                  <CardHeader>
                    <CardTitle>Work Experience</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {candidate.experience.map((exp, index) => (
                        <div
                          key={index}
                          className="relative pl-6 border-l-2 border-muted pb-6 last:pb-0"
                        >
                          <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary" />
                          <h4 className="font-semibold">{exp.title}</h4>
                          <p className="text-sm text-primary">{exp.company}</p>
                          <p className="text-xs text-muted-foreground mt-1">{exp.period}</p>
                          <p className="text-sm text-muted-foreground mt-2">{exp.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Education */}
                <Card>
                  <CardHeader>
                    <CardTitle>Education</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {candidate.education.map((edu, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <GraduationCap className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="font-medium">{edu.degree}</p>
                          <p className="text-sm text-muted-foreground">
                            {edu.school} • {edu.year}
                          </p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="resume">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Resume</CardTitle>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center rounded-lg border-2 border-dashed bg-muted/50 p-12">
                      <div className="text-center">
                        <FileText className="mx-auto h-12 w-12 text-muted-foreground" />
                        <p className="mt-2 text-sm text-muted-foreground">
                          Resume preview will be displayed here
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="evaluation" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Interview Feedback</CardTitle>
                    <CardDescription>Submit your evaluation of the candidate</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      {["Technical Skills", "Communication", "Problem Solving", "Culture Fit"].map(
                        (criteria) => (
                          <div key={criteria} className="space-y-2">
                            <label className="text-sm font-medium">{criteria}</label>
                            <div className="flex gap-1">
                              {[1, 2, 3, 4, 5].map((rating) => (
                                <Button
                                  key={rating}
                                  variant="outline"
                                  size="icon"
                                  className="h-8 w-8"
                                >
                                  <Star className="h-4 w-4" />
                                </Button>
                              ))}
                            </div>
                          </div>
                        )
                      )}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Comments</label>
                      <Textarea placeholder="Add your feedback..." className="min-h-[100px]" />
                    </div>
                    <Button>Submit Evaluation</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="activity">
                <Card>
                  <CardHeader>
                    <CardTitle>Activity Timeline</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {candidate.timeline.map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          {item.status === "completed" ? (
                            <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
                          ) : item.status === "current" ? (
                            <Clock className="h-5 w-5 text-primary mt-0.5 animate-pulse" />
                          ) : (
                            <div className="h-5 w-5 rounded-full border-2 border-muted mt-0.5" />
                          )}
                          <div className="flex-1">
                            <p className="font-medium">{item.event}</p>
                            <p className="text-sm text-muted-foreground">{item.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Match Score Card */}
            <Card>
              <CardHeader>
                <CardTitle>Match Score</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <MatchScore score={candidate.matchScore} size="lg" />
                <div className="mt-6 w-full space-y-3">
                  {Object.entries(candidate.scoreBreakdown).map(([key, value]) => (
                    <div key={key} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="capitalize">{key}</span>
                        <span className="text-muted-foreground">{value}%</span>
                      </div>
                      <Progress value={value} className="h-1.5" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button className="w-full justify-start" variant="outline">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule Interview
                </Button>
                <Button className="w-full justify-start text-success hover:text-success" variant="outline">
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                  Move to Next Stage
                </Button>
                <Button className="w-full justify-start text-destructive hover:text-destructive" variant="outline">
                  <XCircle className="mr-2 h-4 w-4" />
                  Reject Candidate
                </Button>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <a href={`mailto:${candidate.email}`} className="text-sm hover:underline">
                    {candidate.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <a href={`tel:${candidate.phone}`} className="text-sm hover:underline">
                    {candidate.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{candidate.location}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AppSidebar>
  );
};

export default CandidateDetail;
