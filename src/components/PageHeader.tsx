
import { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

const PageHeader = ({ title, description, children, className = "" }: PageHeaderProps) => {
  return (
    <div className={`bg-gradient-to-r from-techblue to-techblue-dark text-white py-16 md:py-24 ${className}`}>
      <div className="container-custom">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-fade-up">{title}</h1>
        {description && (
          <p className="text-lg md:text-xl text-gray-100 max-w-2xl animate-fade-up" style={{ animationDelay: "0.1s" }}>
            {description}
          </p>
        )}
        {children && (
          <div className="mt-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
