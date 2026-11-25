import { ArrowUpRight, Award } from "lucide-react";
import { site } from "@/content/site";
import { Section } from "./Section";
import { Rich } from "./Rich";

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-10 md:space-y-12">
        {site.experience.map((e) => (
          <li key={e.role + e.org} className="grid gap-2 md:grid-cols-[13rem_1fr] md:gap-10">
            <p className="text-[15px] text-muted md:text-base">
              <Rich text={e.period} />
            </p>
            <div>
              <h3 className="text-[22px] font-semibold md:text-[28px]">{e.role}</h3>
              <p className="mt-1 font-medium">
                <Rich text={e.org} />
              </p>
              <p className="mt-3 text-[15px] text-muted md:text-base">{e.note}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] marker:text-accent md:text-base">
                {e.bullets.map((b) => {
                  const text = typeof b === "string" ? b : b.text;
                  const link = typeof b === "string" ? undefined : b.link;
                  return (
                    <li key={text}>
                      <Rich text={text} />
                      {link && (
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1 flex w-fit items-center gap-1 font-medium text-accent underline-offset-4 hover:underline"
                        >
                          {link.label}
                          <ArrowUpRight size={15} aria-hidden />
                          <span className="sr-only"> (opens in a new tab)</span>
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
              {e.recognition && (
                <div className="mt-8">
                  <h4 className="font-sans text-base font-semibold">Recognition at Hilti</h4>
                  <ul className="mt-3 space-y-3">
                    {e.recognition.map((r) => (
                      <li key={r.title} className="border-line rounded-xl border bg-card p-4 md:p-5">
                        <div className="flex items-start gap-2.5">
                          <Award size={18} aria-hidden className="mt-1 shrink-0 text-accent" />
                          <div>
                            <h5 className="font-serif text-[19px] font-semibold leading-tight md:text-[22px]">{r.title}</h5>
                            <p className="mt-0.5 text-[13px] text-muted">{r.period}</p>
                            <p className="mt-2 text-[15px] md:text-base">{r.note}</p>
                          </div>
                        </div>
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
