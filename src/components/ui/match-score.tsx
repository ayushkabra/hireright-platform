import { cn } from "@/lib/utils";

interface MatchScoreProps {
  score: number;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}

export function MatchScore({ score, size = "md", showLabel = true }: MatchScoreProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "score-high";
    if (score >= 60) return "score-medium";
    return "score-low";
  };

  const getScoreLabel = (score: number) => {
    if (score >= 80) return "Excellent";
    if (score >= 60) return "Good";
    if (score >= 40) return "Fair";
    return "Low";
  };

  const sizes = {
    sm: { ring: 40, stroke: 3, text: "text-xs", font: "text-sm" },
    md: { ring: 56, stroke: 4, text: "text-sm", font: "text-lg" },
    lg: { ring: 80, stroke: 5, text: "text-base", font: "text-2xl" },
  };

  const config = sizes[size];
  const radius = (config.ring - config.stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  const colorClass = getScoreColor(score);
  const strokeColor =
    colorClass === "score-high"
      ? "stroke-success"
      : colorClass === "score-medium"
      ? "stroke-warning"
      : "stroke-destructive";

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="progress-ring" style={{ width: config.ring, height: config.ring }}>
        <svg width={config.ring} height={config.ring}>
          <circle
            cx={config.ring / 2}
            cy={config.ring / 2}
            r={radius}
            fill="none"
            className="stroke-muted"
            strokeWidth={config.stroke}
          />
          <circle
            cx={config.ring / 2}
            cy={config.ring / 2}
            r={radius}
            fill="none"
            className={cn("progress-ring-circle", strokeColor)}
            strokeWidth={config.stroke}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>
        <span
          className={cn(
            "absolute inset-0 flex items-center justify-center font-semibold",
            config.font
          )}
        >
          {score}
        </span>
      </div>
      {showLabel && (
        <span className={cn("font-medium text-muted-foreground", config.text)}>
          {getScoreLabel(score)}
        </span>
      )}
    </div>
  );
}
