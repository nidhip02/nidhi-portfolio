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
      <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8 md:py-14 lg:py-20">
        <h2 id={`${id}-title`} className="text-[32px] font-semibold md:text-[40px] lg:text-[48px]">
          {title}
        </h2>
        {intro && <p className="mt-2 max-w-2xl text-[15px] text-muted md:mt-3 md:text-base">{intro}</p>}
        <div className="mt-6 md:mt-10">{children}</div>
      </div>
    </section>
  );
}
