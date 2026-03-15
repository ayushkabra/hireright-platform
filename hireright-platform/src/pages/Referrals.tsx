import { AppSidebar } from "@/components/layout/AppSidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { StatusBadge } from "@/components/ui/status-badge";
import { MatchScore } from "@/components/ui/match-score";
import { StatCard } from "@/components/ui/stat-card";
import { ReferCandidateDialog } from "@/components/ReferCandidateDialog";
import {
    Search,
    Filter,
    UserPlus,
    Users,
    Trophy,
    Clock,
    CheckCircle,
    Briefcase,
    Mail,
    Phone,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

// Mock referral data with simulated match scores
const referrals = [
    {
        id: "r1",
        candidateName: "Alex Thompson",
        candidateEmail: "alex.thompson@email.com",
        candidatePhone: "+1 (555) 111-2222",
        jobId: "1",
        jobTitle: "Senior Frontend Developer",
        referrerName: "John Doe",
        referrerEmail: "john.doe@company.com",
        relationship: "Former Colleague",
        matchScore: 92,
        status: "reviewing" as const,
        createdAt: "2 days ago",
        image: "https://images.unsplash.com/photo-1599566150163-29194dcabd36?w=80&h=80&fit=crop&crop=face",
    },
    {
        id: "r2",
        candidateName: "Maria Garcia",
        candidateEmail: "maria.garcia@email.com",
        candidatePhone: "+1 (555) 222-3333",
        jobId: "2",
        jobTitle: "Product Manager",
        referrerName: "Jane Smith",
        referrerEmail: "jane.smith@company.com",
        relationship: "Professional Network",
        matchScore: 87,
        status: "pending" as const,
        createdAt: "3 days ago",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face",
    },
    {
        id: "r3",
        candidateName: "James Wilson",
        candidateEmail: "james.wilson@email.com",
        candidatePhone: "+1 (555) 333-4444",
        jobId: "1",
        jobTitle: "Senior Frontend Developer",
        referrerName: "Mike Chen",
        referrerEmail: "mike.chen@company.com",
        relationship: "Classmate",
        matchScore: 78,
        status: "interview" as const,
        createdAt: "1 week ago",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    },
    {
        id: "r4",
        candidateName: "Sophie Chen",
        candidateEmail: "sophie.chen@email.com",
        candidatePhone: "+1 (555) 444-5555",
        jobId: "3",
        jobTitle: "UX Designer",
        referrerName: "Sarah Johnson",
        referrerEmail: "sarah.j@company.com",
        relationship: "Friend",
        matchScore: 95,
        status: "hired" as const,
        createdAt: "2 weeks ago",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face",
    },
    {
        id: "r5",
        candidateName: "Robert Brown",
        candidateEmail: "robert.brown@email.com",
        candidatePhone: "+1 (555) 555-6666",
        jobId: "4",
        jobTitle: "Backend Engineer",
        referrerName: "John Doe",
        referrerEmail: "john.doe@company.com",
        relationship: "Former Colleague",
        matchScore: 68,
        status: "rejected" as const,
        createdAt: "3 weeks ago",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    },
];

// Map status to StatusBadge values
const statusMap: Record<string, "active" | "pending" | "closed" | "draft"> = {
    pending: "pending",
    reviewing: "active",
    interview: "active",
    hired: "closed",
    rejected: "draft",
};

const Referrals = () => {
    return (
        <AppSidebar>
            <div className="page-container">
                {/* Header */}
                <div className="section-header">
                    <div>
                        <h1 className="text-2xl font-bold">Referrals</h1>
                        <p className="text-muted-foreground">
                            Track and manage employee referrals
                        </p>
                    </div>
                    <ReferCandidateDialog />
                </div>

                {/* Stats */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <StatCard
                        title="Total Referrals"
                        value={referrals.length}
                        icon={Users}
                        trend={{ value: 15, label: "vs last month" }}
                        subtitle="vs last month"
                    />
                    <StatCard
                        title="Pending Review"
                        value={referrals.filter((r) => r.status === "pending" || r.status === "reviewing").length}
                        icon={Clock}
                        subtitle="Awaiting review"
                    />
                    <StatCard
                        title="Successful Hires"
                        value={referrals.filter((r) => r.status === "hired").length}
                        icon={Trophy}
                        trend={{ value: 100, label: "this quarter" }}
                        subtitle="this quarter"
                    />
                    <StatCard
                        title="Avg Match Score"
                        value={Math.round(referrals.reduce((acc, r) => acc + r.matchScore, 0) / referrals.length)}
                        icon={CheckCircle}
                        subtitle="across all referrals"
                    />
                </div>

                {/* Filters */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="relative flex-1 max-w-md">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input placeholder="Search referrals..." className="pl-9" />
                    </div>
                    <div className="flex gap-2">
                        <Select defaultValue="all">
                            <SelectTrigger className="w-[140px]">
                                <SelectValue placeholder="Status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Status</SelectItem>
                                <SelectItem value="pending">Pending</SelectItem>
                                <SelectItem value="reviewing">Reviewing</SelectItem>
                                <SelectItem value="interview">Interview</SelectItem>
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
                                <SelectItem value="1">Senior Frontend Developer</SelectItem>
                                <SelectItem value="2">Product Manager</SelectItem>
                                <SelectItem value="3">UX Designer</SelectItem>
                                <SelectItem value="4">Backend Engineer</SelectItem>
                            </SelectContent>
                        </Select>
                        <Button variant="outline" size="icon">
                            <Filter className="h-4 w-4" />
                        </Button>
                    </div>
                </div>

                {/* Referrals List */}
                <div className="space-y-3">
                    {referrals.map((referral) => (
                        <Card
                            key={referral.id}
                            className="group hover:shadow-md transition-shadow"
                        >
                            <CardContent className="p-4">
                                <div className="flex items-center gap-4">
                                    <Avatar className="h-14 w-14">
                                        <AvatarImage src={referral.image} alt={referral.candidateName} />
                                        <AvatarFallback>
                                            {referral.candidateName.split(" ").map((n) => n[0]).join("")}
                                        </AvatarFallback>
                                    </Avatar>

                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-3">
                                            <h3 className="font-semibold group-hover:text-primary transition-colors">
                                                {referral.candidateName}
                                            </h3>
                                            <Badge variant="outline" className="gap-1">
                                                <UserPlus className="h-3 w-3" />
                                                Referred
                                            </Badge>
                                            <StatusBadge status={statusMap[referral.status]} />
                                        </div>
                                        <p className="text-sm text-muted-foreground mt-0.5">
                                            Referred by <span className="font-medium text-foreground">{referral.referrerName}</span> • {referral.relationship}
                                        </p>
                                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-xs text-muted-foreground">
                                            <span className="flex items-center gap-1">
                                                <Briefcase className="h-3 w-3" />
                                                {referral.jobTitle}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Mail className="h-3 w-3" />
                                                {referral.candidateEmail}
                                            </span>
                                            {referral.candidatePhone && (
                                                <span className="flex items-center gap-1">
                                                    <Phone className="h-3 w-3" />
                                                    {referral.candidatePhone}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="text-right text-sm text-muted-foreground hidden md:block">
                                            <p>Referred</p>
                                            <p className="font-medium">{referral.createdAt}</p>
                                        </div>
                                        <MatchScore score={referral.matchScore} size="md" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Info Card for Employees */}
                <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Trophy className="h-5 w-5 text-primary" />
                            Referral Rewards Program
                        </CardTitle>
                        <CardDescription>
                            Earn rewards for successful referrals! Get $2,500 for each hire from your referral.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Button variant="outline">Learn More</Button>
                    </CardContent>
                </Card>
            </div>
        </AppSidebar>
    );
};

export default Referrals;
