import type { SelectHTMLAttributes } from "react";

type SelectOption = {
  value: string;
  label: string;
};

type SelectFieldProps = {
  id: string;
  label: string;
  options: readonly SelectOption[] | SelectOption[];
  error?: string;
  hint?: string;
} & SelectHTMLAttributes<HTMLSelectElement>;

export function SelectField({
  id,
  label,
  options,
  error,
  hint,
  className = "",
  required,
  ...props
}: SelectFieldProps) {
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
      <select
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        required={required}
        className={`w-full rounded-lg border bg-white px-4 py-3 text-sm text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-1 ${
          error ? "border-red-500" : "border-border hover:border-primary/20"
        } ${className}`}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error ? (
        <p id={errorId} className="text-sm text-red-600" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
