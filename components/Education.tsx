import { site } from "@/content/site";
import { Section } from "./Section";

export function Education() {
  return (
    <Section id="education" title="Education">
      <ul className="space-y-8">
        {site.education.map((e) => (
          <li key={e.school} className="grid gap-2 md:grid-cols-[13rem_1fr] md:gap-10">
            <p className="text-muted">{e.period}</p>
            <div>
              <h3 className="text-[22px] font-semibold md:text-[28px]">{e.school}</h3>
              <p className="mt-1 font-medium">{e.degree}</p>
              {e.detail && <p className="mt-2 text-muted">{e.detail}</p>}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
