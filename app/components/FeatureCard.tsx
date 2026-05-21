import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 hover:shadow-md hover:ring-indigo-200 transition-all dark:bg-zinc-900 dark:ring-gray-800 dark:hover:ring-indigo-900">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white" data-testid="feature-card-title">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400" data-testid="feature-card-description">
        {description}
      </p>
    </div>
  );
}
