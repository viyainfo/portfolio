export function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/90 mt-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="text-xs text-slate-500">
          © {new Date().getFullYear()} Viyainfo Digital Labs.
        </div>
        <div className="flex flex-wrap gap-3 text-[11px] text-slate-400">
          <span>Built by ViyaInfo</span>
          <span className="">•</span>
          <span> India</span>
        </div>
      </div>
    </footer>
  );
}

