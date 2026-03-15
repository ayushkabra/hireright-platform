import { AppSidebar } from "@/components/layout/AppSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { StatusBadge } from "@/components/ui/status-badge";
import { MatchScore } from "@/components/ui/match-score";
import {
  Search,
  Filter,
  Upload,
  MoreHorizontal,
  Mail,
  Phone,
  MapPin,
  Briefcase,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

// Mock data
const candidates = [
  {
    id: "1",
    name: "Sarah Chen",
    email: "sarah.chen@email.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    currentRole: "Frontend Developer at TechCorp",
    appliedFor: "Senior Frontend Developer",
    matchScore: 94,
    stage: "interview" as const,
    skills: ["React", "TypeScript", "Node.js", "GraphQL"],
    experience: "6 years",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
  },
  {
    id: "2",
    name: "Michael Park",
    email: "michael.park@email.com",
    phone: "+1 (555) 234-5678",
    location: "New York, NY",
    currentRole: "Full Stack Engineer at StartupXYZ",
    appliedFor: "Senior Frontend Developer",
    matchScore: 89,
    stage: "pending" as const,
    skills: ["React", "Vue.js", "Python", "AWS"],
    experience: "5 years",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    email: "emily.r@email.com",
    phone: "+1 (555) 345-6789",
    location: "Austin, TX",
    currentRole: "Product Manager at ProductCo",
    appliedFor: "Product Manager",
    matchScore: 87,
    stage: "interview" as const,
    skills: ["Product Strategy", "Agile", "SQL", "Figma"],
    experience: "4 years",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
  },
  {
    id: "4",
    name: "David Kim",
    email: "david.kim@email.com",
    phone: "+1 (555) 456-7890",
    location: "Seattle, WA",
    currentRole: "Senior UX Designer at DesignStudio",
    appliedFor: "UX Designer",
    matchScore: 82,
    stage: "pending" as const,
    skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
    experience: "7 years",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
  },
  {
    id: "5",
    name: "Lisa Wang",
    email: "lisa.wang@email.com",
    phone: "+1 (555) 567-8901",
    location: "Los Angeles, CA",
    currentRole: "Backend Engineer at CloudTech",
    appliedFor: "Backend Engineer",
    matchScore: 78,
    stage: "active" as const,
    skills: ["Go", "Python", "PostgreSQL", "Kubernetes"],
    experience: "4 years",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face",
  },
  {
    id: "6",
    name: "James Wilson",
    email: "james.w@email.com",
    phone: "+1 (555) 678-9012",
    location: "Chicago, IL",
    currentRole: "DevOps Engineer at InfraCo",
    appliedFor: "DevOps Engineer",
    matchScore: 65,
    stage: "rejected" as const,
    skills: ["Docker", "Terraform", "AWS", "CI/CD"],
    experience: "3 years",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
  },
];

const Candidates = () => {
  return (
    <AppSidebar>
      <div className="page-container">
        {/* Header */}
        <div className="section-header">
          <div>
            <h1 className="text-2xl font-bold">Candidates</h1>
            <p className="text-muted-foreground">
              Review and manage all candidate applications
            </p>
          </div>
          <Button className="gap-2">
            <Upload className="h-4 w-4" />
            Upload Resumes
          </Button>
        </div>

        {/* Filters */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search candidates..." className="pl-9" />
          </div>
          <div className="flex gap-2">
            <Select defaultValue="all">
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Stage" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Stages</SelectItem>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="screening">Screening</SelectItem>
                <SelectItem value="interview">Interview</SelectItem>
                <SelectItem value="offered">Offered</SelectItem>
                <SelectItem value="hired">Hired</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Job" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Jobs</SelectItem>
                <SelectItem value="frontend">Senior Frontend Developer</SelectItem>
                <SelectItem value="product">Product Manager</SelectItem>
                <SelectItem value="ux">UX Designer</SelectItem>
                <SelectItem value="backend">Backend Engineer</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="score">
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="score">Match Score</SelectItem>
                <SelectItem value="recent">Most Recent</SelectItem>
                <SelectItem value="name">Name</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Candidates List */}
        <div className="space-y-3">
          {candidates.map((candidate) => (
            <Link
              key={candidate.id}
              to={`/candidates/${candidate.id}`}
              className="group flex items-center gap-4 rounded-xl border bg-card p-4 transition-all hover:border-primary/20 hover:shadow-md"
            >
              <Checkbox
                onClick={(e) => e.stopPropagation()}
                className="ml-1"
              />
              
              <img
                src={candidate.image}
                alt={candidate.name}
                className="h-14 w-14 rounded-full object-cover ring-2 ring-background"
              />

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3">
                  <h3 className="font-semibold group-hover:text-primary transition-colors">
                    {candidate.name}
                  </h3>
                  <StatusBadge status={candidate.stage} />
                </div>
                <p className="text-sm text-muted-foreground mt-0.5">
                  {candidate.currentRole}
                </p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Briefcase className="h-3 w-3" />
                    {candidate.appliedFor}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {candidate.location}
                  </span>
                  <span>{candidate.experience} experience</span>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {candidate.skills.slice(0, 4).map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-secondary px-2 py-0.5 text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                  {candidate.skills.length > 4 && (
                    <span className="text-xs text-muted-foreground">
                      +{candidate.skills.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="hidden sm:flex flex-col items-center gap-1 text-muted-foreground">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Mail className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Phone className="h-4 w-4" />
                  </Button>
                </div>
                
                <MatchScore score={candidate.matchScore} size="md" />
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="opacity-0 group-hover:opacity-100"
                      onClick={(e) => e.preventDefault()}
                    >
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Profile</DropdownMenuItem>
                    <DropdownMenuItem>Send Email</DropdownMenuItem>
                    <DropdownMenuItem>Schedule Interview</DropdownMenuItem>
                    <DropdownMenuItem>Move to Stage</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">Reject</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </AppSidebar>
  );
};

export default Candidates;
