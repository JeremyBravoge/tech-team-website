
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { ThemeProvider } from "./hooks/use-theme";

// Pages
import HomePage from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import BlogsPage from "./pages/BlogsPage";
import EventsPage from "./pages/EventsPage";
import ProjectsPage from "./pages/ProjectsPage";
import DiscussionPage from "./pages/DiscussionPage";
import MemberDashboardPage from "./pages/MemberDashboardPage";
import ContactPage from "./pages/ContactPage";
import ShowcasePage from "./pages/ShowcasePage";
import CareersPage  from "./pages/Carriers";
import NotFound from "./pages/NotFound";

// Admin Pages and Layout
import AdminLayout from "./components/admin/AdminLayout";
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import Members from "./components/admin/Members";
import Blogs from "./components/admin/Blogs";
import Events from "./components/admin/Events";
import Contacts from "./components/admin/Contacts";
import Donations from "./components/admin/Donations";
import Forum from "./components/admin/Forum";
import Projects from "./components/admin/Projects";
import Settings from "./components/admin/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/blogs" element={<BlogsPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/discussion" element={<DiscussionPage />} />
              <Route path="/dashboard" element={<MemberDashboardPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/showcase" element={<ShowcasePage />} />
              <Route path="/carrier" element={<CareersPage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="members" element={<Members />} />
              <Route path="blogs" element={<Blogs />} />
              <Route path="events" element={<Events />} />
              <Route path="contacts" element={<Contacts />} />
              <Route path="donations" element={<Donations />} />
              <Route path="forum" element={<Forum />} />
              <Route path="projects" element={<Projects />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
