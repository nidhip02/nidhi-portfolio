import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-line border-t">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-5 py-8 text-[13px] text-muted sm:px-8">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p>Built with Next.js and hosted on Vercel.</p>
      </div>
    </footer>
  );
}
