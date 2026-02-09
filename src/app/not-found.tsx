import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center text-foreground px-6">
      <h1 className="text-[12rem] md:text-[20rem] font-black tracking-tighter leading-none text-tomato/20">
        404
      </h1>
      <p className="text-xl md:text-2xl text-foreground-muted mb-8 text-center max-w-md -mt-8">
        The void consumed this page. It no longer exists in this dimension.
      </p>
      <Link
        href="/"
        className="px-8 py-4 bg-tomato hover:bg-tomato-dark text-white font-semibold rounded-full transition-colors"
      >
        Return to Reality
      </Link>
    </div>
  );
}
