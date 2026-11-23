import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-24 sm:px-8">
      <h1 className="text-5xl font-semibold">Page not found</h1>
      <p className="mt-4 max-w-md text-muted">That page does not exist. Head back to the home page.</p>
      <Link href="/" className="mt-8 inline-block rounded-md bg-btn px-5 py-2.5 font-medium text-white">
        Back to home
      </Link>
    </section>
  );
}
