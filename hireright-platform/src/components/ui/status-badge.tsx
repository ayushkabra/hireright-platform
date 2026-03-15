import { cn } from "@/lib/utils";

type StatusType = "active" | "draft" | "pending" | "closed" | "interview" | "offered" | "hired" | "rejected";

interface StatusBadgeProps {
  status: StatusType;
  className?: string;
}

const statusConfig: Record<StatusType, { label: string; className: string }> = {
  active: { label: "Active", className: "status-active" },
  draft: { label: "Draft", className: "status-draft" },
  pending: { label: "Pending", className: "status-pending" },
  closed: { label: "Closed", className: "status-closed" },
  interview: { label: "Interview", className: "bg-primary/10 text-primary" },
  offered: { label: "Offered", className: "bg-accent/10 text-accent" },
  hired: { label: "Hired", className: "status-active" },
  rejected: { label: "Rejected", className: "status-closed" },
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status];
  
  return (
    <span className={cn("status-badge", config.className, className)}>
      <span className={cn(
        "h-1.5 w-1.5 rounded-full",
        status === "active" || status === "hired" ? "bg-success" :
        status === "draft" ? "bg-muted-foreground" :
        status === "pending" ? "bg-warning" :
        status === "closed" || status === "rejected" ? "bg-destructive" :
        status === "interview" ? "bg-primary" :
        "bg-accent"
      )} />
      {config.label}
    </span>
  );
}
