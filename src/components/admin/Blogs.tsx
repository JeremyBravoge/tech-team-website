import { useState } from "react";
import { Search, Plus, MoreHorizontal, Eye, Edit, Trash2 } from "lucide-react";
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
import { blogPosts } from "@/data/mockData";

const Blogs = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const columns = [
    {
      key: "title",
      header: "Title",
      render: (post: typeof blogPosts[0]) => (
        <div className="max-w-md">
          <p className="font-medium text-foreground truncate">{post.title}</p>
          <p className="text-sm text-muted-foreground">by {post.author}</p>
        </div>
      ),
    },
    {
      key: "status",
      header: "Status",
      render: (post: typeof blogPosts[0]) => (
        <StatusBadge status={post.status} />
      ),
    },
    {
      key: "views",
      header: "Views",
      render: (post: typeof blogPosts[0]) => (
        <span className="text-muted-foreground">{post.views.toLocaleString()}</span>
      ),
    },
    {
      key: "comments",
      header: "Comments",
      render: (post: typeof blogPosts[0]) => (
        <span className="text-muted-foreground">{post.comments}</span>
      ),
    },
    {
      key: "date",
      header: "Date",
      render: (post: typeof blogPosts[0]) => (
        <span className="text-muted-foreground">
          {new Date(post.date).toLocaleDateString()}
        </span>
      ),
    },
    {
      key: "actions",
      header: "",
      className: "w-12",
      render: () => (
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
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive">
              <Trash2 className="h-4 w-4 mr-2" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Blog Posts</h1>
          <p className="text-muted-foreground">Manage and moderate blog content</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          New Post
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search posts..."
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
            Date Range
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-card rounded-lg border border-border p-4">
          <p className="text-sm text-muted-foreground">Total Posts</p>
          <p className="text-2xl font-bold text-foreground">{blogPosts.length}</p>
        </div>
        <div className="bg-card rounded-lg border border-border p-4">
          <p className="text-sm text-muted-foreground">Published</p>
          <p className="text-2xl font-bold text-foreground">
            {blogPosts.filter((p) => p.status === "published").length}
          </p>
        </div>
        <div className="bg-card rounded-lg border border-border p-4">
          <p className="text-sm text-muted-foreground">Drafts</p>
          <p className="text-2xl font-bold text-foreground">
            {blogPosts.filter((p) => p.status === "draft").length}
          </p>
        </div>
        <div className="bg-card rounded-lg border border-border p-4">
          <p className="text-sm text-muted-foreground">Total Views</p>
          <p className="text-2xl font-bold text-foreground">
            {blogPosts.reduce((sum, p) => sum + p.views, 0).toLocaleString()}
          </p>
        </div>
      </div>

      {/* Table */}
      <DataTable data={filteredPosts} columns={columns} />
    </div>
  );
};

export default Blogs;
