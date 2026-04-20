const DashboardSidebar = ({
  menuItems,
  activeSection,
  setActiveSection,
  setMessage,
}) => {
  return (
    <aside className="h-fit rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <h3 className="mb-4 text-lg font-bold text-slate-900 dark:text-white">
        Dashboard Menu
      </h3>

      <div className="space-y-3">
        {menuItems.map((item) => (
          <button
            key={item.key}
            type="button"
            onClick={() => {
              setActiveSection(item.key);
              setMessage("");
            }}
            className={`w-full rounded-2xl px-4 py-3 text-left text-sm font-medium transition ${
              activeSection === item.key
                ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950"
                : "border border-slate-200 text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </aside>
  );
};

export default DashboardSidebar;