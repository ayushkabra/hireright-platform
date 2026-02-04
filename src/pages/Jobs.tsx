import { AppSidebar } from "@/components/layout/AppSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { StatusBadge } from "@/components/ui/status-badge";
import {
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  MapPin,
  Building2,
  Calendar,
  Users,
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

// Mock data
const jobs = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    status: "active" as const,
    candidates: 24,
    shortlisted: 8,
    created: "Dec 15, 2025",
    compensation: "$120K - $150K",
  },
  {
    id: "2",
    title: "Product Manager",
    department: "Product",
    location: "New York, NY",
    type: "Full-time",
    status: "active" as const,
    candidates: 18,
    shortlisted: 5,
    created: "Dec 10, 2025",
    compensation: "$130K - $160K",
  },
  {
    id: "3",
    title: "UX Designer",
    department: "Design",
    location: "Hybrid",
    type: "Full-time",
    status: "pending" as const,
    candidates: 12,
    shortlisted: 3,
    created: "Dec 8, 2025",
    compensation: "$90K - $120K",
  },
  {
    id: "4",
    title: "Backend Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    status: "active" as const,
    candidates: 32,
    shortlisted: 10,
    created: "Dec 5, 2025",
    compensation: "$140K - $180K",
  },
  {
    id: "5",
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Contract",
    status: "draft" as const,
    candidates: 0,
    shortlisted: 0,
    created: "Dec 20, 2025",
    compensation: "$100/hr",
  },
  {
    id: "6",
    title: "Marketing Manager",
    department: "Marketing",
    location: "Austin, TX",
    type: "Full-time",
    status: "closed" as const,
    candidates: 45,
    shortlisted: 12,
    created: "Nov 15, 2025",
    compensation: "$95K - $115K",
  },
];

const Jobs = () => {
  return (
    <AppSidebar>
      <div className="page-container">
        {/* Header */}
        <div className="section-header">
          <div>
            <h1 className="text-2xl font-bold">Jobs</h1>
            <p className="text-muted-foreground">Manage your job openings and requisitions</p>
          </div>
          <Link to="/jobs/new">
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Create Job
            </Button>
          </Link>
        </div>

        {/* Filters */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search jobs..." className="pl-9" />
          </div>
          <div className="flex gap-2">
            <Select defaultValue="all">
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="closed">Closed</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                <SelectItem value="engineering">Engineering</SelectItem>
                <SelectItem value="product">Product</SelectItem>
                <SelectItem value="design">Design</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Jobs Grid */}
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {jobs.map((job) => (
            <Link
              key={job.id}
              to={`/jobs/${job.id}`}
              className="group relative rounded-xl border bg-card p-5 transition-all hover:border-primary/20 hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <StatusBadge status={job.status} />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 opacity-0 group-hover:opacity-100"
                      onClick={(e) => e.preventDefault()}
                    >
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Duplicate</DropdownMenuItem>
                    <DropdownMenuItem>Archive</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="mt-4">
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {job.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-primary">{job.compensation}</p>
              </div>

              <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Building2 className="h-4 w-4" />
                  <span>{job.department}</span>
                  <span className="text-border">•</span>
                  <span>{job.type}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Posted {job.created}</span>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-4 border-t pt-4">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">
                    <span className="font-medium">{job.candidates}</span>
                    <span className="text-muted-foreground"> candidates</span>
                  </span>
                </div>
                <div className="h-4 border-r" />
                <span className="text-sm">
                  <span className="font-medium text-success">{job.shortlisted}</span>
                  <span className="text-muted-foreground"> shortlisted</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </AppSidebar>
  );
};

export default Jobs;
