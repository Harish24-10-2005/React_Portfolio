import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const ThemeSwitcher = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      className="theme-switcher"
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <FontAwesomeIcon 
        icon={isDark ? faSun : faMoon} 
        className={`theme-icon ${isDark ? 'sun' : 'moon'}`}
      />
    </motion.button>
  );
};

export default ThemeSwitcher;
