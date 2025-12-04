import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Briefcase, Clock, Users, ArrowRight } from "lucide-react";

interface JobItem {
  id: number;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  link: string;
}

const JobCard: React.FC<{ job: JobItem }> = ({ job }) => {
  // Determine color for job type/accent
  const accentColor = job.type === 'Internship' ? 'bg-techgold/10 text-techgold' : 'bg-techblue/10 text-techblue';

  return (
    <Card className="overflow-hidden rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-techblue/20 group">
      <CardHeader className="p-5 pb-3">
        {/* Job Title */}
        <CardTitle className="text-xl font-extrabold text-gray-900 line-clamp-2 hover:text-techblue transition-colors">
          <Link to={job.link}>{job.title}</Link>
        </CardTitle>
        {/* Department/Role */}
        <CardDescription className="text-sm font-medium text-gray-500">{job.department}</CardDescription>
      </CardHeader>

      <CardContent className="px-5 py-3 border-b border-gray-100">
        <div className="space-y-2 text-sm text-gray-700">
          <p className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-techblue" />
            {job.location}
          </p>
          <p className="flex items-center">
            <Briefcase className="h-4 w-4 mr-2 text-techblue" />
            {job.type}
          </p>
        </div>
      </CardContent>

      <CardFooter className="p-5 pt-3 flex justify-between items-center">
        <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${accentColor}`}>
            {job.type}
        </span>
        <Link to={job.link}>
            <Button variant="ghost" className="text-techgold hover:bg-techgold/10 font-semibold">
                Apply Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default JobCard;
