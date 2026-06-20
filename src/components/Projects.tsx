import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';

const projects = [
  {
    title: 'School Management System',
    description:
      'Multi-role school management app with student, class, attendance, fee modules, RBAC, and PDF/Excel export capabilities.',
    tech: ['Laravel 11', 'PHP', 'MySQL', 'Blade', 'Bootstrap 5'],
    github: 'https://github.com/Touseeq-Haider/schoolms',
    featured: true,
  },
  {
    title: 'Lawyer Marketing Website',
    description:
      'Professional marketing site with services showcase, contact form, and lightweight admin CMS for content management.',
    tech: ['Laravel', 'Blade', 'Bootstrap 5'],
    github: 'https://github.com/Touseeq-Haider/lawyer-site',
    featured: false,
  },
  {
    title: 'Chirper Chat App',
    description:
      'Real-time micro-posting and chat app with authentication, full CRUD operations, and mobile-friendly UI.',
    tech: ['Laravel', 'JavaScript', 'Blade'],
    github: 'https://github.com/Touseeq-Haider/chirper-chat',
    featured: false,
  },
  {
    title: 'UVSchools (Team Collaboration)',
    description:
      'Contributed core modules and UI improvements to an enterprise school management platform with multi-tenant architecture.',
    tech: ['Laravel', 'Git', 'Code Reviews'],
    github: 'https://github.com/united-vision/UVSchools_Laravel_M-T',
    featured: false,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">
            Featured <span>Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 group relative overflow-hidden"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-neon-green/0 via-neon-green/5 to-neon-green/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-neon-green/10 rounded-lg">
                        <Folder className="w-5 h-5 text-neon-green" />
                      </div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-neon-green transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    {project.featured && (
                      <span className="px-2 py-1 bg-neon-green/20 text-neon-green text-xs font-medium rounded-md">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-dark-700 text-gray-300 text-xs rounded-md border border-dark-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-dark-700 hover:bg-neon-green/20 text-gray-300 hover:text-neon-green rounded-lg text-sm transition-all"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-neon-green text-sm transition-colors"
                      whileHover={{ x: 3 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Projects */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mt-10"
          >
            <motion.a
              href="https://github.com/Touseeq-Haider"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
              View All Projects on GitHub
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
