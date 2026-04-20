const AboutPreview = ({ portfolio }) => {
  const hasEducation =
    portfolio?.education?.ssc?.institute ||
    portfolio?.education?.hsc?.institute ||
    portfolio?.education?.bsc?.institute;

  if (
    !portfolio?.aboutDescription &&
    !hasEducation &&
    !portfolio?.experiences?.length
  ) {
    return null;
  }

  const getGradeLabel = (level) => (level === "bsc" ? "CGPA" : "GPA");

  const educationItems = ["ssc", "hsc", "bsc"]
    .map((level) => ({
      level,
      ...portfolio?.education?.[level],
    }))
    .filter(
      (edu) =>
        edu?.institute ||
        edu?.exam ||
        edu?.group ||
        edu?.year ||
        edu?.result
    );

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

      {/* BACKGROUND SOFT GLOW */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 left-10 h-80 w-80 rounded-full bg-blue-400/20 blur-[140px]" />
        <div className="absolute bottom-0 right-10 h-80 w-80 rounded-full bg-cyan-400/20 blur-[160px]" />
      </div>

      {/* TITLE */}
      <div className="mb-12 flex justify-center">
        <div className="relative inline-flex items-center rounded-full border border-slate-300/60 bg-white/60 px-6 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-slate-600 backdrop-blur-xl dark:border-white/10 dark:bg-white/10 dark:text-slate-300">

          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 via-transparent to-cyan-400/20 blur-md" />
          <span className="relative z-10 text-base sm:text-lg font-semibold uppercase tracking-[0.20em]">
  About Me
</span>
        </div>
      </div>

      {/* MAIN GLASS BOX */}
      <div className="relative rounded-[36px] border border-white/20 bg-white/40 p-6 shadow-[0_30px_100px_rgba(15,23,42,0.12)] backdrop-blur-3xl dark:border-slate-800/50 dark:bg-slate-950/40 sm:p-8 lg:p-10">

        {/* ABOUT TEXT */}
        {portfolio?.aboutDescription && (
          <div className="mb-12">
            <div className="rounded-2xl border border-white/20 bg-white/50 p-6 backdrop-blur-xl shadow-sm dark:bg-white/5">
              <p className="text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-[15px] sm:leading-8">
                {portfolio.aboutDescription}
              </p>
            </div>
          </div>
        )}

        {/* EDUCATION */}
        {educationItems.length > 0 && (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {educationItems.map((edu, index) => (
              <div
                key={index}
                className="group relative rounded-3xl p-[1px] transition-all duration-500 hover:-translate-y-2"
              >

                {/* GLOW BORDER */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/30 via-indigo-400/20 to-cyan-400/30 opacity-70 blur-sm transition group-hover:opacity-100" />

                {/* CARD */}
                <div className="relative h-full rounded-3xl border border-white/20 bg-white/60 p-6 pt-14 backdrop-blur-2xl shadow-lg transition-all duration-500 group-hover:shadow-[0_25px_80px_rgba(59,130,246,0.2)] dark:bg-slate-900/40">

                  {/* FLOATING YEAR (SAFE + CENTERED) */}
                  {edu?.year && (
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 max-w-[85%]">
                      <span className="block truncate rounded-full border border-white/30 bg-white/70 px-4 py-1 text-xs font-semibold text-slate-600 backdrop-blur-xl shadow-sm dark:bg-slate-900/70 dark:text-slate-300">
                        {edu.year}
                      </span>
                    </div>
                  )}

                  {/* SOFT INNER GLOW */}
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-400/10 blur-3xl" />
                  <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />

                  {/* CONTENT */}
                  <div className="relative z-10">

                    {/* EXAM */}
                    {edu?.exam && (
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {edu.exam}
                      </h3>
                    )}

                    {/* GROUP */}
                    {edu?.group && (
                      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                        {edu.group}
                      </p>
                    )}

                    {/* INSTITUTE */}
                    {edu?.institute && (
                      <p className="mt-4 text-sm font-medium text-slate-600 dark:text-slate-300">
                        {edu.institute}
                      </p>
                    )}

                    {/* RESULT */}
                    {edu?.result && (
                      <div className="mt-5 flex items-center justify-between border-t border-white/30 pt-4 dark:border-slate-700/40">
                        <span className="text-xs uppercase tracking-wider text-slate-400">
                          {getGradeLabel(edu.level)}
                        </span>

                        <span className="bg-gradient-to-r from-blue-500 via-indigo-400 to-cyan-400 bg-clip-text text-xl font-bold text-transparent">
                          {edu.result}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* HOVER OVERLAY */}
                  <div className="pointer-events-none absolute inset-0 rounded-3xl bg-white/10 opacity-0 transition group-hover:opacity-100 dark:bg-white/5" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutPreview;