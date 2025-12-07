import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  FileText,
  Calendar,
  MessageSquare,
  Heart,
  MessageCircle,
  FolderKanban,
  Settings,
  ChevronLeft,
  Shield,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface AdminSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/admin" },
  { icon: Users, label: "Members", path: "/admin/members" },
  { icon: FileText, label: "Blog Posts", path: "/admin/blogs" },
  { icon: Calendar, label: "Events", path: "/admin/events" },
  { icon: MessageSquare, label: "Contacts", path: "/admin/contacts" },
  { icon: Heart, label: "Donations", path: "/admin/donations" },
  { icon: MessageCircle, label: "Forum", path: "/admin/forum" },
  { icon: FolderKanban, label: "Projects", path: "/admin/projects" },
  { icon: Settings, label: "Settings", path: "/admin/settings" },
];

const AdminSidebar = ({ isOpen, onToggle }: AdminSidebarProps) => {
  const location = useLocation();

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-40 h-screen bg-sidebar-background border-r border-sidebar-border transition-smooth",
        isOpen ? "w-64" : "w-16"
      )}
    >
      {/* Logo */}
      <div className="flex h-16 items-center justify-between px-4 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Shield className="h-5 w-5 text-primary-foreground" />
          </div>
          {isOpen && (
            <span className="font-semibold text-sidebar-foreground">
              Tech Hub Admin
            </span>
          )}
        </div>
        <button
          onClick={onToggle}
          className={cn(
            "p-1.5 rounded-lg hover:bg-sidebar-accent transition-smooth",
            !isOpen && "absolute -right-3 top-6 bg-sidebar-background border border-sidebar-border"
          )}
        >
          <ChevronLeft
            className={cn(
              "h-4 w-4 text-sidebar-foreground transition-smooth",
              !isOpen && "rotate-180"
            )}
          />
        </button>
      </div>

      {/* Navigation */}
      <nav className="p-3 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-smooth group",
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-sidebar-foreground hover:bg-sidebar-accent"
              )}
            >
              <item.icon
                className={cn(
                  "h-5 w-5 flex-shrink-0",
                  isActive ? "text-primary" : "text-muted-foreground group-hover:text-sidebar-foreground"
                )}
              />
              {isOpen && (
                <span className={cn("font-medium", isActive && "text-primary")}>
                  {item.label}
                </span>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* User Info */}
      {isOpen && (
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-sm font-medium text-primary">JD</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-sidebar-foreground truncate">
                John Doe
              </p>
              <p className="text-xs text-muted-foreground truncate">
                Administrator
              </p>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};

export default AdminSidebar;
