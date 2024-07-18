import Link from "next/link";

function ErrorPage({}) {
  return (
    <div className="h-screen pt-96 flex flex-col items-center gap-10 bg-slate-50">
      <div className="text-6xl">🏝️</div>
      <h2 className="text-8xl font-mono text-slate-300">404</h2>
      <h3 className="font-mono text-2xl text-slate-600">
        This page was lost at sea.
      </h3>
      <Link className="text-blue-accent hover:underline" href="/">
        &gt;&gt; Return home
      </Link>
    </div>
  );
}

export default ErrorPage;
