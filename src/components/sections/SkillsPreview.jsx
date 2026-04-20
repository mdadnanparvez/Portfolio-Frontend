import { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";

const SkillsPreview = ({ portfolio }) => {
  const [openImage, setOpenImage] = useState(null);

  const hasSkills = portfolio?.skills?.length > 0;
  const hasCertificates = portfolio?.certificates?.length > 0;

  useEffect(() => {
    document.body.style.overflow = openImage ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [openImage]);

  if (!hasSkills && !hasCertificates) return null;

  const SectionTitle = ({ children }) => (
    <div className="my-8 flex justify-center">
      <div className="relative inline-flex items-center rounded-full border border-slate-300/70 bg-white/60 px-4 py-1.5 text-[16px] font-semibold uppercase tracking-[0.2em] text-slate-600 shadow-md backdrop-blur-xl dark:border-white/10 dark:bg-white/10 dark:text-slate-300">
        <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 via-transparent to-cyan-400/20 blur-md" />
        <span className="relative z-10">{children}</span>
      </div>
    </div>
  );

  return (
    <>
      <section className="relative px-6 py-12 overflow-hidden">

        {/* BACKGROUND */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 left-10 h-72 w-72 rounded-full bg-blue-400/20 blur-[120px]" />
          <div className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-[140px]" />
        </div>

        {/* OUTER CONTAINER */}
        <div className="relative mx-auto max-w-7xl rounded-[36px] border border-slate-300/60 bg-white/40 p-6 shadow-[0_30px_90px_rgba(15,23,42,0.12)] backdrop-blur-3xl dark:border-slate-800/50 dark:bg-slate-950/30">

          {/* ================= SKILLS BOX ================= */}
          {hasSkills && (
            <div className="rounded-3xl border border-slate-200/70 bg-white/50 p-6 backdrop-blur-xl dark:border-slate-800/50 dark:bg-slate-900/40">

              <SectionTitle>Skills</SectionTitle>

              <div className="grid gap-5 md:grid-cols-2">
                {portfolio.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="rounded-3xl border border-slate-300/70 bg-white/60 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(59,130,246,0.18)] dark:border-slate-700/50 dark:bg-slate-900/40"
                  >
                    <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">
                      {skill.category}
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {skill.items?.map((item, i) => (
                        <span
                          key={i}
                          className="rounded-full border border-slate-300/70 bg-white/70 px-3 py-2 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* HR DIVIDER */}
          {hasSkills && hasCertificates && (
            <hr className="my-10 border-slate-300/40 dark:border-slate-700/40" />
          )}

          {/* ================= CERTIFICATES BOX ================= */}
          {hasCertificates && (
            <div className="rounded-3xl border border-slate-200/70 bg-white/50 p-6 backdrop-blur-xl dark:border-slate-800/50 dark:bg-slate-900/40">

              <SectionTitle>Certificates</SectionTitle>

              <div className="grid gap-4 md:grid-cols-2">
                {portfolio.certificates.map((certificate, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-2xl border border-slate-300/70 bg-white/60 backdrop-blur-xl transition hover:-translate-y-1 dark:border-slate-700/50 dark:bg-slate-900/40"
                  >
                    {certificate.image ? (
                      <img
                        src={certificate.image}
                        alt={certificate.name}
                        onClick={() => setOpenImage(certificate.image)}
                        className="h-28 w-full cursor-pointer object-cover transition hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="flex h-28 w-full items-center justify-center text-slate-400">
                        Certificate Image
                      </div>
                    )}

                    <div className="p-3">
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                        {certificate.name}
                      </h4>

                      {certificate.issuer && (
                        <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                          {certificate.issuer}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* FULLSCREEN IMAGE */}
      {openImage && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black">
          <button
            onClick={() => setOpenImage(null)}
            className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-lg transition hover:scale-105"
          >
            <FaTimes size={18} />
          </button>

          <img
            src={openImage}
            alt="certificate"
            className="max-h-screen max-w-screen object-contain"
          />
        </div>
      )}
    </>
  );
};

export default SkillsPreview;