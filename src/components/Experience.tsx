import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Full-Stack Web Developer — Laravel/PHP',
    company: 'United Vision Software Solution',
    location: 'Lahore',
    period: 'Jan 2024 – Feb 2026',
    highlights: [
      'Built production Laravel apps with CRUD, RBAC, real-time notifications',
      'RESTful APIs with Sanctum & Passport authentication',
      'MySQL optimization, Figma to Bootstrap 5 UI conversion',
      'Agile/Scrum, Git workflows, SQL reporting dashboards',
    ],
  },
  {
    title: 'UI/UX Developer / Front-End Contributor',
    company: 'UVSchools Management System',
    location: 'Remote',
    period: '2023 – 2025',
    highlights: [
      'Figma to React/Blade component conversion',
      'API integration, accessibility improvements',
      'Cross-browser compatibility optimization',
    ],
  },
  {
    title: 'Software Configuration Specialist',
    company: 'Salva Feed Mills Pvt. Ltd.',
    location: 'Okara',
    period: '2023 – 2024',
    highlights: [
      'Industrial software calibration & automation',
      'SOP creation and staff training',
      'System documentation and process improvement',
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-20 md:py-32 px-6 bg-dark-800/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">
            Work <span>Experience</span>
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-green via-neon-green/50 to-transparent md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative mb-12 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12 md:ml-0' : 'md:pl-12 md:ml-auto'
                }`}
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
                  className={`absolute w-4 h-4 bg-neon-green rounded-full border-4 border-dark-900 top-6 ${
                    index % 2 === 0
                      ? 'left-0 md:left-auto md:-right-2'
                      : 'left-0 md:left-auto md:-left-2'
                  }`}
                  style={{
                    boxShadow: '0 0 20px rgba(0, 255, 136, 0.5)',
                  }}
                />

                <div className="glass-card rounded-2xl p-6 ml-6 md:ml-0">
                  <div className="flex items-start gap-3 mb-3">
                    <Briefcase className="w-5 h-5 text-neon-green flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {exp.title}
                      </h3>
                      <p className="text-neon-green font-medium">{exp.company}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4 ml-8">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 ml-8">
                    {exp.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="text-gray-300 text-sm flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 bg-neon-green rounded-full mt-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
