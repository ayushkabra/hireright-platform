import { AppSidebar } from "@/components/layout/AppSidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Plus, Copy, Edit, Trash2 } from "lucide-react";

const templates = [
  {
    id: "1",
    name: "Software Engineer",
    department: "Engineering",
    description: "Standard template for engineering roles",
    lastUsed: "2 days ago",
    usageCount: 15,
  },
  {
    id: "2",
    name: "Product Manager",
    department: "Product",
    description: "Template for product management positions",
    lastUsed: "1 week ago",
    usageCount: 8,
  },
  {
    id: "3",
    name: "UX Designer",
    department: "Design",
    description: "Creative roles template with portfolio requirements",
    lastUsed: "3 days ago",
    usageCount: 12,
  },
];

const Templates = () => {
  return (
    <AppSidebar>
      <div className="page-container">
        {/* Header */}
        <div className="section-header">
          <div>
            <h1 className="text-2xl font-bold">Job Templates</h1>
            <p className="text-muted-foreground">
              Create and manage reusable job description templates
            </p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            New Template
          </Button>
        </div>

        {/* Templates Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {templates.map((template) => (
            <Card key={template.id} className="group hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-lg">{template.name}</CardTitle>
                <CardDescription>{template.department}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{template.description}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Used {template.usageCount} times</span>
                  <span>Last used {template.lastUsed}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AppSidebar>
  );
};

export default Templates;
