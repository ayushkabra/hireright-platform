import { AppSidebar } from "@/components/layout/AppSidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StatusBadge } from "@/components/ui/status-badge";
import { Plus, Mail, MoreHorizontal } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const teamMembers = [
    {
        id: "1",
        name: "Jane Smith",
        email: "jane.smith@company.com",
        role: "Hiring Manager",
        department: "Engineering",
        status: "active" as const,
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
    },
    {
        id: "2",
        name: "Mike Chen",
        email: "mike.chen@company.com",
        role: "Tech Lead",
        department: "Engineering",
        status: "active" as const,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    },
    {
        id: "3",
        name: "Sarah Johnson",
        email: "sarah.johnson@company.com",
        role: "Recruiter",
        department: "Human Resources",
        status: "active" as const,
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    },
    {
        id: "4",
        name: "David Park",
        email: "david.park@company.com",
        role: "HR Director",
        department: "Human Resources",
        status: "pending" as const,
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
    },
];

const Team = () => {
    return (
        <AppSidebar>
            <div className="page-container">
                {/* Header */}
                <div className="section-header">
                    <div>
                        <h1 className="text-2xl font-bold">Team</h1>
                        <p className="text-muted-foreground">
                            Manage your hiring team and permissions
                        </p>
                    </div>
                    <Button className="gap-2">
                        <Plus className="h-4 w-4" />
                        Invite Member
                    </Button>
                </div>

                {/* Team Grid */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {teamMembers.map((member) => (
                        <Card key={member.id} className="group hover:shadow-md transition-shadow">
                            <CardContent className="p-5">
                                <div className="flex items-start justify-between mb-4">
                                    <Avatar className="h-14 w-14">
                                        <AvatarImage src={member.image} alt={member.name} />
                                        <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                    </Avatar>
                                    <div className="flex items-center gap-2">
                                        <StatusBadge status={member.status} />
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" size="icon" className="h-8 w-8 opacity-0 group-hover:opacity-100">
                                                    <MoreHorizontal className="h-4 w-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem>Edit Role</DropdownMenuItem>
                                                <DropdownMenuItem>View Activity</DropdownMenuItem>
                                                <DropdownMenuItem className="text-destructive">Remove</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-semibold">{member.name}</h3>
                                    <p className="text-sm text-primary font-medium">{member.role}</p>
                                    <p className="text-sm text-muted-foreground">{member.department}</p>
                                </div>
                                <Button variant="outline" size="sm" className="mt-4 w-full gap-2">
                                    <Mail className="h-4 w-4" />
                                    Send Email
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </AppSidebar>
    );
};

export default Team;
