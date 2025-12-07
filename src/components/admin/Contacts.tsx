import { useState } from "react";
import { Search, MoreHorizontal, Mail, Check, Trash2, Download } from "lucide-react";
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
import { contacts } from "@/data/mockData";

const Contacts = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const columns = [
    {
      key: "name",
      header: "Contact",
      render: (contact: typeof contacts[0]) => (
        <div>
          <p className="font-medium text-foreground">{contact.name}</p>
          <p className="text-sm text-muted-foreground">{contact.email}</p>
        </div>
      ),
    },
    {
      key: "subject",
      header: "Subject",
      render: (contact: typeof contacts[0]) => (
        <p className="text-foreground max-w-xs truncate">{contact.subject}</p>
      ),
    },
    {
      key: "status",
      header: "Status",
      render: (contact: typeof contacts[0]) => (
        <StatusBadge status={contact.status} />
      ),
    },
    {
      key: "date",
      header: "Date",
      render: (contact: typeof contacts[0]) => (
        <span className="text-muted-foreground">
          {new Date(contact.date).toLocaleDateString()}
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
              <Mail className="h-4 w-4 mr-2" />
              Reply
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Check className="h-4 w-4 mr-2" />
              Mark as Read
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
          <h1 className="text-2xl font-bold text-foreground">Contact Messages</h1>
          <p className="text-muted-foreground">Manage contact form submissions</p>
        </div>
        <Button variant="outline" className="gap-2">
          <Download className="h-4 w-4" />
          Export
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search messages..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9 bg-secondary border-none"
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            All Status
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-card rounded-lg border border-border p-4">
          <p className="text-sm text-muted-foreground">Total Messages</p>
          <p className="text-2xl font-bold text-foreground">{contacts.length}</p>
        </div>
        <div className="bg-card rounded-lg border border-border p-4">
          <p className="text-sm text-muted-foreground">Unread</p>
          <p className="text-2xl font-bold text-primary">
            {contacts.filter((c) => c.status === "unread").length}
          </p>
        </div>
        <div className="bg-card rounded-lg border border-border p-4">
          <p className="text-sm text-muted-foreground">Read</p>
          <p className="text-2xl font-bold text-foreground">
            {contacts.filter((c) => c.status === "read").length}
          </p>
        </div>
        <div className="bg-card rounded-lg border border-border p-4">
          <p className="text-sm text-muted-foreground">Replied</p>
          <p className="text-2xl font-bold text-foreground">
            {contacts.filter((c) => c.status === "replied").length}
          </p>
        </div>
      </div>

      {/* Table */}
      <DataTable data={filteredContacts} columns={columns} />
    </div>
  );
};

export default Contacts;
