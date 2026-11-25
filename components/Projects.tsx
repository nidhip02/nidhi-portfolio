import { Award, Lock } from "lucide-react";
import { site } from "@/content/site";
import { Section } from "./Section";
import { Rich } from "./Rich";
import { ExtLink } from "./Links";

type P = (typeof site.projects)[number];

function Details({ p }: { p: P }) {
  return (
    <>
      <p className="mt-3 text-[15px] text-muted">
        <span className="font-medium text-ink">My role: </span>
        <Rich text={p.role} />
      </p>
      <ul className="mt-4 list-disc space-y-1.5 pl-5 text-[15px] marker:text-accent">
        {p.highlights.map((h) => (
          <li key={h}>
            <Rich text={h} />
          </li>
        ))}
      </ul>
      <ul className="mt-5 flex flex-wrap gap-2 text-[13px]">
        {p.stack.map((t) => (
          <li key={t} className="rounded bg-accent-soft px-2 py-0.5 text-accent">
            {t}
          </li>
        ))}
      </ul>
    </>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      intro="AI and machine learning projects, including published research. My iOS work at Hilti is described under Experience."
    >
      <ul className="grid gap-4 md:grid-cols-2 md:gap-6">
        {site.projects.map((p) => (
          <li key={p.title} className="border-line flex flex-col rounded-xl border bg-card p-4 md:p-6">
            <p className="text-[13px] font-medium text-accent">{p.kind}</p>
            <h3 className="mt-1 text-[22px] font-semibold leading-tight md:text-[28px]">{p.title}</h3>
            <p className="mt-3">{p.summary}</p>
            {p.award && (
              <p className="mt-3 flex items-start gap-2 rounded-md bg-accent-soft px-3 py-2 text-[15px] font-medium text-accent">
                <Award size={18} aria-hidden className="mt-0.5 shrink-0" />
                {p.award}
              </p>
            )}
            <div className="hidden md:block">
              <Details p={p} />
            </div>
            <details className="group mt-3 md:hidden">
              <summary className="w-fit cursor-pointer list-none text-[15px] font-medium text-accent underline-offset-4 hover:underline [&::-webkit-details-marker]:hidden">
                <span className="group-open:hidden">Show details</span>
                <span className="hidden group-open:inline">Hide details</span>
              </summary>
              <Details p={p} />
            </details>
            {(p.links?.length || p.repo) && (
              <p className="border-line mt-auto border-t pt-4 text-[15px]" style={{ marginTop: "1.5rem" }}>
                {p.links?.map((l) => (
                  <span key={l.url} className="mb-2 block">
                    <ExtLink href={l.url} label={l.label} placeholder="" />
                  </span>
                ))}
                {p.repo === "private" ? (
                  <span className="inline-flex items-center gap-1.5 text-muted">
                    <Lock size={15} aria-hidden /> Source code is private
                  </span>
                ) : (
                  p.repo && <ExtLink href={p.repo} label="View on GitHub" placeholder="" />
                )}
              </p>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
