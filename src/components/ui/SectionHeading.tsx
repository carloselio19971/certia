type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleId?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
  titleId,
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "text-center mx-auto max-w-3xl" : "text-left max-w-3xl";

  return (
    <div className={`mb-10 md:mb-14 ${alignment} ${className}`}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-secondary">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={titleId}
        className="text-2xl font-bold tracking-tight text-text-primary sm:text-3xl md:text-4xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-text-secondary md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
