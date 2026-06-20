import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Server,
  Globe,
  Database,
  GitBranch,
  Plug,
} from 'lucide-react';

const skillGroups = [
  {
    title: 'Backend',
    icon: Server,
    color: 'from-emerald-500/20 to-emerald-600/20',
    skills: [
      'PHP 8.x',
      'Laravel 9-12',
      'REST APIs',
      'Eloquent ORM',
      'Sanctum',
      'Passport',
      'RBAC',
      'Queues',
      'Middleware',
    ],
  },
  {
    title: 'Frontend',
    icon: Globe,
    color: 'from-blue-500/20 to-blue-600/20',
    skills: [
      'Vue.js',
      'React',
      'Blade',
      'Bootstrap 5',
      'JavaScript ES6+',
      'HTML5',
      'CSS3',
      'Tailwind',
    ],
  },
  {
    title: 'Database',
    icon: Database,
    color: 'from-amber-500/20 to-amber-600/20',
    skills: [
      'MySQL',
      'Query Optimization',
      'Migrations',
      'Seeders',
      'Stored Procedures',
    ],
  },
  {
    title: 'DevOps & Tools',
    icon: GitBranch,
    color: 'from-purple-500/20 to-purple-600/20',
    skills: [
      'Git',
      'GitHub',
      'CI/CD',
      'Postman',
      'Figma',
      'Linux',
      'Composer',
      'Vite',
    ],
  },
  {
    title: 'Integrations',
    icon: Plug,
    color: 'from-rose-500/20 to-rose-600/20',
    skills: [
      'Payment APIs',
      'SMS APIs',
      'Webhooks',
      'SaaS',
      'Multi-Tenant',
      'Third-Party APIs',
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">
            Technical <span>Skills</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillGroups.map((group, groupIndex) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                className={`glass-card rounded-2xl p-6 bg-gradient-to-br ${group.color}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-dark-700 rounded-lg">
                    <group.icon className="w-5 h-5 text-neon-green" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {group.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3, delay: groupIndex * 0.1 + skillIndex * 0.05 }}
                      className="skill-badge"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
