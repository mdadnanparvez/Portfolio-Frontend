const SkillsSection = ({
  labelClass,
  inputClass,
  skillForm,
  setSkillForm,
  addSkill,
  portfolioData,
  removeSkill,
  handleSavePortfolio,
}) => {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Skills
        </h2>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Add grouped skills like Frontend, Backend, Database, Tools.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className={labelClass}>Category</label>
          <input
            type="text"
            value={skillForm.category}
            onChange={(e) =>
              setSkillForm((prev) => ({ ...prev, category: e.target.value }))
            }
            placeholder="Frontend"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>Items</label>
          <input
            type="text"
            value={skillForm.items}
            onChange={(e) =>
              setSkillForm((prev) => ({ ...prev, items: e.target.value }))
            }
            placeholder="React, Tailwind, JavaScript"
            className={inputClass}
          />
        </div>
      </div>

      <button
        type="button"
        onClick={addSkill}
        className="mt-5 rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-900 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
      >
        Add Skill Category
      </button>

      <div className="mt-8 space-y-4">
        {(portfolioData?.skills || []).length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400">
            No skills added yet.
          </div>
        ) : (
          portfolioData.skills.map((skill, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {skill.category}
                  </h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-400">
                    {skill.items?.join(", ")}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => removeSkill(index)}
                  className="rounded-xl bg-red-500 px-3 py-2 text-sm font-medium text-white"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <button
        type="button"
        onClick={handleSavePortfolio}
        className="mt-6 rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-900 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
      >
        Save Skills
      </button>
    </div>
  );
};

export default SkillsSection;