import { Users, FileText, MessageSquare, Heart, Calendar, FolderKanban } from "lucide-react";
import StatsCard from "@/components/admin/StatsCard";
import { dashboardStats, recentActivity } from "@/data/mockData";
import { cn } from "@/lib/utils";

const activityIcons: Record<string, string> = {
  member: "bg-blue-500/20 text-blue-500",
  blog: "bg-emerald-500/20 text-emerald-500",
  event: "bg-amber-500/20 text-amber-500",
  donation: "bg-pink-500/20 text-pink-500",
  contact: "bg-purple-500/20 text-purple-500",
  forum: "bg-orange-500/20 text-orange-500",
};

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back, John. Here's what's happening.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Members"
          value={dashboardStats.totalMembers.toLocaleString()}
          change={dashboardStats.membersGrowth}
          icon={Users}
        />
        <StatsCard
          title="Blog Posts"
          value={dashboardStats.recentPosts}
          change={dashboardStats.postsGrowth}
          icon={FileText}
        />
        <StatsCard
          title="Pending Contacts"
          value={dashboardStats.pendingContacts}
          change={dashboardStats.contactsChange}
          icon={MessageSquare}
        />
        <StatsCard
          title="Total Donations"
          value={`$${dashboardStats.totalDonations.toLocaleString()}`}
          change={dashboardStats.donationsGrowth}
          icon={Heart}
        />
      </div>

      {/* Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-card rounded-xl border border-border p-6">
          <h2 className="text-lg font-semibold text-card-foreground mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start gap-4 p-3 rounded-lg hover:bg-accent transition-smooth"
              >
                <div
                  className={cn(
                    "h-10 w-10 rounded-lg flex items-center justify-center flex-shrink-0",
                    activityIcons[activity.type]
                  )}
                >
                  {activity.type === "member" && <Users className="h-5 w-5" />}
                  {activity.type === "blog" && <FileText className="h-5 w-5" />}
                  {activity.type === "event" && <Calendar className="h-5 w-5" />}
                  {activity.type === "donation" && <Heart className="h-5 w-5" />}
                  {activity.type === "contact" && <MessageSquare className="h-5 w-5" />}
                  {activity.type === "forum" && <FolderKanban className="h-5 w-5" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-card-foreground">
                    {activity.action}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    by {activity.user}
                  </p>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">
                  {activity.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-card rounded-xl border border-border p-6">
          <h2 className="text-lg font-semibold text-card-foreground mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <button className="w-full p-3 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-smooth text-left font-medium">
              + Add New Blog Post
            </button>
            <button className="w-full p-3 rounded-lg bg-accent hover:bg-accent/80 transition-smooth text-left font-medium text-accent-foreground">
              + Create Event
            </button>
            <button className="w-full p-3 rounded-lg bg-accent hover:bg-accent/80 transition-smooth text-left font-medium text-accent-foreground">
              + Invite Member
            </button>
            <button className="w-full p-3 rounded-lg bg-accent hover:bg-accent/80 transition-smooth text-left font-medium text-accent-foreground">
              View Reports
            </button>
          </div>

          {/* Mini Stats */}
          <div className="mt-6 pt-6 border-t border-border">
            <h3 className="text-sm font-semibold text-card-foreground mb-3">This Week</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">New Members</span>
                <span className="font-medium text-card-foreground">+48</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Posts Published</span>
                <span className="font-medium text-card-foreground">12</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Event Registrations</span>
                <span className="font-medium text-card-foreground">89</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
