import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: string;
}

const StatusBadge = ({ status }: StatusBadgeProps) => {
  const getStatusConfig = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
        return { variant: 'default' as const, className: 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20' };
      case 'inactive':
        return { variant: 'secondary' as const, className: 'bg-gray-500/10 text-gray-700 border-gray-500/20' };
      case 'pending':
        return { variant: 'secondary' as const, className: 'bg-yellow-500/10 text-yellow-700 border-yellow-500/20' };
      case 'published':
        return { variant: 'default' as const, className: 'bg-blue-500/10 text-blue-700 border-blue-500/20' };
      case 'draft':
        return { variant: 'secondary' as const, className: 'bg-gray-500/10 text-gray-700 border-gray-500/20' };
      case 'review':
        return { variant: 'secondary' as const, className: 'bg-orange-500/10 text-orange-700 border-orange-500/20' };
      case 'upcoming':
        return { variant: 'default' as const, className: 'bg-purple-500/10 text-purple-700 border-purple-500/20' };
      case 'completed':
        return { variant: 'secondary' as const, className: 'bg-green-500/10 text-green-700 border-green-500/20' };
      case 'full':
        return { variant: 'destructive' as const, className: 'bg-red-500/10 text-red-700 border-red-500/20' };
      case 'unread':
        return { variant: 'default' as const, className: 'bg-blue-500/10 text-blue-700 border-blue-500/20' };
      case 'read':
        return { variant: 'secondary' as const, className: 'bg-gray-500/10 text-gray-700 border-gray-500/20' };
      case 'replied':
        return { variant: 'default' as const, className: 'bg-green-500/10 text-green-700 border-green-500/20' };
      default:
        return { variant: 'secondary' as const, className: '' };
    }
  };

  const config = getStatusConfig(status);

  return (
    <Badge variant={config.variant} className={cn("capitalize", config.className)}>
      {status}
    </Badge>
  );
};

export default StatusBadge;
