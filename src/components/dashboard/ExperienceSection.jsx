const ExperienceSection = ({
  labelClass,
  inputClass,
  experienceForm,
  setExperienceForm,
  addExperience,
  portfolioData,
  removeExperience,
  startEditExperience,
  editingExperienceIndex,
  handleSavePortfolio,
}) => {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Experience
        </h2>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Add professional experience. If none, keep empty.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className={labelClass}>Company</label>
          <input
            type="text"
            value={experienceForm.company}
            onChange={(e) =>
              setExperienceForm((prev) => ({
                ...prev,
                company: e.target.value,
              }))
            }
            placeholder="Company"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>Role</label>
          <input
            type="text"
            value={experienceForm.role}
            onChange={(e) =>
              setExperienceForm((prev) => ({
                ...prev,
                role: e.target.value,
              }))
            }
            placeholder="Role"
            className={inputClass}
          />
        </div>

        <div className="md:col-span-2">
          <label className={labelClass}>Duration</label>
          <input
            type="text"
            value={experienceForm.duration}
            onChange={(e) =>
              setExperienceForm((prev) => ({
                ...prev,
                duration: e.target.value,
              }))
            }
            placeholder="Jan 2024 - Present"
            className={inputClass}
          />
        </div>

        <div className="md:col-span-2">
          <label className={labelClass}>Description</label>
          <textarea
            rows="4"
            value={experienceForm.description}
            onChange={(e) =>
              setExperienceForm((prev) => ({
                ...prev,
                description: e.target.value,
              }))
            }
            placeholder="Description"
            className={inputClass}
          />
        </div>
      </div>

      <button
        type="button"
        onClick={addExperience}
        className="mt-5 rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-900 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
      >
        {editingExperienceIndex !== null ? "Update Experience" : "Add Experience"}
      </button>

      <div className="mt-8 space-y-4">
        {(portfolioData?.experiences || []).length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400">
            No experience added yet.
          </div>
        ) : (
          portfolioData.experiences.map((experience, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {experience.role || "Untitled Role"}
                  </h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-400">
                    {experience.company || "No company"}
                  </p>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {experience.duration || "No duration"}
                  </p>
                  {experience.description && (
                    <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
                      {experience.description}
                    </p>
                  )}
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => startEditExperience(index)}
                    className="rounded-xl bg-amber-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-amber-600"
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    onClick={() => removeExperience(index)}
                    className="rounded-xl bg-red-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
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
        Save Experience
      </button>
    </div>
  );
};

export default ExperienceSection;