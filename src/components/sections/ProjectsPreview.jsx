import { Link } from "react-router-dom";

const ProjectsPreview = ({ projects }) => {
  if (!projects?.length) return null;

  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-20">

      {/* OUTER SECTION BOX */}
      <div className="relative rounded-[36px] border border-slate-200/70 bg-white/40 p-8 shadow-[0_30px_90px_rgba(15,23,42,0.12)] backdrop-blur-3xl dark:border-slate-800/50 dark:bg-slate-950/30">

        {/* TITLE */}
        <div className="flex justify-center">
          <div className="relative inline-flex items-center rounded-full border border-slate-300/70 bg-white/60 px-5 py-2 text-[16px] font-semibold uppercase tracking-[0.25em] text-slate-600 shadow-md backdrop-blur-xl dark:border-white/10 dark:bg-white/10 dark:text-slate-300">

            <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 via-transparent to-cyan-400/20 blur-md" />
            <span className="relative z-10">Projects</span>

          </div>
        </div>

        {/* GAP + HR */}
        <div className="h-6" />
        <hr className="border-slate-300/40 dark:border-slate-700/40" />
        <div className="h-10" />

        {/* PROJECT GRID */}
        <div className="grid gap-6 md:grid-cols-3">

          {projects.map((project) => (
            <div
              key={project._id}
              className="group relative rounded-3xl p-[1px] transition-all duration-500 hover:-translate-y-2"
            >

              {/* GLOW BORDER */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-sky-500/30 via-indigo-500/20 to-cyan-400/30 opacity-60 blur-[1px] transition group-hover:opacity-100" />

              {/* CARD */}
              <div className="relative rounded-3xl border border-slate-200/70 bg-white/70 p-6 shadow-lg backdrop-blur-xl transition dark:border-slate-800/50 dark:bg-slate-900/40">

                {/* SOFT LIGHT GLOW INSIDE */}
                <div className="pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full bg-sky-400/10 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-indigo-400/10 blur-3xl" />

                {/* CONTENT */}
                <div className="relative z-10">

                  <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                    {project.name}
                  </h3>

                  <p className="mb-4 text-slate-600 dark:text-slate-400">
                    {project.shortDescription}
                  </p>

                  {/* TOOLS */}
                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.tools?.slice(0, 4).map((tool, index) => (
                      <span
                        key={index}
                        className="rounded-full border border-slate-300/70 bg-white/70 px-3 py-1 text-xs text-slate-700 backdrop-blur dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* BUTTON */}
                  <Link
                    to={`/project/${project.slug}`}
                    className="inline-flex rounded-full bg-slate-700 px-4 py-2 text-sm font-medium text-white transition hover:scale-105 dark:bg-white dark:text-slate-950"
                  >
                    View Details
                  </Link>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ProjectsPreview;