import Image from "next/image";
import { CalendarDays, FileText, Mail } from "lucide-react";
import { site } from "@/content/site";
import { ExtLink } from "./Links";

export function Hero() {
  const { links } = site;
  return (
    <section aria-labelledby="name" className="mx-auto max-w-5xl px-5 pb-10 pt-8 sm:px-8 md:pb-14 md:pt-12 lg:pb-20 lg:pt-20">
      <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-start lg:gap-16">
        <div>
          <h1 id="name" className="text-[44px] font-semibold leading-none sm:text-[56px] md:text-[64px] lg:text-[80px]">
            {site.name}
          </h1>
          <p className="mt-4 max-w-xl text-[17px] leading-snug text-ink md:mt-5 md:text-[18px]">{site.headline}</p>
          <p className="mt-3 max-w-xl text-[15px] text-muted md:mt-5 md:text-base">{site.intro}</p>

          <dl className="border-line mt-6 max-w-xl divide-y divide-line border-y text-[15px] md:mt-9 md:text-[16px]">
            <div className="grid grid-cols-[5.5rem_1fr] gap-3 py-2.5 md:grid-cols-[6.5rem_1fr] md:py-3">
              <dt className="text-muted">Email</dt>
              <dd>
                {links.email ? (
                  <a href={`mailto:${links.email}`} className="inline-flex items-center gap-1.5 font-medium text-accent underline-offset-4 hover:underline">
                    <Mail size={16} aria-hidden />
                    {links.email}
                  </a>
                ) : (
                  <mark className="ph">[Add your email]</mark>
                )}
              </dd>
            </div>
            <div className="grid grid-cols-[5.5rem_1fr] gap-3 py-2.5 md:grid-cols-[6.5rem_1fr] md:py-3">
              <dt className="text-muted">LinkedIn</dt>
              <dd>
                <ExtLink href={links.linkedin} label={links.linkedin.replace(/^https?:\/\/(www\.)?/, "")} placeholder="[Add LinkedIn URL]" />
              </dd>
            </div>
            <div className="grid grid-cols-[5.5rem_1fr] gap-3 py-2.5 md:grid-cols-[6.5rem_1fr] md:py-3">
              <dt className="text-muted">GitHub</dt>
              <dd>
                <ExtLink href={links.github} label={links.github.replace(/^https?:\/\/(www\.)?/, "")} placeholder="[Add GitHub URL]" />
              </dd>
            </div>
            <div className="grid grid-cols-[5.5rem_1fr] gap-3 py-2.5 md:grid-cols-[6.5rem_1fr] md:py-3">
              <dt className="text-muted">Résumé</dt>
              <dd>
                <a href={links.resume} download="Nidhi_Patel_Resume.pdf" className="inline-flex items-center gap-1.5 font-medium text-accent underline-offset-4 hover:underline">
                  <FileText size={16} aria-hidden />
                  Download PDF
                </a>
              </dd>
            </div>
          </dl>

          <div className="mt-6 flex flex-wrap gap-3 text-[15px] font-medium md:mt-8 md:text-[16px]">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-btn px-4 py-2 md:px-5 md:py-2.5 text-white hover:bg-btn-hover">
              <CalendarDays size={18} aria-hidden />
              Book a meeting
            </a>
            <a href="#projects" className="border-line rounded-md border bg-card px-4 py-2 md:px-5 md:py-2.5 hover:border-ink">
              View projects
            </a>
          </div>
        </div>

        <aside aria-label="At a glance" className="border-line flex items-center gap-4 rounded-xl border bg-card p-4 lg:block lg:p-6">
          {site.photo ? (
            <Image src={site.photo} alt={`Portrait of ${site.name}`} width={745} height={781} className="h-auto w-28 shrink-0 rounded-lg lg:w-full lg:max-w-[16rem] lg:rounded-xl" priority />
          ) : (
            <div
              role="img"
              aria-label={`Initials of ${site.name}`}
              className="grid h-28 w-28 place-items-center rounded-full bg-accent-soft font-serif text-4xl font-semibold text-accent"
            >
              {site.initials}
            </div>
          )}
          <dl className="space-y-3 lg:mt-6 lg:space-y-4">
            {site.now.map((n) => (
              <div key={n.label}>
                <dt className="text-[13px] text-muted">{n.label}</dt>
                <dd className="font-medium">{n.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}
