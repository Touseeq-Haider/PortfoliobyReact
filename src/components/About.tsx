import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Briefcase, FolderKanban, Cpu, Building2 } from 'lucide-react';

const stats = [
  { label: 'Years Experience', value: 2, icon: Briefcase, suffix: '+' },
  { label: 'Projects Delivered', value: 4, icon: FolderKanban, suffix: '+' },
  { label: 'Technologies Mastered', value: 10, icon: Cpu, suffix: '+' },
  { label: 'Roles Held', value: 3, icon: Building2, suffix: '' },
];

function CountUp({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 md:py-32 px-6 bg-dark-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">
            About <span>Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="glass-card rounded-2xl p-8">
                <p className="text-gray-300 leading-relaxed text-lg">
                  Results-driven{' '}
                  <span className="text-neon-green font-medium">
                    Laravel Full-Stack Developer
                  </span>{' '}
                  with 2+ years of experience building production web applications,
                  RESTful APIs, and database-driven systems using{' '}
                  <span className="text-white font-medium">PHP 8.x</span>,{' '}
                  <span className="text-white font-medium">Laravel 9-12</span>,{' '}
                  <span className="text-white font-medium">MySQL</span>,{' '}
                  <span className="text-white font-medium">Vue.js</span>, and{' '}
                  <span className="text-white font-medium">React</span>.
                </p>
                <p className="text-gray-400 mt-4 leading-relaxed">
                  Passionate about writing clean, maintainable code and building
                  scalable solutions. Experienced in agile environments with a
                  strong focus on code quality, testing, and continuous delivery.
                </p>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="glass-card rounded-xl p-6 text-center group"
                >
                  <stat.icon className="w-8 h-8 text-neon-green mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-4xl font-bold text-white mb-1">
                    <CountUp end={stat.value} />
                    {stat.suffix}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
