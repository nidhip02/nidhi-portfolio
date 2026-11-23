import { Lock } from "lucide-react";
import { site } from "@/content/site";
import { Section } from "./Section";
import { Rich } from "./Rich";

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-12">
        {site.experience.map((e) => (
          <li key={e.role + e.org} className="grid gap-4 md:grid-cols-[13rem_1fr] md:gap-10">
            <p className="text-muted">
              <Rich text={e.period} />
            </p>
            <div>
              <h3 className="text-[28px] font-semibold">{e.role}</h3>
              <p className="mt-1 font-medium">
                <Rich text={e.org} />
              </p>
              <p className="mt-3 text-muted">{e.note}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-accent">
                {e.bullets.map((b) => (
                  <li key={b}>
                    <Rich text={b} />
                  </li>
                ))}
              </ul>
              {e.work && (
                <div className="mt-8">
                  <h4 className="text-[16px] font-semibold">Projects at Hilti</h4>
                  <ul className="mt-4 space-y-4">
                    {e.work.map((w) => (
                      <li key={w.title} className="border-line rounded-xl border bg-card p-5">
                        <h5 className="font-serif text-[24px] font-semibold leading-tight">{w.title}</h5>
                        <p className="mt-1 text-[13px] text-accent">{w.kind}</p>
                        <p className="mt-3">{w.summary}</p>
                        <p className="mt-3 text-muted">
                          <span className="font-medium text-ink">My role: </span>
                          <Rich text={w.role} />
                        </p>
                        <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-accent">
                          {w.highlights.map((h) => (
                            <li key={h}>
                              <Rich text={h} />
                            </li>
                          ))}
                        </ul>
                        <ul className="mt-4 flex flex-wrap gap-2 text-[13px]">
                          {w.stack.map((t) => (
                            <li key={t} className="rounded bg-accent-soft px-2 py-0.5 text-accent">
                              {t}
                            </li>
                          ))}
                        </ul>
                        <p className="mt-4 inline-flex items-center gap-1.5 text-[14px] text-muted">
                          <Lock size={14} aria-hidden /> Source code is private (employer work)
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
