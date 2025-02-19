

// import React from 'react';
// import { Github, Linkedin, BarChart2, Sun, Moon, Download } from 'lucide-react';

// export function Navigation({ darkMode, setDarkMode, personalInfo }) {
//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <nav className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm fixed w-full z-10`}>
//       <div className="max-w-7xl mx-auto px-0 py-3 flex justify-between items-center">
//         <span className="font-bold text-2xl w-full text-left whitespace-nowrap">{personalInfo.name}</span>
//         <div className="flex items-center space-x-6">
//           {/* Section Navigation Buttons */}
//           <div className="flex space-x-4 text-base">
//             <button 
//               onClick={() => scrollToSection('home')}
//               className={`
//                 ${darkMode 
//                   ? 'text-gray-300 hover:text-white' 
//                   : 'text-gray-600 hover:text-gray-900'
//                 } text-sm
//               `}
//             >
//               Home
//             </button>
//             <button 
//               onClick={() => scrollToSection('experience')}
//               className={`
//                 ${darkMode 
//                   ? 'text-gray-300 hover:text-white' 
//                   : 'text-gray-600 hover:text-gray-900'
//                 } text-sm
//               `}
//             >
//               Experience
//             </button>

//             <button 
//               onClick={() => scrollToSection('projects')}
//               className={`
//                 ${darkMode 
//                   ? 'text-gray-300 hover:text-white' 
//                   : 'text-gray-600 hover:text-gray-900'
//                 } text-sm
//               `}
//             >
//               Projects
//             </button>

//             <button 
//               onClick={() => scrollToSection('skills')}
//               className={`
//                 ${darkMode 
//                   ? 'text-gray-300 hover:text-white' 
//                   : 'text-gray-600 hover:text-gray-900'
//                 } text-sm
//               `}
//             >
//               Skills
//             </button>

            
            
            
//             <button 
//               onClick={() => scrollToSection('education')}
//               className={`
//                 ${darkMode 
//                   ? 'text-gray-300 hover:text-white' 
//                   : 'text-gray-600 hover:text-gray-900'
//                 } text-sm
//               `}
//             >
//               Education
//             </button>

//             <button 
//               onClick={() => scrollToSection('contact')}
//               className={`
//                 ${darkMode 
//                   ? 'text-gray-300 hover:text-white' 
//                   : 'text-gray-600 hover:text-gray-900'
//                 } text-sm
//               `}
//             >
//               Contact
//             </button>
//           </div>

//           {/* Social and CV Links */}
//           <div className="flex items-center space-x-4">
//             <div className="flex items-center space-x-4">
//               <a 
//                 href={personalInfo.github}
//                 className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <Github size={20} />
//               </a>
//               <a 
//                 href={personalInfo.linkedin}
//                 className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <Linkedin size={20} />
//               </a>
//               <a 
//                 href={personalInfo.tableau}
//                 className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <BarChart2 size={20} />
//               </a>
//             </div>

//             {/* CV Download Button */}
//             <a 
//               href="https://raw.githubusercontent.com/akk1011/portfolio/main/src/data/KeerthiKrishnaAiyappanDS.pdf"
//               download
//               className={`
//                 flex items-center 
//                 ${darkMode 
//                   ? 'text-gray-300 hover:text-white bg-gray-700 hover:bg-gray-600' 
//                   : 'text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200'
//                 } 
//                 px-10 py-2 rounded-md text-base transition-colors
//               `}
//             >
//               <Download size={36} className="mr-2" />
//               Data Scientist Resume
//             </a>

//             <a 
//               href="https://raw.githubusercontent.com/akk1011/portfolio/main/src/data/KeerthiKrishnaAiyappanDA.pdf"
//               download
//               className={`
//                 flex items-center 
//                 ${darkMode 
//                   ? 'text-gray-300 hover:text-white bg-gray-700 hover:bg-gray-600' 
//                   : 'text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200'
//                 } 
//                 px-10 py-1 rounded-md text-base transition-colors
//               `}
//             >
//               <Download size={36} className="mr-2" />
//               Data Analyst Resume
//             </a>

//             {/* Dark Mode Toggle */}
//             <button
//               onClick={() => setDarkMode(!darkMode)}
//               className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
//             >
//               {darkMode ? <Sun size={20} /> : <Moon size={20} />}
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navigation;

import React, { useState } from 'react';
import { Github, Linkedin, BarChart2, Sun, Moon, Download, Menu, X } from 'lucide-react';

export function Navigation({ darkMode, setDarkMode, personalInfo }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navigationLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Education', id: 'education' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <nav className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm fixed w-full z-50`}>
      <div className="max-w-7xl mx-auto px-4 py-3">
        {/* Desktop Navigation */}
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg md:text-2xl whitespace-nowrap">
            {personalInfo.name}
          </span>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Section Navigation */}
            <div className="flex space-x-4 text-base">
              {navigationLinks.map((link) => (
                <button 
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`
                    ${darkMode 
                      ? 'text-gray-300 hover:text-white' 
                      : 'text-gray-600 hover:text-gray-900'
                    } text-sm
                  `}
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
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

            {/* Resume Download Buttons */}
            <div className="flex items-center space-x-2">
              <a 
                href="https://raw.githubusercontent.com/akk1011/portfolio/main/src/data/KeerthiKrishnaAiyappanDS.pdf"
                download
                className={`
                  flex items-center text-sm
                  ${darkMode 
                    ? 'text-gray-300 hover:text-white bg-gray-700 hover:bg-gray-600' 
                    : 'text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200'
                  } 
                  px-4 py-2 rounded-md transition-colors
                `}
              >
                <Download size={20} className="mr-2" />
                Resume
              </a>

              {/* <a 
                href="https://raw.githubusercontent.com/akk1011/portfolio/main/src/data/KeerthiKrishnaAiyappanDA.pdf"
                download
                className={`
                  flex items-center text-sm
                  ${darkMode 
                    ? 'text-gray-300 hover:text-white bg-gray-700 hover:bg-gray-600' 
                    : 'text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200'
                  } 
                  px-4 py-2 rounded-md transition-colors
                `}
              >
                <Download size={20} className="mr-2" />
                Data Analyst Resume
              </a> */}
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            {/* Navigation Links */}
            <div className="flex flex-col space-y-4">
              {navigationLinks.map((link) => (
                <button 
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`
                    ${darkMode 
                      ? 'text-gray-300 hover:text-white' 
                      : 'text-gray-600 hover:text-gray-900'
                    } text-base text-left px-2 py-1
                  `}
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 mt-4 px-2">
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

            {/* Resume Download Buttons */}
            <div className="flex flex-col space-y-2 mt-4 px-2">
              <a 
                href="https://raw.githubusercontent.com/akk1011/portfolio/main/src/data/KeerthiKrishnaAiyappanDS.pdf"
                download
                className={`
                  flex items-center justify-center
                  ${darkMode 
                    ? 'text-gray-300 hover:text-white bg-gray-700 hover:bg-gray-600' 
                    : 'text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200'
                  } 
                  px-4 py-2 rounded-md text-sm transition-colors
                `}
              >
                <Download size={20} className="mr-2" />
                Resume
              </a>

              {/* <a 
                href="https://raw.githubusercontent.com/akk1011/portfolio/main/src/data/KeerthiKrishnaAiyappanDA.pdf"
                download
                className={`
                  flex items-center justify-center
                  ${darkMode 
                    ? 'text-gray-300 hover:text-white bg-gray-700 hover:bg-gray-600' 
                    : 'text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200'
                  } 
                  px-4 py-2 rounded-md text-sm transition-colors
                `}
              >
                <Download size={20} className="mr-2" />
                Data Analyst Resume
              </a> */}
            </div>

            {/* Dark Mode Toggle */}
            <div className="mt-4 px-2">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;