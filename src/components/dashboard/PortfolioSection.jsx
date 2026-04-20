const PortfolioSection = ({
  handleSavePortfolio,
  labelClass,
  inputClass,
  portfolioData,
  handlePortfolioChange,
  loading,
  message,
  handleProfileUpload,
  handleBannerUpload,
  handleResumeUpload,
  uploadingProfile,
  uploadingBanner,
  uploadingResume,
}) => {
  return (
    <form onSubmit={handleSavePortfolio}>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Portfolio
        </h2>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Basic info, profile image, banner and resume image.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className={labelClass}>Name</label>
          <input
            type="text"
            name="name"
            value={portfolioData?.name || ""}
            onChange={handlePortfolioChange}
            placeholder="Your Name"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>Title</label>
          <input
            type="text"
            name="title"
            value={portfolioData?.title || ""}
            onChange={handlePortfolioChange}
            placeholder="MERN Developer"
            className={inputClass}
          />
        </div>

        <div className="md:col-span-2">
          <label className={labelClass}>Short Bio</label>
          <textarea
            rows="3"
            name="shortBio"
            value={portfolioData?.shortBio || ""}
            onChange={handlePortfolioChange}
            placeholder="Short introduction..."
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>Profile Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleProfileUpload}
            className={inputClass}
          />

          {uploadingProfile && (
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Uploading profile image...
            </p>
          )}

          {portfolioData?.profileImage && (
            <img
              src={portfolioData.profileImage}
              alt="profile"
              className="mt-3 h-24 w-24 rounded-2xl object-cover border border-slate-200 dark:border-slate-700"
            />
          )}
        </div>

        <div>
          <label className={labelClass}>Banner Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleBannerUpload}
            className={inputClass}
          />

          {uploadingBanner && (
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Uploading banner image...
            </p>
          )}

          {portfolioData?.bannerImage && (
            <img
              src={portfolioData.bannerImage}
              alt="banner"
              className="mt-3 h-24 w-full rounded-2xl object-cover border border-slate-200 dark:border-slate-700"
            />
          )}
        </div>

        <div className="md:col-span-2">
          <label className={labelClass}>Resume Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleResumeUpload}
            className={inputClass}
          />

          {uploadingResume && (
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Uploading resume image...
            </p>
          )}

          {portfolioData?.resumeLink && (
            <img
              src={portfolioData.resumeLink}
              alt="resume"
              className="mt-3 h-40 w-full max-w-md rounded-2xl object-cover border border-slate-200 dark:border-slate-700"
            />
          )}
        </div>
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
        {loading ? "Saving..." : "Save Portfolio"}
      </button>
    </form>
  );
};

export default PortfolioSection;