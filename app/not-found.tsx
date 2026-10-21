import Link from "next/link";

function Not() {
  return (
    <div className="w-full min-h-[60vh] flex flex-col justify-center items-center px-4 py-16 text-center">
      <div className="text-7xl sm:text-8xl font-black text-slate-200 tracking-tighter select-none">
        404
      </div>
      <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
        Page Is Not Available
      </h1>
      <p className="text-sm text-slate-500 max-w-sm mt-2 mb-8">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-3">
        <Link
          className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm transition-all duration-200"
          href="/"
        >
          Go To Student Page
        </Link>
        <Link
          className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 shadow-2xs transition-all duration-200"
          href="/department"
        >
          Go To Department Page
        </Link>
      </div>
    </div>
  );
}

export default Not;