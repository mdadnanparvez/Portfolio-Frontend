const CertificateSection = ({
  labelClass,
  inputClass,
  certificateForm,
  setCertificateForm,
  addCertificate,
  portfolioData,
  removeCertificate,
  startEditCertificate,
  editingCertificateIndex,
  handleSavePortfolio,
  handleCertificateImageUpload,
  uploadingCertificateImage,
}) => {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Certificates
        </h2>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Add certificate name, issuer, image and credential link.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className={labelClass}>Certificate Name</label>
          <input
            type="text"
            value={certificateForm.name}
            onChange={(e) =>
              setCertificateForm((prev) => ({
                ...prev,
                name: e.target.value,
              }))
            }
            placeholder="Certificate name"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>Issuer</label>
          <input
            type="text"
            value={certificateForm.issuer}
            onChange={(e) =>
              setCertificateForm((prev) => ({
                ...prev,
                issuer: e.target.value,
              }))
            }
            placeholder="Issuer"
            className={inputClass}
          />
        </div>

        <div className="md:col-span-2">
          <label className={labelClass}>Credential Link</label>
          <input
            type="text"
            value={certificateForm.credentialLink}
            onChange={(e) =>
              setCertificateForm((prev) => ({
                ...prev,
                credentialLink: e.target.value,
              }))
            }
            placeholder="Credential link"
            className={inputClass}
          />
        </div>

        <div className="md:col-span-2">
          <label className={labelClass}>Certificate Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleCertificateImageUpload}
            className={inputClass}
          />

          {uploadingCertificateImage && (
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Uploading certificate image...
            </p>
          )}

          {certificateForm.image && (
            <img
              src={certificateForm.image}
              alt="certificate"
              className="mt-3 h-40 w-full max-w-md rounded-2xl object-cover border border-slate-200 dark:border-slate-700"
            />
          )}
        </div>
      </div>

      <button
        type="button"
        onClick={addCertificate}
        className="mt-5 rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-900 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
      >
        {editingCertificateIndex !== null ? "Update Certificate" : "Add Certificate"}
      </button>

      <div className="mt-8 space-y-4">
        {(portfolioData?.certificates || []).length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400">
            No certificates added yet.
          </div>
        ) : (
          portfolioData.certificates.map((certificate, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex-1">
                  {certificate.image && (
                    <img
                      src={certificate.image}
                      alt={certificate.name}
                      className="mb-4 h-40 w-full max-w-sm rounded-2xl object-cover border border-slate-200 dark:border-slate-700"
                    />
                  )}

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {certificate.name}
                  </h3>

                  {certificate.issuer && (
                    <p className="mt-2 text-slate-600 dark:text-slate-400">
                      {certificate.issuer}
                    </p>
                  )}

                  {certificate.credentialLink && (
                    <a
                      href={certificate.credentialLink}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-block text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
                    >
                      View Credential
                    </a>
                  )}
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => startEditCertificate(index)}
                    className="rounded-xl bg-amber-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-amber-600"
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    onClick={() => removeCertificate(index)}
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

      <button
        type="button"
        onClick={handleSavePortfolio}
        className="mt-6 rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-900 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
      >
        Save Certificates
      </button>
    </div>
  );
};

export default CertificateSection;