import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/layout/Navbar";

const ProjectDetails = () => {
  const { slug } = useParams();

  const [project, setProject] = useState(null);
  const [relatedProjects, setRelatedProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProject = async () => {
      try {
        const projectRes = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/projects/slug/${slug}`
        );

        const currentProject = projectRes?.data?.data || null;
        setProject(currentProject);

        const allProjectsRes = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/projects`
        );

        const filtered = (allProjectsRes?.data?.data || [])
          .filter((item) => item.slug !== slug)
          .slice(0, 3);

        setRelatedProjects(filtered);
      } catch (error) {
        console.error("Project details load error:", error);
        setProject(null);
      } finally {
        setLoading(false);
      }
    };

    loadProject();
  }, [slug]);

  const galleryImages = useMemo(() => {
    if (!project?.images || !Array.isArray(project.images)) return [];

    return project.images
      .map((item) => {
        if (typeof item === "string") return item;
        if (item && typeof item === "object") {
          return item.url || item.image || item.secure_url || "";
        }
        return "";
      })
      .filter(Boolean);
  }, [project]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
        <Navbar />
        <main className="mx-auto max-w-7xl px-6 pb-16 pt-32">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <p className="text-slate-600 dark:text-slate-400">
              Loading project...
            </p>
          </div>
        </main>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
        <Navbar />
        <main className="mx-auto max-w-7xl px-6 pb-16 pt-32">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Project not found
            </h1>
            <p className="mt-3 text-slate-600 dark:text-slate-400">
              The project you are looking for does not exist.
            </p>
            <Link
              to="/"
              className="mt-6 inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white dark:bg-white dark:text-slate-950"
            >
              Back to Home
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 pb-16 pt-32">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <section className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-400">
              Project Details
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
              {project.name || ""}
            </h1>

            {project.type && (
              <p className="mt-4 text-lg font-medium text-slate-600 dark:text-slate-300">
                {project.type}
              </p>
            )}

            {project.coverImage ? (
              <img
                src={project.coverImage}
                alt={project.name}
                className="mt-8 h-[360px] w-full rounded-[28px] object-cover"
              />
            ) : (
              <div className="mt-8 h-[360px] w-full rounded-[28px] bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900" />
            )}

            {project.shortDescription && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Overview
                </h2>
                <p className="mt-3 text-base leading-8 text-slate-600 dark:text-slate-400">
                  {project.shortDescription}
                </p>
              </div>
            )}

            {project.fullDescription && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Full Description
                </h2>
                <p className="mt-3 whitespace-pre-line text-base leading-8 text-slate-600 dark:text-slate-400">
                  {project.fullDescription}
                </p>
              </div>
            )}

            {galleryImages.length > 0 && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Project Gallery
                </h2>

                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  {galleryImages.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${project.name}-${index + 1}`}
                      className="h-64 w-full rounded-3xl object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
          </section>

          <aside className="space-y-8">
            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Tools Used
              </h2>

              {project.tools?.length > 0 ? (
                <div className="mt-5 flex flex-wrap gap-3">
                  {project.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="mt-4 text-slate-600 dark:text-slate-400">
                  No tools added yet.
                </p>
              )}
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Links
              </h2>

              <div className="mt-5 flex flex-col gap-4">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl bg-slate-950 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-900 dark:bg-white dark:text-slate-950"
                  >
                    Live Preview
                  </a>
                )}

                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-slate-300 px-5 py-3 text-center text-sm font-semibold text-slate-800 transition hover:border-slate-900 dark:border-slate-700 dark:text-white"
                  >
                    GitHub Repository
                  </a>
                )}

                {!project.liveLink && !project.githubLink && (
                  <p className="text-slate-600 dark:text-slate-400">
                    No links added yet.
                  </p>
                )}
              </div>
            </div>

            {relatedProjects.length > 0 && (
              <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  More Projects
                </h2>

                <div className="mt-5 space-y-4">
                  {relatedProjects.map((item) => (
                    <Link
                      key={item._id}
                      to={`/project/${item.slug}`}
                      className="block rounded-2xl border border-slate-200 p-4 transition hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
                    >
                      <h3 className="font-semibold text-slate-900 dark:text-white">
                        {item.name}
                      </h3>
                      {item.shortDescription && (
                        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                          {item.shortDescription}
                        </p>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetails;