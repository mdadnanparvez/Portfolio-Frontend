const DashboardHeader = ({ handleLogout }) => {
  return (
    <div className="mb-8 overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="mb-3 inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-700 dark:border-blue-900/40 dark:bg-blue-950/30 dark:text-blue-300">
            Admin Dashboard
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
            Manage Your Portfolio
          </h1>

          <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400">
            Update your homepage, about, skills, certificates, experience, contact,
            and projects from one clean dashboard.
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-600 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;