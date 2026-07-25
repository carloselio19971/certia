import type { InputHTMLAttributes, ReactNode } from "react";

type CheckboxFieldProps = {
  id: string;
  label: ReactNode;
  error?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

export function CheckboxField({
  id,
  label,
  error,
  className = "",
  required,
  ...props
}: CheckboxFieldProps) {
  const errorId = error ? `${id}-error` : undefined;

  return (
    <div className="space-y-2">
      <div className="flex items-start gap-3">
        <input
          id={id}
          type="checkbox"
          aria-invalid={error ? true : undefined}
          aria-describedby={errorId}
          required={required}
          className={`mt-1 h-4 w-4 shrink-0 rounded border-border text-secondary focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-1 ${className}`}
          {...props}
        />
        <label htmlFor={id} className="text-sm leading-relaxed text-text-secondary">
          {label}
          {required ? <span className="text-secondary"> *</span> : null}
        </label>
      </div>
      {error ? (
        <p id={errorId} className="text-sm text-red-600" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
