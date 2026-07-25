import type { ReactNode } from "react";
import { SearchX } from "lucide-react";

type EmptyStateProps = {
  title: string;
  description: string;
  action?: ReactNode;
};

export function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-dashed border-border bg-bg-light px-6 py-16 text-center">
      <div className="mb-4 inline-flex rounded-full bg-bg-muted p-4 text-text-secondary">
        <SearchX className="h-8 w-8" aria-hidden />
      </div>
      <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
      <p className="mt-2 max-w-md text-sm leading-relaxed text-text-secondary">
        {description}
      </p>
      {action ? <div className="mt-6">{action}</div> : null}
    </div>
  );
}
