// Mock data for the admin panel

export const dashboardStats = {
  totalMembers: 2847,
  recentPosts: 156,
  pendingContacts: 23,
  totalDonations: 45890,
  membersGrowth: 12.5,
  postsGrowth: 8.3,
  contactsChange: -5.2,
  donationsGrowth: 24.1,
};

export const recentActivity = [
  { id: 1, type: 'member', action: 'New member registered', user: 'John Doe', time: '2 minutes ago' },
  { id: 2, type: 'blog', action: 'Blog post published', user: 'Sarah Wilson', time: '15 minutes ago' },
  { id: 3, type: 'event', action: 'Event registration', user: 'Mike Chen', time: '1 hour ago' },
  { id: 4, type: 'donation', action: 'Donation received', user: 'Anonymous', time: '2 hours ago' },
  { id: 5, type: 'contact', action: 'New contact message', user: 'Emily Brown', time: '3 hours ago' },
  { id: 6, type: 'forum', action: 'Forum post flagged', user: 'System', time: '4 hours ago' },
];

export const members = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'admin', status: 'active', joinDate: '2024-01-15', avatar: '' },
  { id: 2, name: 'Sarah Wilson', email: 'sarah@example.com', role: 'moderator', status: 'active', joinDate: '2024-02-20', avatar: '' },
  { id: 3, name: 'Mike Chen', email: 'mike@example.com', role: 'member', status: 'active', joinDate: '2024-03-10', avatar: '' },
  { id: 4, name: 'Emily Brown', email: 'emily@example.com', role: 'member', status: 'inactive', joinDate: '2024-04-05', avatar: '' },
  { id: 5, name: 'Alex Johnson', email: 'alex@example.com', role: 'member', status: 'active', joinDate: '2024-05-12', avatar: '' },
  { id: 6, name: 'Lisa Park', email: 'lisa@example.com', role: 'moderator', status: 'active', joinDate: '2024-06-01', avatar: '' },
  { id: 7, name: 'David Kim', email: 'david@example.com', role: 'member', status: 'active', joinDate: '2024-06-15', avatar: '' },
  { id: 8, name: 'Rachel Green', email: 'rachel@example.com', role: 'member', status: 'pending', joinDate: '2024-07-01', avatar: '' },
];

export const blogPosts = [
  { id: 1, title: 'Getting Started with React 19', author: 'John Doe', status: 'published', date: '2024-12-01', views: 1250, comments: 23 },
  { id: 2, title: 'The Future of Web Development', author: 'Sarah Wilson', status: 'published', date: '2024-11-28', views: 890, comments: 15 },
  { id: 3, title: 'Building Scalable APIs', author: 'Mike Chen', status: 'draft', date: '2024-11-25', views: 0, comments: 0 },
  { id: 4, title: 'CSS Grid vs Flexbox', author: 'Emily Brown', status: 'published', date: '2024-11-20', views: 2100, comments: 45 },
  { id: 5, title: 'TypeScript Best Practices', author: 'Alex Johnson', status: 'review', date: '2024-11-18', views: 0, comments: 0 },
];

export const events = [
  { id: 1, title: 'Tech Conference 2024', date: '2024-12-20', location: 'San Francisco, CA', registrations: 156, capacity: 200, status: 'upcoming' },
  { id: 2, title: 'React Workshop', date: '2024-12-15', location: 'Online', registrations: 89, capacity: 100, status: 'upcoming' },
  { id: 3, title: 'Hackathon Winter Edition', date: '2024-12-10', location: 'New York, NY', registrations: 250, capacity: 250, status: 'full' },
  { id: 4, title: 'AI & ML Meetup', date: '2024-11-30', location: 'Austin, TX', registrations: 75, capacity: 80, status: 'completed' },
];

export const contacts = [
  { id: 1, name: 'Tom Hardy', email: 'tom@example.com', subject: 'Partnership Inquiry', message: 'We would like to discuss...', status: 'unread', date: '2024-12-10' },
  { id: 2, name: 'Emma Stone', email: 'emma@example.com', subject: 'Feedback', message: 'Great community!...', status: 'read', date: '2024-12-09' },
  { id: 3, name: 'Chris Evans', email: 'chris@example.com', subject: 'Support Request', message: 'I need help with...', status: 'replied', date: '2024-12-08' },
  { id: 4, name: 'Scarlett Johansson', email: 'scarlett@example.com', subject: 'Event Sponsorship', message: 'Interested in sponsoring...', status: 'unread', date: '2024-12-07' },
];

export const donations = [
  { id: 1, donor: 'Anonymous', amount: 500, method: 'Credit Card', date: '2024-12-10', status: 'completed' },
  { id: 2, donor: 'Tech Corp Inc.', amount: 5000, method: 'Bank Transfer', date: '2024-12-08', status: 'completed' },
  { id: 3, donor: 'John Smith', amount: 100, method: 'PayPal', date: '2024-12-05', status: 'completed' },
  { id: 4, donor: 'Sarah Connor', amount: 250, method: 'Credit Card', date: '2024-12-01', status: 'pending' },
];

export const forumCategories = [
  { id: 1, name: 'General Discussion', posts: 234, lastActivity: '2 hours ago' },
  { id: 2, name: 'Help & Support', posts: 189, lastActivity: '30 minutes ago' },
  { id: 3, name: 'Project Showcase', posts: 67, lastActivity: '1 day ago' },
  { id: 4, name: 'Job Board', posts: 45, lastActivity: '5 hours ago' },
];

export const projects = [
  { id: 1, title: 'Open Source CMS', author: 'John Doe', status: 'pending', submittedDate: '2024-12-09', category: 'Web Development' },
  { id: 2, title: 'AI Chatbot Framework', author: 'Sarah Wilson', status: 'approved', submittedDate: '2024-12-05', category: 'AI/ML' },
  { id: 3, title: 'Mobile App Template', author: 'Mike Chen', status: 'rejected', submittedDate: '2024-12-01', category: 'Mobile' },
];
