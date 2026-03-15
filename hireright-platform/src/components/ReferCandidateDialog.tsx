import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
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
import { UserPlus, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Available jobs for referral
const availableJobs = [
    { id: "1", title: "Senior Frontend Developer", department: "Engineering" },
    { id: "2", title: "Product Manager", department: "Product" },
    { id: "3", title: "UX Designer", department: "Design" },
    { id: "4", title: "Backend Engineer", department: "Engineering" },
    { id: "5", title: "DevOps Engineer", department: "Engineering" },
];

interface ReferCandidateDialogProps {
    trigger?: React.ReactNode;
    defaultJobId?: string;
    onReferralSubmit?: (referral: ReferralFormData) => void;
}

export interface ReferralFormData {
    candidateName: string;
    candidateEmail: string;
    candidatePhone: string;
    jobId: string;
    relationship: string;
    notes: string;
    resumeFileName: string;
}

export function ReferCandidateDialog({
    trigger,
    defaultJobId,
    onReferralSubmit
}: ReferCandidateDialogProps) {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState<ReferralFormData>({
        candidateName: "",
        candidateEmail: "",
        candidatePhone: "",
        jobId: defaultJobId || "",
        relationship: "",
        notes: "",
        resumeFileName: "",
    });
    const { toast } = useToast();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.candidateName || !formData.candidateEmail || !formData.jobId) {
            toast({
                title: "Missing Information",
                description: "Please fill in all required fields.",
                variant: "destructive",
            });
            return;
        }

        // Callback for parent component
        if (onReferralSubmit) {
            onReferralSubmit(formData);
        }

        toast({
            title: "Referral Submitted!",
            description: `Thank you for referring ${formData.candidateName}. We'll review their application shortly.`,
        });

        // Reset form and close dialog
        setFormData({
            candidateName: "",
            candidateEmail: "",
            candidatePhone: "",
            jobId: defaultJobId || "",
            relationship: "",
            notes: "",
            resumeFileName: "",
        });
        setOpen(false);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFormData({ ...formData, resumeFileName: file.name });
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {trigger || (
                    <Button className="gap-2">
                        <UserPlus className="h-4 w-4" />
                        Refer a Candidate
                    </Button>
                )}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px]">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        <UserPlus className="h-5 w-5 text-primary" />
                        Refer a Candidate
                    </DialogTitle>
                    <DialogDescription>
                        Know someone great for this role? Submit their details and help us find amazing talent.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 py-4">
                        {/* Job Selection */}
                        <div className="space-y-2">
                            <Label htmlFor="job">Position *</Label>
                            <Select
                                value={formData.jobId}
                                onValueChange={(value) => setFormData({ ...formData, jobId: value })}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a job opening" />
                                </SelectTrigger>
                                <SelectContent>
                                    {availableJobs.map((job) => (
                                        <SelectItem key={job.id} value={job.id}>
                                            {job.title} - {job.department}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Candidate Name */}
                        <div className="space-y-2">
                            <Label htmlFor="candidateName">Candidate Name *</Label>
                            <Input
                                id="candidateName"
                                placeholder="Full name"
                                value={formData.candidateName}
                                onChange={(e) => setFormData({ ...formData, candidateName: e.target.value })}
                            />
                        </div>

                        {/* Candidate Email */}
                        <div className="space-y-2">
                            <Label htmlFor="candidateEmail">Candidate Email *</Label>
                            <Input
                                id="candidateEmail"
                                type="email"
                                placeholder="email@example.com"
                                value={formData.candidateEmail}
                                onChange={(e) => setFormData({ ...formData, candidateEmail: e.target.value })}
                            />
                        </div>

                        {/* Candidate Phone */}
                        <div className="space-y-2">
                            <Label htmlFor="candidatePhone">Candidate Phone</Label>
                            <Input
                                id="candidatePhone"
                                type="tel"
                                placeholder="+1 (555) 000-0000"
                                value={formData.candidatePhone}
                                onChange={(e) => setFormData({ ...formData, candidatePhone: e.target.value })}
                            />
                        </div>

                        {/* Relationship */}
                        <div className="space-y-2">
                            <Label htmlFor="relationship">How do you know this person?</Label>
                            <Select
                                value={formData.relationship}
                                onValueChange={(value) => setFormData({ ...formData, relationship: value })}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select relationship" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="former-colleague">Former Colleague</SelectItem>
                                    <SelectItem value="friend">Friend</SelectItem>
                                    <SelectItem value="classmate">Classmate</SelectItem>
                                    <SelectItem value="professional-network">Professional Network</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Resume Upload */}
                        <div className="space-y-2">
                            <Label htmlFor="resume">Resume</Label>
                            <div className="flex items-center gap-2">
                                <Input
                                    id="resume"
                                    type="file"
                                    accept=".pdf,.doc,.docx"
                                    onChange={handleFileChange}
                                    className="hidden"
                                />
                                <Button
                                    type="button"
                                    variant="outline"
                                    className="w-full gap-2"
                                    onClick={() => document.getElementById("resume")?.click()}
                                >
                                    <Upload className="h-4 w-4" />
                                    {formData.resumeFileName || "Upload Resume (PDF, DOC)"}
                                </Button>
                            </div>
                        </div>

                        {/* Notes */}
                        <div className="space-y-2">
                            <Label htmlFor="notes">Additional Notes</Label>
                            <Textarea
                                id="notes"
                                placeholder="Why would this person be a great fit?"
                                value={formData.notes}
                                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                                className="min-h-[80px]"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                            Cancel
                        </Button>
                        <Button type="submit">Submit Referral</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
