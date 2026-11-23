export function Section({
  id,
  title,
  intro,
  children,
}: {
  id: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-line border-t">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 lg:py-20">
        <h2 id={`${id}-title`} className="text-[40px] font-semibold sm:text-[48px]">
          {title}
        </h2>
        {intro && <p className="mt-3 max-w-2xl text-muted">{intro}</p>}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
