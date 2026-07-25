import type { TextareaHTMLAttributes } from "react";

type TextareaFieldProps = {
  id: string;
  label: string;
  error?: string;
  hint?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export function TextareaField({
  id,
  label,
  error,
  hint,
  className = "",
  required,
  rows = 5,
  ...props
}: TextareaFieldProps) {
  const errorId = error ? `${id}-error` : undefined;
  const hintId = hint ? `${id}-hint` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-text-primary">
        {label}
        {required ? <span className="text-secondary"> *</span> : null}
      </label>
      {hint ? (
        <p id={hintId} className="text-xs text-text-secondary">
          {hint}
        </p>
      ) : null}
      <textarea
        id={id}
        rows={rows}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        required={required}
        className={`w-full resize-y rounded-lg border bg-white px-4 py-3 text-sm text-text-primary transition-colors placeholder:text-text-secondary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-1 ${
          error ? "border-red-500" : "border-border hover:border-primary/20"
        } ${className}`}
        {...props}
      />
      {error ? (
        <p id={errorId} className="text-sm text-red-600" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
