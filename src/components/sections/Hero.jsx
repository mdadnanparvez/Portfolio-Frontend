import { useState } from "react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaEye,
  FaArrowRight,
  FaTimes,
} from "react-icons/fa";

const Hero = ({ portfolio }) => {
  const [showResumeModal, setShowResumeModal] = useState(false);

  const socialLinks = [
    {
      key: "facebook",
      href: portfolio?.socialLinks?.facebook,
      icon: <FaFacebookF size={15} />,
    },
    {
      key: "instagram",
      href: portfolio?.socialLinks?.instagram,
      icon: <FaInstagram size={15} />,
    },
    {
      key: "linkedin",
      href: portfolio?.socialLinks?.linkedin,
      icon: <FaLinkedinIn size={15} />,
    },
    {
      key: "github",
      href: portfolio?.socialLinks?.github,
      icon: <FaGithub size={15} />,
    },
  ].filter((item) => item.href);

  return (
    <>
      <section
        id="home"
        className="relative overflow-hidden px-4 pb-12 pt-4 sm:px-6 lg:px-8"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-400/10" />
          <div className="absolute left-0 top-20 h-[200px] w-[200px] rounded-full bg-cyan-400/10 blur-3xl dark:bg-cyan-300/10" />
          <div className="absolute bottom-0 right-0 h-[200px] w-[200px] rounded-full bg-slate-300/20 blur-3xl dark:bg-slate-700/20" />
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-[34px] border border-white/20 bg-white/70 shadow-[0_20px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/70">
            <div className="relative mx-4 mt-4 overflow-visible rounded-[28px] md:mx-5 md:mt-5">
              {portfolio?.bannerImage ? (
                <img
                  src={portfolio.bannerImage}
                  alt="banner"
                  className="h-[165px] w-full rounded-[28px] object-cover sm:h-[185px] md:h-[200px]"
                />
              ) : (
                <div className="h-[165px] w-full rounded-[28px] bg-gradient-to-br from-slate-950 via-slate-900 to-blue-900 sm:h-[185px] md:h-[200px]" />
              )}

              <div className="absolute inset-0 rounded-[28px] bg-gradient-to-r from-slate-950/65 via-slate-900/15 to-transparent" />

              {socialLinks.length > 0 && (
                <div className="absolute right-4 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-3">
                  {socialLinks.map((item) => (
                    <a
                      key={item.key}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-white shadow-lg backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white hover:text-slate-950"
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              )}

              <div className="absolute left-5 top-full z-20 -translate-y-1/2 md:left-7">
                <div className="relative">
                  <div className="absolute inset-0 rounded-[28px] bg-blue-500/20 blur-xl" />
                  {portfolio?.profileImage ? (
                    <img
                      src={portfolio.profileImage}
                      alt={portfolio?.name || "profile"}
                      className="relative h-24 w-24 rounded-[24px] border-4 border-white object-cover shadow-2xl dark:border-slate-900 sm:h-28 sm:w-28 md:h-32 md:w-32"
                    />
                  ) : (
                    <div className="relative flex h-24 w-24 items-center justify-center rounded-[24px] border-4 border-white bg-slate-200 text-3xl font-bold text-slate-600 shadow-2xl dark:border-slate-900 dark:bg-slate-800 dark:text-slate-300 sm:h-28 sm:w-28 md:h-32 md:w-32">
                      {portfolio?.name?.charAt(0) || "A"}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="px-5 pb-8 pt-16 md:px-8 md:pb-9 md:pt-18">
              <div className="max-w-4xl">
                <div className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400">
                  Portfolio
                </div>

                <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
                  {portfolio?.name || "Your Name"}
                </h1>

                {portfolio?.title && (
                  <p className="mt-2 text-base font-medium text-slate-600 dark:text-slate-300 sm:text-lg">
                    {portfolio.title}
                  </p>
                )}

                {portfolio?.shortBio && (
                  <p className="mt-5 max-w-4xl text-sm leading-8 text-slate-600 dark:text-slate-400 sm:text-base">
                    {portfolio.shortBio}
                  </p>
                )}

                <div className="mt-7 flex flex-wrap items-center gap-3">
                  {portfolio?.resumeLink && (
                    <button
                      type="button"
                      onClick={() => setShowResumeModal(true)}
                      className="inline-flex items-center gap-2 rounded-full bg-slate-600 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-900 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
                    >
                      <FaEye size={14} />
                      View Resume
                    </button>
                  )}

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-slate-950 dark:border-slate-700 dark:bg-slate-800/80 dark:text-white dark:hover:border-white"
                  >
                    Contact Me
                    <FaArrowRight size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showResumeModal && portfolio?.resumeLink && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-md">
          <button
            type="button"
            onClick={() => setShowResumeModal(false)}
            className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-950 shadow-lg transition hover:scale-105"
          >
            <FaTimes size={18} />
          </button>

          <div className="max-h-[92vh] w-full max-w-5xl overflow-auto rounded-[28px] border border-white/10 bg-white p-3 shadow-2xl dark:bg-slate-900">
            <img
              src={portfolio.resumeLink}
              alt="resume"
              className="w-full rounded-[20px] object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;