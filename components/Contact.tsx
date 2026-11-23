import { CalendarDays, Mail } from "lucide-react";
import { site } from "@/content/site";
import { Section } from "./Section";
import { ExtLink } from "./Links";

export function Contact() {
  const { links, calendar } = site;
  const inviteUrl =
    "https://calendar.google.com/calendar/render?" +
    new URLSearchParams({
      action: "TEMPLATE",
      text: `Meeting with ${site.name}`,
      details: "Topic: iOS engineering, AI engineering, or a product problem.",
      add: calendar.email,
    }).toString();
  // To show open time slots instead of the invite button, create a Google Calendar appointment
  // schedule and set calendar.embedUrl in content/site.ts.
  return (
    <Section id="contact" title={site.contact.heading}>
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-14">
        <div>
          <p className="max-w-md">{site.contact.body}</p>
          <ul className="mt-7 space-y-3">
            <li className="flex items-center gap-2">
              <Mail size={18} aria-hidden className="text-muted" />
              {links.email ? (
                <a href={`mailto:${links.email}`} className="font-medium text-accent underline-offset-4 hover:underline">
                  {links.email}
                </a>
              ) : (
                <mark className="ph">[Add your email]</mark>
              )}
            </li>
            <li>
              <ExtLink href={links.linkedin} label="LinkedIn" placeholder="[Add LinkedIn URL]" />
            </li>
            <li>
              <ExtLink href={links.github} label="GitHub" placeholder="[Add GitHub URL]" />
            </li>
          </ul>
        </div>

        <div className="border-line rounded-xl border bg-card p-4 sm:p-6">
          <h3 className="flex items-center gap-2 font-sans text-lg font-semibold">
            <CalendarDays size={20} aria-hidden className="text-accent" />
            Book a meeting
          </h3>
          {calendar.embedUrl ? (
            <>
              <iframe
                title="Book a meeting in Google Calendar"
                src={calendar.embedUrl}
                loading="lazy"
                className="border-line mt-4 h-[640px] w-full rounded-lg border"
              />
              {calendar.bookingUrl && (
                <p className="mt-3 text-sm">
                  <ExtLink href={calendar.bookingUrl} label="Open the booking page in a new tab" placeholder="" />
                </p>
              )}
            </>
          ) : calendar.bookingUrl ? (
            <p className="mt-4">
              <a
                href={calendar.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-md bg-btn px-5 py-2.5 font-medium text-white hover:bg-btn-hover"
              >
                Choose a time in Google Calendar
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </p>
          ) : (
            <div className="mt-4 space-y-4 text-[0.95rem]">
              <p>
                Choose a time and send an invite. It opens in your own Google Calendar with {calendar.email} already added as a
                guest.
              </p>
              <a
                href={inviteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-btn px-5 py-2.5 font-medium text-white hover:bg-btn-hover"
              >
                <CalendarDays size={18} aria-hidden />
                Schedule a meeting
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
