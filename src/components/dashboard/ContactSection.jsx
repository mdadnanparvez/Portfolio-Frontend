const ContactSection = ({
  handleSavePortfolio,
  labelClass,
  inputClass,
  portfolioData,
  handleNestedChange,
  loading,
  message,
}) => {
  return (
    <form onSubmit={handleSavePortfolio}>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Contact
        </h2>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Contact information and social links.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className={labelClass}>Email</label>
          <input
            type="email"
            value={portfolioData?.contactInfo?.email || ""}
            onChange={(e) =>
              handleNestedChange("contactInfo", "email", e.target.value)
            }
            placeholder="Email"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>Phone</label>
          <input
            type="text"
            value={portfolioData?.contactInfo?.phone || ""}
            onChange={(e) =>
              handleNestedChange("contactInfo", "phone", e.target.value)
            }
            placeholder="Phone"
            className={inputClass}
          />
        </div>

        <div className="md:col-span-2">
          <label className={labelClass}>Address</label>
          <input
            type="text"
            value={portfolioData?.contactInfo?.address || ""}
            onChange={(e) =>
              handleNestedChange("contactInfo", "address", e.target.value)
            }
            placeholder="Address"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>Facebook</label>
          <input
            type="text"
            value={portfolioData?.socialLinks?.facebook || ""}
            onChange={(e) =>
              handleNestedChange("socialLinks", "facebook", e.target.value)
            }
            placeholder="Facebook link"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>Instagram</label>
          <input
            type="text"
            value={portfolioData?.socialLinks?.instagram || ""}
            onChange={(e) =>
              handleNestedChange("socialLinks", "instagram", e.target.value)
            }
            placeholder="Instagram link"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>LinkedIn</label>
          <input
            type="text"
            value={portfolioData?.socialLinks?.linkedin || ""}
            onChange={(e) =>
              handleNestedChange("socialLinks", "linkedin", e.target.value)
            }
            placeholder="LinkedIn link"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>GitHub</label>
          <input
            type="text"
            value={portfolioData?.socialLinks?.github || ""}
            onChange={(e) =>
              handleNestedChange("socialLinks", "github", e.target.value)
            }
            placeholder="GitHub link"
            className={inputClass}
          />
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
        {loading ? "Saving..." : "Save Contact"}
      </button>
    </form>
  );
};

export default ContactSection;