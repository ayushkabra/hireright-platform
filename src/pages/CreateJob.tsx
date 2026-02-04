import { AppSidebar } from "@/components/layout/AppSidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, ArrowRight, Save, Send, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/lib/utils";

const steps = [
  { id: 1, name: "Basic Info", description: "Job title and details" },
  { id: 2, name: "Requirements", description: "Skills and qualifications" },
  { id: 3, name: "Stakeholders", description: "Invite collaborators" },
  { id: 4, name: "Review", description: "Preview and publish" },
];

const CreateJob = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <AppSidebar>
      <div className="page-container max-w-4xl">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Link to="/jobs">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold">Create Job Requisition</h1>
            <p className="text-muted-foreground">Fill in the details to create a new job opening</p>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full border-2 font-semibold transition-colors",
                    currentStep === step.id
                      ? "border-primary bg-primary text-primary-foreground"
                      : currentStep > step.id
                      ? "border-success bg-success text-success-foreground"
                      : "border-muted bg-muted text-muted-foreground"
                  )}
                >
                  {currentStep > step.id ? "✓" : step.id}
                </div>
                <div className="hidden sm:block">
                  <p
                    className={cn(
                      "text-sm font-medium",
                      currentStep === step.id ? "text-foreground" : "text-muted-foreground"
                    )}
                  >
                    {step.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={cn(
                    "mx-4 h-0.5 w-12 lg:w-24",
                    currentStep > step.id ? "bg-success" : "bg-muted"
                  )}
                />
              )}
            </div>
          ))}
        </div>

        {/* Form Content */}
        <Card>
          {currentStep === 1 && (
            <>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>
                  Enter the fundamental details about this job opening
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="title">Job Title *</Label>
                    <Input id="title" placeholder="e.g. Senior Frontend Developer" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="department">Department *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="engineering">Engineering</SelectItem>
                        <SelectItem value="product">Product</SelectItem>
                        <SelectItem value="design">Design</SelectItem>
                        <SelectItem value="marketing">Marketing</SelectItem>
                        <SelectItem value="sales">Sales</SelectItem>
                        <SelectItem value="hr">Human Resources</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="seniority">Seniority Level *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="entry">Entry Level</SelectItem>
                        <SelectItem value="mid">Mid Level</SelectItem>
                        <SelectItem value="senior">Senior</SelectItem>
                        <SelectItem value="lead">Lead</SelectItem>
                        <SelectItem value="manager">Manager</SelectItem>
                        <SelectItem value="director">Director</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="employment">Employment Type *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="full-time">Full-time</SelectItem>
                        <SelectItem value="part-time">Part-time</SelectItem>
                        <SelectItem value="contract">Contract</SelectItem>
                        <SelectItem value="internship">Internship</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select location type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="remote">Remote</SelectItem>
                        <SelectItem value="onsite">On-site</SelectItem>
                        <SelectItem value="hybrid">Hybrid</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">City (if applicable)</Label>
                    <Input id="city" placeholder="e.g. New York, NY" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="min-salary">Minimum Salary</Label>
                    <Input id="min-salary" placeholder="e.g. 120000" type="number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="max-salary">Maximum Salary</Label>
                    <Input id="max-salary" placeholder="e.g. 150000" type="number" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hiring-manager">Hiring Manager *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select hiring manager" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="jane">Jane Smith (Engineering Lead)</SelectItem>
                      <SelectItem value="mike">Mike Johnson (Product Director)</SelectItem>
                      <SelectItem value="sarah">Sarah Williams (Design Manager)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="team-description">Team Description</Label>
                  <Textarea
                    id="team-description"
                    placeholder="Describe the team this role will be part of..."
                    className="min-h-[100px]"
                  />
                </div>
              </CardContent>
            </>
          )}

          {currentStep === 2 && (
            <>
              <CardHeader>
                <CardTitle>Requirements & Qualifications</CardTitle>
                <CardDescription>
                  Define the skills and qualifications needed for this role
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="must-have">Must-Have Skills *</Label>
                  <Textarea
                    id="must-have"
                    placeholder="Enter required skills, one per line..."
                    className="min-h-[120px]"
                  />
                  <p className="text-xs text-muted-foreground">
                    These are non-negotiable requirements for the role
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nice-to-have">Nice-to-Have Skills</Label>
                  <Textarea
                    id="nice-to-have"
                    placeholder="Enter preferred skills, one per line..."
                    className="min-h-[120px]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experience">Minimum Experience *</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-1">0-1 years</SelectItem>
                      <SelectItem value="1-3">1-3 years</SelectItem>
                      <SelectItem value="3-5">3-5 years</SelectItem>
                      <SelectItem value="5-7">5-7 years</SelectItem>
                      <SelectItem value="7+">7+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="education">Education Requirements</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select education level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">No specific requirement</SelectItem>
                      <SelectItem value="high-school">High School</SelectItem>
                      <SelectItem value="associate">Associate's Degree</SelectItem>
                      <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                      <SelectItem value="master">Master's Degree</SelectItem>
                      <SelectItem value="phd">PhD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="responsibilities">Key Responsibilities</Label>
                  <Textarea
                    id="responsibilities"
                    placeholder="Describe the main responsibilities of this role..."
                    className="min-h-[120px]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tools">Tools & Technologies</Label>
                  <Textarea
                    id="tools"
                    placeholder="List the tools and technologies used in this role..."
                    className="min-h-[80px]"
                  />
                </div>
              </CardContent>
            </>
          )}

          {currentStep === 3 && (
            <>
              <CardHeader>
                <CardTitle>Invite Stakeholders</CardTitle>
                <CardDescription>
                  Invite team members to contribute their input for this job description
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="rounded-lg border bg-muted/50 p-4">
                  <h4 className="font-medium">Why invite stakeholders?</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Stakeholders like hiring managers, team leads, and developers can provide
                    valuable input on technical requirements, team expectations, and culture fit
                    criteria to create a more comprehensive job description.
                  </p>
                </div>

                <div className="space-y-4">
                  <Label>Invite by Email</Label>
                  <div className="flex gap-2">
                    <Input placeholder="email@company.com" className="flex-1" />
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hiring-manager">Hiring Manager</SelectItem>
                        <SelectItem value="tech-lead">Tech Lead</SelectItem>
                        <SelectItem value="team-member">Team Member</SelectItem>
                        <SelectItem value="stakeholder">Stakeholder</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="secondary">
                      <Send className="mr-2 h-4 w-4" />
                      Invite
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label>Pending Invitations</Label>
                  <div className="space-y-2">
                    {[
                      { email: "tech.lead@company.com", role: "Tech Lead", status: "pending" },
                      { email: "designer@company.com", role: "Team Member", status: "accepted" },
                    ].map((invite) => (
                      <div
                        key={invite.email}
                        className="flex items-center justify-between rounded-lg border p-3"
                      >
                        <div>
                          <p className="font-medium">{invite.email}</p>
                          <p className="text-sm text-muted-foreground">{invite.role}</p>
                        </div>
                        <span
                          className={cn(
                            "text-sm font-medium",
                            invite.status === "accepted" ? "text-success" : "text-warning"
                          )}
                        >
                          {invite.status === "accepted" ? "Accepted" : "Pending"}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">
                  You can skip this step and invite stakeholders later from the job details page.
                </p>
              </CardContent>
            </>
          )}

          {currentStep === 4 && (
            <>
              <CardHeader>
                <CardTitle>Review & Generate</CardTitle>
                <CardDescription>
                  Review your inputs and generate the AI-powered job description
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="rounded-lg border bg-gradient-hero p-6 text-center">
                  <Sparkles className="mx-auto h-12 w-12 text-primary-foreground" />
                  <h3 className="mt-4 text-xl font-semibold text-primary-foreground">
                    AI Job Description Generator
                  </h3>
                  <p className="mt-2 text-sm text-primary-foreground/80">
                    Our AI will compile all stakeholder inputs and generate a comprehensive,
                    bias-free job description optimized for attracting top talent.
                  </p>
                  <Button className="mt-6" size="lg">
                    <Sparkles className="mr-2 h-5 w-5" />
                    Generate Job Description
                  </Button>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium">Summary of Inputs</h4>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg border p-4">
                      <p className="text-sm text-muted-foreground">Job Title</p>
                      <p className="font-medium">Senior Frontend Developer</p>
                    </div>
                    <div className="rounded-lg border p-4">
                      <p className="text-sm text-muted-foreground">Department</p>
                      <p className="font-medium">Engineering</p>
                    </div>
                    <div className="rounded-lg border p-4">
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">Remote</p>
                    </div>
                    <div className="rounded-lg border p-4">
                      <p className="text-sm text-muted-foreground">Stakeholder Inputs</p>
                      <p className="font-medium">2 of 2 received</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </>
          )}
        </Card>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
            disabled={currentStep === 1}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>
          <div className="flex gap-2">
            <Button variant="outline">
              <Save className="mr-2 h-4 w-4" />
              Save Draft
            </Button>
            {currentStep < 4 ? (
              <Button onClick={() => setCurrentStep(Math.min(4, currentStep + 1))}>
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button>
                Publish Job
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </AppSidebar>
  );
};

export default CreateJob;
