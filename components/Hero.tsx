import Image from "next/image";
import { CalendarDays, FileText, Mail } from "lucide-react";
import { site } from "@/content/site";
import { ExtLink } from "./Links";

export function Hero() {
  const { links } = site;
  return (
    <section aria-labelledby="name" className="mx-auto max-w-5xl px-5 pb-16 pt-12 sm:px-8 lg:pb-20 lg:pt-20">
      <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:items-start lg:gap-16">
        <div>
          <h1 id="name" className="text-[64px] font-semibold leading-none lg:text-[80px]">
            {site.name}
          </h1>
          <p className="mt-5 max-w-xl text-[18px] leading-snug text-ink">{site.headline}</p>
          <p className="mt-5 max-w-xl text-muted">{site.intro}</p>

          <dl className="border-line mt-9 max-w-xl divide-y divide-line border-y text-[16px]">
            <div className="grid grid-cols-[6.5rem_1fr] gap-3 py-3">
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
            <div className="grid grid-cols-[6.5rem_1fr] gap-3 py-3">
              <dt className="text-muted">LinkedIn</dt>
              <dd>
                <ExtLink href={links.linkedin} label={links.linkedin.replace(/^https?:\/\/(www\.)?/, "")} placeholder="[Add LinkedIn URL]" />
              </dd>
            </div>
            <div className="grid grid-cols-[6.5rem_1fr] gap-3 py-3">
              <dt className="text-muted">GitHub</dt>
              <dd>
                <ExtLink href={links.github} label={links.github.replace(/^https?:\/\/(www\.)?/, "")} placeholder="[Add GitHub URL]" />
              </dd>
            </div>
            <div className="grid grid-cols-[6.5rem_1fr] gap-3 py-3">
              <dt className="text-muted">Résumé</dt>
              <dd>
                <a href={links.resume} download className="inline-flex items-center gap-1.5 font-medium text-accent underline-offset-4 hover:underline">
                  <FileText size={16} aria-hidden />
                  Download PDF
                </a>
              </dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-wrap gap-3 text-[16px] font-medium">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md bg-btn px-5 py-2.5 text-white hover:bg-btn-hover">
              <CalendarDays size={18} aria-hidden />
              Book a meeting
            </a>
            <a href="#projects" className="border-line rounded-md border bg-card px-5 py-2.5 hover:border-ink">
              View projects
            </a>
          </div>
        </div>

        <aside aria-label="At a glance" className="border-line rounded-xl border bg-card p-6">
          {site.photo ? (
            <Image src={site.photo} alt={`Portrait of ${site.name}`} width={745} height={781} className="h-auto w-full max-w-[16rem] rounded-xl" priority />
          ) : (
            <div
              role="img"
              aria-label={`Initials of ${site.name}`}
              className="grid h-28 w-28 place-items-center rounded-full bg-accent-soft font-serif text-4xl font-semibold text-accent"
            >
              {site.initials}
            </div>
          )}
          <dl className="mt-6 space-y-4">
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
