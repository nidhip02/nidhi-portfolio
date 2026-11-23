import { ArrowUpRight } from "lucide-react";

/** External link, or an amber placeholder when the URL has not been filled in. */
export function ExtLink({
  href,
  label,
  placeholder,
  className = "",
}: {
  href: string;
  label: string;
  placeholder: string;
  className?: string;
}) {
  if (!href) {
    return (
      <mark className={`ph ${className}`}>
        {placeholder}
      </mark>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1 font-medium text-accent underline-offset-4 hover:underline ${className}`}
    >
      {label}
      <ArrowUpRight size={15} aria-hidden />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
