import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, Code2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-dark-600">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2 text-lg font-bold"
            whileHover={{ scale: 1.05 }}
          >
            <Code2 className="w-6 h-6 text-neon-green" />
            <span className="text-white">
              Touseeq<span className="text-neon-green">.</span>
            </span>
          </motion.a>

          {/* Copyright */}
          <p className="text-gray-400 text-sm flex items-center gap-1">
            <span>&copy; {currentYear} Touseeq Haider</span>
            <span className="text-gray-600">—</span>
            <span>Laravel Full-Stack Developer</span>
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <motion.a
              href="https://github.com/Touseeq-Haider"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-neon-green transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/touseeq-haider"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-neon-green transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="mailto:haiderwaleed59@gmail.com"
              className="p-2 text-gray-400 hover:text-neon-green transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </div>
        </div>

        {/* Bottom Line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-6 pt-6 border-t border-dark-700"
        >
          <p className="text-gray-500 text-xs flex items-center justify-center gap-1">
            Join with <Heart className="w-3 h-3 text-neon-green" /> Touseeq Devs 
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
