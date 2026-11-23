import { site } from "@/content/site";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-x-12 gap-y-9 sm:grid-cols-2">
        {site.skills.map((g) => (
          <div key={g.group}>
            <h3 className="font-sans text-[16px] font-semibold">{g.group}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {g.items.map((s) => (
                <li key={s} className="border-line rounded-md border bg-card px-3 py-1 text-[13px]">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
