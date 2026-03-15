import { AppSidebar } from "@/components/layout/AppSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { StatCard } from "@/components/ui/stat-card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Briefcase,
  Users,
  Clock,
  TrendingUp,
  Target,
  UserCheck,
  CalendarDays,
  BarChart3,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";

// Mock data
const hiringFunnelData = [
  { stage: "Applied", count: 284, fill: "hsl(var(--primary))" },
  { stage: "Screened", count: 156, fill: "hsl(var(--primary) / 0.8)" },
  { stage: "Interview", count: 68, fill: "hsl(var(--primary) / 0.6)" },
  { stage: "Offered", count: 24, fill: "hsl(var(--accent))" },
  { stage: "Hired", count: 18, fill: "hsl(var(--success))" },
];

const timeToHireData = [
  { month: "Jul", days: 28 },
  { month: "Aug", days: 25 },
  { month: "Sep", days: 22 },
  { month: "Oct", days: 20 },
  { month: "Nov", days: 19 },
  { month: "Dec", days: 18 },
];

const sourceData = [
  { name: "LinkedIn", value: 35, color: "hsl(var(--primary))" },
  { name: "Job Boards", value: 25, color: "hsl(var(--accent))" },
  { name: "Referrals", value: 22, color: "hsl(var(--success))" },
  { name: "Direct", value: 12, color: "hsl(var(--warning))" },
  { name: "Other", value: 6, color: "hsl(var(--muted-foreground))" },
];

const departmentHiringData = [
  { department: "Engineering", openings: 8, hired: 5, inProgress: 12 },
  { department: "Product", openings: 3, hired: 2, inProgress: 6 },
  { department: "Design", openings: 2, hired: 1, inProgress: 4 },
  { department: "Marketing", openings: 2, hired: 2, inProgress: 3 },
  { department: "Sales", openings: 4, hired: 3, inProgress: 8 },
];

const Analytics = () => {
  return (
    <AppSidebar>
      <div className="page-container">
        {/* Header */}
        <div className="section-header">
          <div>
            <h1 className="text-2xl font-bold">Analytics</h1>
            <p className="text-muted-foreground">Track your hiring performance and metrics</p>
          </div>
          <Select defaultValue="30d">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="1y">Last year</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Hires"
            value={18}
            icon={UserCheck}
            trend={{ value: 12, label: "vs last period" }}
            subtitle="vs last period"
          />
          <StatCard
            title="Open Positions"
            value={12}
            icon={Briefcase}
            subtitle="across 5 departments"
          />
          <StatCard
            title="Avg. Time to Hire"
            value="18 days"
            icon={Clock}
            trend={{ value: -15, label: "faster" }}
            subtitle="faster than benchmark"
          />
          <StatCard
            title="Offer Accept Rate"
            value="87%"
            icon={Target}
            trend={{ value: 5, label: "vs last quarter" }}
            subtitle="vs last quarter"
          />
        </div>

        {/* Charts Row 1 */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Hiring Funnel */}
          <Card>
            <CardHeader>
              <CardTitle>Hiring Funnel</CardTitle>
              <CardDescription>Candidate progression through stages</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={hiringFunnelData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                    <XAxis type="number" />
                    <YAxis dataKey="stage" type="category" width={80} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                      }}
                    />
                    <Bar dataKey="count" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Time to Hire Trend */}
          <Card>
            <CardHeader>
              <CardTitle>Time to Hire Trend</CardTitle>
              <CardDescription>Average days from application to hire</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={timeToHireData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="days"
                      stroke="hsl(var(--primary))"
                      strokeWidth={2}
                      dot={{ fill: "hsl(var(--primary))", strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Row 2 */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Source Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Candidate Sources</CardTitle>
              <CardDescription>Where candidates come from</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={sourceData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {sourceData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {sourceData.map((source) => (
                  <div key={source.name} className="flex items-center gap-2">
                    <div
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: source.color }}
                    />
                    <span className="text-sm">{source.name}</span>
                    <span className="text-sm text-muted-foreground ml-auto">{source.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Department Hiring */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Hiring by Department</CardTitle>
              <CardDescription>Current hiring status across teams</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {departmentHiringData.map((dept) => (
                  <div key={dept.department} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">{dept.department}</span>
                      <div className="flex items-center gap-4 text-muted-foreground">
                        <span>{dept.openings} open</span>
                        <span className="text-success">{dept.hired} hired</span>
                        <span className="text-primary">{dept.inProgress} in progress</span>
                      </div>
                    </div>
                    <div className="flex h-2 overflow-hidden rounded-full bg-muted">
                      <div
                        className="bg-success transition-all"
                        style={{ width: `${(dept.hired / dept.openings) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Metrics */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">284</p>
                  <p className="text-sm text-muted-foreground">Total Applicants</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                  <CalendarDays className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold">42</p>
                  <p className="text-sm text-muted-foreground">Interviews This Week</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10">
                  <TrendingUp className="h-5 w-5 text-success" />
                </div>
                <div>
                  <p className="text-2xl font-bold">82%</p>
                  <p className="text-sm text-muted-foreground">AI Match Accuracy</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-warning/10">
                  <BarChart3 className="h-5 w-5 text-warning" />
                </div>
                <div>
                  <p className="text-2xl font-bold">4.2</p>
                  <p className="text-sm text-muted-foreground">Avg. Candidate Rating</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppSidebar>
  );
};

export default Analytics;
