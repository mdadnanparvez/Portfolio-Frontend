const AddProjectSection = ({
  labelClass,
  inputClass,
  projectForm,
  handleProjectChange,
  handleCreateProject,
  handleProjectCoverUpload,
  handleProjectImagesUpload,
  removeProjectImage,
  uploadingProjectCover,
  uploadingProjectImages,
  loading,
  editingProjectId,
  cancelEditProject,
}) => {
  return (
    <form onSubmit={handleCreateProject}>
      <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            {editingProjectId ? "Edit Project" : "Add Project"}
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Add or update a project with cover image, gallery and links.
          </p>
        </div>

        {editingProjectId && (
          <button
            type="button"
            onClick={cancelEditProject}
            className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100 dark:border-slate-700 dark:text-white dark:hover:bg-slate-800"
          >
            Cancel Edit
          </button>
        )}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className={labelClass}>Project Name</label>
          <input
            type="text"
            name="name"
            value={projectForm.name}
            onChange={handleProjectChange}
            placeholder="Project name"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>Slug</label>
          <input
            type="text"
            name="slug"
            value={projectForm.slug}
            onChange={handleProjectChange}
            placeholder="Optional slug"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>Type</label>
          <input
            type="text"
            name="type"
            value={projectForm.type}
            onChange={handleProjectChange}
            placeholder="Web App"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>Tools</label>
          <input
            type="text"
            name="tools"
            value={projectForm.tools}
            onChange={handleProjectChange}
            placeholder="React, Node, MongoDB"
            className={inputClass}
          />
        </div>

        <div className="md:col-span-2">
          <label className={labelClass}>Short Description</label>
          <textarea
            rows="3"
            name="shortDescription"
            value={projectForm.shortDescription}
            onChange={handleProjectChange}
            placeholder="Short description"
            className={inputClass}
          />
        </div>

        <div className="md:col-span-2">
          <label className={labelClass}>Full Description</label>
          <textarea
            rows="5"
            name="fullDescription"
            value={projectForm.fullDescription}
            onChange={handleProjectChange}
            placeholder="Full description"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>Live Link</label>
          <input
            type="text"
            name="liveLink"
            value={projectForm.liveLink}
            onChange={handleProjectChange}
            placeholder="Live link"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>GitHub Link</label>
          <input
            type="text"
            name="githubLink"
            value={projectForm.githubLink}
            onChange={handleProjectChange}
            placeholder="GitHub link"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>Cover Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleProjectCoverUpload}
            className={inputClass}
          />

          {uploadingProjectCover && (
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Uploading cover image...
            </p>
          )}

          {projectForm.coverImage && (
            <img
              src={projectForm.coverImage}
              alt="cover"
              className="mt-3 h-28 w-full rounded-2xl object-cover border border-slate-200 dark:border-slate-700"
            />
          )}
        </div>

        <div>
          <label className={labelClass}>Gallery Images</label>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleProjectImagesUpload}
            className={inputClass}
          />

          {uploadingProjectImages && (
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Uploading gallery images...
            </p>
          )}

          {projectForm.images.length > 0 && (
            <div className="mt-3 grid grid-cols-2 gap-3">
              {projectForm.images.map((img, index) => (
                <div key={index} className="relative">
                  <img
                    src={img}
                    alt={`gallery-${index}`}
                    className="h-24 w-full rounded-2xl object-cover border border-slate-200 dark:border-slate-700"
                  />
                  <button
                    type="button"
                    onClick={() => removeProjectImage(index)}
                    className="absolute right-2 top-2 rounded-lg bg-red-500 px-2 py-1 text-xs font-medium text-white"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="md:col-span-2 flex items-center gap-3">
          <input
            id="featured"
            type="checkbox"
            name="featured"
            checked={projectForm.featured}
            onChange={handleProjectChange}
            className="h-4 w-4"
          />
          <label
            htmlFor="featured"
            className="text-sm font-medium text-slate-700 dark:text-slate-300"
          >
            Featured Project
          </label>
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-6 rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-900 disabled:opacity-70 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
      >
        {loading
          ? editingProjectId
            ? "Updating..."
            : "Creating..."
          : editingProjectId
          ? "Update Project"
          : "Create Project"}
      </button>
    </form>
  );
};

export default AddProjectSection;