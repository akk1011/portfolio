import React from 'react';
import { Github, Linkedin, BarChart2, Sun, Moon } from 'lucide-react';

export function Navigation({ darkMode, setDarkMode, personalInfo }) {
  return (
    <nav className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm fixed w-full z-10`}>
      <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
        <span className="font-bold text-xl">{personalInfo.name}</span>
        <div className="flex items-center space-x-6">
          <div className="flex space-x-4">
            <a 
              href={personalInfo.github}
              className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </a>
            <a 
              href={personalInfo.linkedin}
              className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href={personalInfo.tableau}
              className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BarChart2 size={20} />
            </a>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;