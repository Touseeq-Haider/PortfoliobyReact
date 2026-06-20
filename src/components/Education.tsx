import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const education = [
  {
    degree: 'B.Sc. Information Technology',
    school: 'University of the Punjab',
    location: 'Pakistan',
    period: '2020 – 2024',
    description: 'Focused on software development, web technologies, and database management.',
  },
  {
    degree: 'FSc Pre-Engineering',
    school: 'Divisional Public School (DPS)',
    location: 'Okara',
    period: '2018 – 2020',
    description: 'Mathematics, Physics, and Chemistry with strong foundation in analytical thinking.',
  },
  {
    degree: 'Matriculation',
    school: 'Scholar Public High School',
    location: 'Okara',
    period: '2016 – 2018',
    description: 'Completed secondary education with science focus.',
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="py-20 md:py-32 px-6 bg-dark-800/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">
            <span>Education</span>
          </h2>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="glass-card rounded-2xl p-6 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-neon-green/10 rounded-xl group-hover:bg-neon-green/20 transition-colors">
                    <GraduationCap className="w-6 h-6 text-neon-green" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-neon-green font-medium mb-2">{edu.school}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm">{edu.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
