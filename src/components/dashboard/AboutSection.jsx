const AboutSection = ({
  handleSavePortfolio,
  labelClass,
  inputClass,
  portfolioData,
  handlePortfolioChange,
  handleEducationChange,
  loading,
  message,
}) => {
  return (
    <form onSubmit={handleSavePortfolio}>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          About
        </h2>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Detailed about description and education information.
        </p>
      </div>

      <div className="space-y-8">
        <div>
          <label className={labelClass}>About Description</label>
          <textarea
            rows="6"
            name="aboutDescription"
            value={portfolioData?.aboutDescription || ""}
            onChange={handlePortfolioChange}
            placeholder="Write about yourself"
            className={inputClass}
          />
        </div>

        {["ssc", "hsc", "bsc"].map((level) => (
          <div key={level}>
            <h3 className="mb-4 text-lg font-bold capitalize text-slate-900 dark:text-white">
              {level}
            </h3>

            <div className="grid gap-5 md:grid-cols-2">
              <input
                type="text"
                value={portfolioData?.education?.[level]?.exam || ""}
                onChange={(e) =>
                  handleEducationChange(level, "exam", e.target.value)
                }
                placeholder="Exam"
                className={inputClass}
              />

              <input
                type="text"
                value={portfolioData?.education?.[level]?.institute || ""}
                onChange={(e) =>
                  handleEducationChange(level, "institute", e.target.value)
                }
                placeholder="Institute"
                className={inputClass}
              />

              <input
                type="text"
                value={portfolioData?.education?.[level]?.group || ""}
                onChange={(e) =>
                  handleEducationChange(level, "group", e.target.value)
                }
                placeholder="Group / Subject"
                className={inputClass}
              />

              <input
                type="text"
                value={portfolioData?.education?.[level]?.result || ""}
                onChange={(e) =>
                  handleEducationChange(level, "result", e.target.value)
                }
                placeholder="Result"
                className={inputClass}
              />

              <input
                type="text"
                value={portfolioData?.education?.[level]?.year || ""}
                onChange={(e) =>
                  handleEducationChange(level, "year", e.target.value)
                }
                placeholder="Year"
                className={`${inputClass} md:col-span-2`}
              />
            </div>
          </div>
        ))}
      </div>

      {message && (
        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
          {message}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="mt-6 rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-900 disabled:opacity-70 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
      >
        {loading ? "Saving..." : "Save About"}
      </button>
    </form>
  );
};

export default AboutSection;