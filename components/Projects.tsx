import { Award, Lock } from "lucide-react";
import { site } from "@/content/site";
import { Section } from "./Section";
import { Rich } from "./Rich";
import { ExtLink } from "./Links";

export function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      intro="Research papers and personal projects. My iOS work at Hilti is described under Experience."
    >
      <ul className="grid gap-6 md:grid-cols-2">
        {site.projects.map((p) => (
          <li key={p.title} className="border-line flex flex-col rounded-xl border bg-card p-6">
            <p className="text-[13px] font-medium text-accent">{p.kind}</p>
            <h3 className="mt-1 text-[28px] font-semibold">{p.title}</h3>
            <p className="mt-3">{p.summary}</p>
            {p.award && (
              <p className="mt-3 flex items-start gap-2 rounded-md bg-accent-soft px-3 py-2 text-[0.95rem] font-medium text-accent">
                <Award size={18} aria-hidden className="mt-0.5 shrink-0" />
                {p.award}
              </p>
            )}
            <p className="mt-3 text-[0.95rem] text-muted">
              <span className="font-medium text-ink">My role: </span>
              <Rich text={p.role} />
            </p>
            <ul className="mt-4 list-disc space-y-1.5 pl-5 text-[0.95rem] marker:text-accent">
              {p.highlights.map((h) => (
                <li key={h}>
                  <Rich text={h} />
                </li>
              ))}
            </ul>
            <ul className="mt-5 flex flex-wrap gap-2 text-[13px]">
              {p.stack.map((s) => (
                <li key={s} className="rounded bg-accent-soft px-2 py-0.5 text-accent">
                  {s}
                </li>
              ))}
            </ul>
            <p className="border-line mt-auto border-t pt-4 text-[0.95rem]" style={{ marginTop: "1.5rem" }}>
              {p.links?.map((l) => (
                <span key={l.url} className="mb-2 block">
                  <ExtLink href={l.url} label={l.label} placeholder="" />
                </span>
              ))}
              {p.repo === "private" ? (
                <span className="inline-flex items-center gap-1.5 text-muted">
                  <Lock size={15} aria-hidden /> Source code is private (employer work)
                </span>
              ) : (
                <ExtLink href={p.repo} label="View on GitHub" placeholder="[Add GitHub repository link]" />
              )}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
