const ManageProjectSection = ({
  projects,
  handleDeleteProject,
  startEditProject,
}) => {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Manage Project
        </h2>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          View, edit and delete existing projects.
        </p>
      </div>

      <div className="space-y-4">
        {projects.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400">
            No projects added yet.
          </div>
        ) : (
          projects.map((project) => (
            <div
              key={project._id}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {project.name}
                  </h3>

                  {project.shortDescription && (
                    <p className="mt-2 text-slate-600 dark:text-slate-400">
                      {project.shortDescription}
                    </p>
                  )}

                  {project.slug && (
                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                      Slug: {project.slug}
                    </p>
                  )}

                  {project.coverImage && (
                    <img
                      src={project.coverImage}
                      alt={project.name}
                      className="mt-4 h-28 w-full max-w-sm rounded-2xl object-cover border border-slate-200 dark:border-slate-700"
                    />
                  )}
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => startEditProject(project)}
                    className="rounded-xl bg-amber-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-amber-600"
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDeleteProject(project._id)}
                    className="rounded-xl bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ManageProjectSection;