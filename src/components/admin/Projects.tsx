import { useState } from "react";
import { Search, MoreHorizontal, Check, X, Eye, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DataTable from "@/components/admin/DataTable";
import StatusBadge from "@/components/admin/StatusBadge";
import { projects } from "@/data/mockData";

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const columns = [
    {
      key: "title",
      header: "Project",
      render: (project: typeof projects[0]) => (
        <div>
          <p className="font-medium text-foreground">{project.title}</p>
          <p className="text-sm text-muted-foreground">by {project.author}</p>
        </div>
      ),
    },
    {
      key: "category",
      header: "Category",
      render: (project: typeof projects[0]) => (
        <span className="text-muted-foreground">{project.category}</span>
      ),
    },
    {
      key: "status",
      header: "Status",
      render: (project: typeof projects[0]) => (
        <StatusBadge status={project.status} />
      ),
    },
    {
      key: "submittedDate",
      header: "Submitted",
      render: (project: typeof projects[0]) => (
        <span className="text-muted-foreground">
          {new Date(project.submittedDate).toLocaleDateString()}
        </span>
      ),
    },
    {
      key: "actions",
      header: "",
      className: "w-12",
      render: (project: typeof projects[0]) => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Eye className="h-4 w-4 mr-2" />
              View
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Edit className="h-4 w-4 mr-2" />
              Edit
            </DropdownMenuItem>
            {project.status === "pending" && (
              <>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-emerald-500">
                  <Check className="h-4 w-4 mr-2" />
                  Approve
                </DropdownMenuItem>
                <DropdownMenuItem className="text-destructive">
                  <X className="h-4 w-4 mr-2" />
                  Reject
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Project Submissions</h1>
        <p className="text-muted-foreground">Review and approve community projects</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 bg-secondary border-none"
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            All Status
          </Button>
          <Button variant="outline" size="sm">
            All Categories
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-card rounded-lg border border-border p-4">
          <p className="text-sm text-muted-foreground">Total Projects</p>
          <p className="text-2xl font-bold text-foreground">{projects.length}</p>
        </div>
        <div className="bg-card rounded-lg border border-border p-4">
          <p className="text-sm text-muted-foreground">Pending</p>
          <p className="text-2xl font-bold text-amber-500">
            {projects.filter((p) => p.status === "pending").length}
          </p>
        </div>
        <div className="bg-card rounded-lg border border-border p-4">
          <p className="text-sm text-muted-foreground">Approved</p>
          <p className="text-2xl font-bold text-emerald-500">
            {projects.filter((p) => p.status === "approved").length}
          </p>
        </div>
        <div className="bg-card rounded-lg border border-border p-4">
          <p className="text-sm text-muted-foreground">Rejected</p>
          <p className="text-2xl font-bold text-destructive">
            {projects.filter((p) => p.status === "rejected").length}
          </p>
        </div>
      </div>

      {/* Table */}
      <DataTable data={filteredProjects} columns={columns} />
    </div>
  );
};

export default Projects;
