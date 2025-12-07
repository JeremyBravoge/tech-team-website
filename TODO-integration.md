# Integration Plan: Combine Admin Panel with Main Website

## Overview
Integrate the admin panel (Admin Panel/community-command-center) into the main website (digital-space-3h-society) to run on a single localhost. Admin routes will be prefixed with /admin.

## Steps to Complete

### 1. Copy Admin-Specific Files
- [ ] Copy admin pages from `Admin Panel/community-command-center/src/pages/admin/` to `digital-space-3h-society/src/pages/admin/`
  - Login.tsx
  - Dashboard.tsx
  - Members.tsx
  - Blogs.tsx
  - Events.tsx
  - Contacts.tsx
  - Donations.tsx
  - Forum.tsx
  - Projects.tsx
  - Settings.tsx
- [ ] Copy admin components from `Admin Panel/community-command-center/src/components/admin/` to `digital-space-3h-society/src/components/admin/`
  - AdminHeader.tsx
  - AdminLayout.tsx
  - AdminSidebar.tsx
  - DataTable.tsx
  - StatsCard.tsx
  - StatusBadge.tsx
- [ ] Copy hooks from `Admin Panel/community-command-center/src/hooks/` to `digital-space-3h-society/src/hooks/`
  - use-theme.tsx (if not present)
- [ ] Copy data from `Admin Panel/community-command-center/src/data/` to `digital-space-3h-society/src/data/`
  - mockData.ts
- [ ] Copy any unique UI components if needed (check for differences in shadcn/ui components)

### 2. Update Main App.tsx
- [ ] Add ThemeProvider from admin panel to App.tsx
- [ ] Add admin routes under /admin prefix in the Routes component
- [ ] Import admin pages and components
- [ ] Ensure AdminLayout is used for admin routes

### 3. Merge Dependencies
- [ ] Check `Admin Panel/community-command-center/package.json` for any additional dependencies not in main website
- [ ] Update `digital-space-3h-society/package.json` if needed
- [ ] Run `npm install` or equivalent to install new dependencies

### 4. Handle Conflicts and Imports
- [ ] Resolve any duplicate components (e.g., if both have similar UI components, keep the main website's version)
- [ ] Update import paths in copied files to match new locations
- [ ] Ensure no naming conflicts in routes or components

### 5. Testing and Verification
- [ ] Run the application and test public routes (e.g., /, /about)
- [ ] Test admin routes (e.g., /admin, /admin/members)
- [ ] Verify login functionality if present
- [ ] Check for any console errors or broken imports
- [ ] Ensure styling and themes work correctly

### 6. Cleanup
- [ ] Remove the separate Admin Panel directory after successful integration
- [ ] Update any documentation or README files to reflect the merged structure
