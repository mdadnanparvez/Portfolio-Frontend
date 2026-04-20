import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const ContactPreview = ({ portfolio }) => {
  const hasContact =
    portfolio?.contactInfo?.email ||
    portfolio?.contactInfo?.phone ||
    portfolio?.contactInfo?.address ||
    portfolio?.socialLinks?.facebook ||
    portfolio?.socialLinks?.instagram ||
    portfolio?.socialLinks?.linkedin ||
    portfolio?.socialLinks?.github;

  if (!hasContact) return null;

  const socialLinks = [
    {
      key: "facebook",
      href: portfolio?.socialLinks?.facebook,
      icon: <FaFacebookF size={14} />,
      label: "Facebook",
    },
    {
      key: "instagram",
      href: portfolio?.socialLinks?.instagram,
      icon: <FaInstagram size={14} />,
      label: "Instagram",
    },
    {
      key: "linkedin",
      href: portfolio?.socialLinks?.linkedin,
      icon: <FaLinkedinIn size={14} />,
      label: "LinkedIn",
    },
    {
      key: "github",
      href: portfolio?.socialLinks?.github,
      icon: <FaGithub size={14} />,
      label: "GitHub",
    },
  ].filter((item) => item.href);

  const infoItems = [
    portfolio?.contactInfo?.email && {
      key: "email",
      label: "Email",
      value: portfolio.contactInfo.email,
      icon: <FaEnvelope size={14} />,
      href: `mailto:${portfolio.contactInfo.email}`,
    },
    portfolio?.contactInfo?.phone && {
      key: "phone",
      label: "Phone",
      value: portfolio.contactInfo.phone,
      icon: <FaPhoneAlt size={13} />,
    },
    portfolio?.contactInfo?.address && {
      key: "address",
      label: "Location",
      value: portfolio.contactInfo.address,
      icon: <FaMapMarkerAlt size={13} />,
    },
  ].filter(Boolean);

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-4 py-10 sm:px-6 sm:py-12 lg:px-8"
    >
      {/* OUTER GLOW BACKDROP */}
      <div className="relative mx-auto max-w-6xl rounded-[36px] border border-slate-300/70 bg-white/40 p-5 shadow-[0_30px_90px_rgba(15,23,42,0.12)] backdrop-blur-3xl dark:border-slate-800/40 dark:bg-slate-950/30">

        {/* SOFT BLUE SIDE GLOW */}
        <div className="pointer-events-none absolute inset-y-0 left-[-80px] w-[220px] bg-blue-500/20 blur-[120px]" />
        <div className="pointer-events-none absolute inset-y-0 right-[-80px] w-[220px] bg-cyan-400/20 blur-[120px]" />

        {/* TOP GLOW */}
        <div className="pointer-events-none absolute -top-20 left-1/2 h-40 w-96 -translate-x-1/2 bg-sky-400/10 blur-[120px]" />

        <div className="mx-auto max-w-5xl">

          {/* TITLE */}
          <div className="mb-6 flex justify-center">
            <div className="relative inline-flex items-center rounded-full border border-slate-300/70 bg-white/60 px-4 py-1.5 text-[17px] font-semibold uppercase tracking-[0.2em] text-slate-600 shadow-md backdrop-blur-xl dark:border-white/10 dark:bg-white/10 dark:text-slate-300">

              <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 via-transparent to-cyan-400/20 blur-md" />
              <span className="relative z-10">Contact</span>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">

            {/* LEFT BOX */}
            <div className="rounded-[28px] border border-slate-300/80 bg-white/40 p-4 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-2xl transition-all duration-300 hover:shadow-[0_25px_80px_rgba(59,130,246,0.15)] dark:border-white/10 dark:bg-white/5 sm:p-5">

              <div className="grid gap-3">
                {infoItems.map((item) =>
                  item.href ? (
                    <a
                      key={item.key}
                      href={item.href}
                      className="group flex items-start gap-4 rounded-2xl border border-slate-300/80 bg-white/50 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-300/40 hover:bg-white/30 hover:shadow-[0_10px_40px_rgba(59,130,246,0.25)] dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-900/90 text-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-blue-400/40 dark:bg-white dark:text-slate-900">
                        {item.icon}
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                          {item.label}
                        </p>
                        <p className="mt-1.5 break-all text-sm font-medium text-slate-800 transition-all duration-300 group-hover:text-blue-600 dark:text-slate-200 dark:group-hover:text-white">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div
                      className="flex items-start gap-4 rounded-2xl border border-slate-300/80 bg-white/50 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-300/40 hover:bg-white/30 hover:shadow-[0_10px_40px_rgba(59,130,246,0.25)] dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-900/90 text-white shadow-md transition-all duration-300 group-hover:scale-110 dark:bg-white dark:text-slate-900">
                        {item.icon}
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                          {item.label}
                        </p>
                        <p className="mt-1.5 text-sm font-medium text-slate-800 dark:text-slate-200">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* RIGHT BOX */}
            <div className="relative overflow-hidden rounded-[28px] border border-slate-300/80 bg-white/30 p-5 backdrop-blur-2xl shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-all duration-300 hover:shadow-[0_25px_90px_rgba(34,211,238,0.18)] dark:border-white/10 dark:bg-white/5">

              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-400/20 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 h-28 w-28 rounded-full bg-cyan-400/20 blur-3xl" />

              <div className="relative z-10">
                <div className="inline-flex items-center rounded-full border border-slate-300/70 bg-white/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500 backdrop-blur-xl dark:bg-white/10 dark:border-white/10">
                  Social
                </div>

                {socialLinks.length > 0 ? (
                  <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
                    {socialLinks.map((item) => (
                      <a
                        key={item.key}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center gap-3 rounded-2xl border border-slate-300/80 bg-white/40 px-4 py-3 text-slate-700 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-300/40 hover:bg-white/20 hover:shadow-[0_10px_30px_rgba(59,130,246,0.25)] dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
                      >
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-900/90 text-white transition-all duration-300 group-hover:scale-110 dark:bg-white dark:text-slate-900">
                          {item.icon}
                        </span>
                        <span className="text-sm font-medium">{item.label}</span>
                      </a>
                    ))}
                  </div>
                ) : (
                  <div className="mt-5 rounded-2xl border border-slate-300/80 bg-white/40 px-4 py-6 text-sm text-slate-500 backdrop-blur-xl dark:bg-white/5 dark:border-white/10">
                    No social links added yet.
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPreview;