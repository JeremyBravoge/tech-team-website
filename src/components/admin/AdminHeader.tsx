import { Bell, Search, Menu, LogOut, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from 'react'; // Import React for component definition

// --- Define Handler Types for clarity ---
interface AdminHeaderProps {
  onMenuClick: () => void;
  onSearch: (searchTerm: string) => void;
  onViewAllNotifications: () => void;
  onNotificationClick: (id: string) => void; // For specific notifications
  onProfileClick: () => void;
  onSettingsClick: () => void;
  onLogout: () => void;
}

// Placeholder for notification data structure
interface Notification {
    id: string;
    title: string;
    time: string;
}

// Example data (you would fetch this in a real application)
const notifications: Notification[] = [
    { id: '1', title: 'New member registered', time: '2 minutes ago' },
    { id: '2', title: 'Blog post needs review', time: '15 minutes ago' },
    { id: '3', title: 'New donation received', time: '1 hour ago' },
];

const AdminHeader = ({ 
    onMenuClick, 
    onSearch,
    onViewAllNotifications,
    onNotificationClick,
    onProfileClick,
    onSettingsClick,
    onLogout,
}: AdminHeaderProps) => {

    const notificationCount = notifications.length;

    // State for search term (to enable functional search)
    const [searchTerm, setSearchTerm] = React.useState('');

    // Handle search input change
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    // Handle pressing Enter in the search input
    const handleSearchSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onSearch(searchTerm);
        }
    };

    // --- UI/UX Improvements & Functionality ---

    return (
        <header className="sticky top-0 z-30 h-16 bg-background/90 backdrop-blur-md border-b border-border shadow-sm">
            <div className="flex h-full items-center justify-between px-4 sm:px-6">

                {/* Left Section: Logo/Title & Mobile Menu */}
                <div className="flex items-center gap-4">
                    {/* Mobile Menu Button - always hidden on large screens */}
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={onMenuClick}
                        className="lg:hidden"
                        aria-label="Toggle navigation menu"
                    >
                        <Menu className="h-6 w-6" />
                    </Button>

                    {/* Logo/Admin Title - Added for context */}
                    <div className="text-xl font-bold text-primary tracking-wide">
                        Admin<span className="text-muted-foreground font-normal">Panel</span>
                    </div>
                </div>

                {/* Center Section: Search Bar */}
                {/* Search is now visible on small screens (sm:block) and wider for better UX */}
                <div className="relative flex-grow mx-4 max-w-lg hidden sm:block">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search dashboard, users, or settings..."
                        className="w-full pl-9 bg-secondary/70 border-input transition-all duration-300 focus-within:w-full"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        onKeyDown={handleSearchSubmit}
                        aria-label="Search across admin panel"
                    />
                </div>

                {/* Right Section: Actions (Notifications, User Menu) */}
                <div className="flex items-center gap-1 sm:gap-2">
                    
                    {/* Notifications Dropdown */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button 
                                variant="ghost" 
                                size="icon" 
                                className="relative"
                                aria-label={`View ${notificationCount} notifications`}
                            >
                                <Bell className="h-5 w-5" />
                                {notificationCount > 0 && (
                                    // Visual indicator for new notifications
                                    <span className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-destructive text-[10px] font-medium text-destructive-foreground flex items-center justify-center animate-pulse">
                                        {notificationCount > 9 ? '9+' : notificationCount}
                                    </span>
                                )}
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-80">
                            <div className="px-4 py-3 border-b border-border flex justify-between items-center">
                                <p className="font-semibold">Notifications</p>
                                <span className="text-xs font-medium text-muted-foreground">{notificationCount} unread</span>
                            </div>
                            <div className="max-h-64 overflow-y-auto">
                                {notifications.length > 0 ? (
                                    notifications.map((notification) => (
                                        <DropdownMenuItem 
                                            key={notification.id}
                                            className="flex flex-col items-start gap-1 p-3 cursor-pointer hover:bg-accent"
                                            onClick={() => onNotificationClick(notification.id)}
                                        >
                                            <p className="text-sm font-medium leading-none">{notification.title}</p>
                                            <p className="text-xs text-muted-foreground">{notification.time}</p>
                                        </DropdownMenuItem>
                                    ))
                                ) : (
                                    <div className="p-4 text-center text-sm text-muted-foreground">
                                        No new notifications.
                                    </div>
                                )}
                            </div>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem 
                                className="justify-center text-primary cursor-pointer"
                                onClick={onViewAllNotifications} // Functional button
                            >
                                View all notifications
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    {/* User Menu Dropdown */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button 
                                variant="ghost" 
                                className="gap-2 px-2 sm:px-4"
                                aria-label="User account menu"
                            >
                                {/* Avatar */}
                                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary/40">
                                    <span className="text-sm font-medium text-primary">JD</span>
                                </div>
                                {/* Name - visible on medium screens and up */}
                                <span className="hidden md:inline-block font-medium text-sm text-foreground">John Doe</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48">
                            {/* User Info Header (Optional, for extra UX) */}
                            <div className="px-3 py-2 text-sm">
                                <p className="font-semibold">John Doe</p>
                                <p className="text-xs text-muted-foreground truncate">admin.doe@example.com</p>
                            </div>
                            <DropdownMenuSeparator />
                            
                            {/* Functional Menu Items */}
                            <DropdownMenuItem onClick={onProfileClick} className="cursor-pointer">
                                <User className="h-4 w-4 mr-2 text-muted-foreground" />
                                Profile
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={onSettingsClick} className="cursor-pointer">
                                <Settings className="h-4 w-4 mr-2 text-muted-foreground" />
                                Settings
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem 
                                onClick={onLogout} // Functional Logout button
                                className="text-destructive cursor-pointer"
                            >
                                <LogOut className="h-4 w-4 mr-2" />
                                Logout
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    );
};

export default AdminHeader;