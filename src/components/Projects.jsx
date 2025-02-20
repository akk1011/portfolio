// // import React from 'react';
// // import { Github } from 'lucide-react';

// // function Projects({ darkMode, projects }) {
// //   return (
// //     <section 
// //     id = 'projects'
// //     className="py-16 px-4">
// //       <div className="max-w-4xl mx-auto">
// //         <h2 className="text-3xl font-bold mb-8">Projects</h2>
// //         <div className="space-y-8">
// //           {projects.map((project) => (
// //             <div 
// //               key={project.title} 
// //               className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-sm`}
// //             >
// //               <div className="flex justify-between items-start">
// //                 <div>
// //                   <h3 className="text-xl font-semibold">{project.title}</h3>
// //                   <p className={`text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
// //                     {project.period}
// //                   </p>
// //                 </div>
// //                 <a
// //                   href={project.github}
// //                   className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                 >
// //                   <Github size={20} />
// //                 </a>
// //               </div>
// //               <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
// //                 {project.description}
// //               </p>
// //               <div className="mt-4 flex flex-wrap gap-2">
// //                 {project.technologies.map((tech) => (
// //                   <span
// //                     key={tech}
// //                     className={`px-3 py-1 rounded-full text-sm ${
// //                       darkMode 
// //                         ? 'bg-gray-600 text-gray-200' 
// //                         : 'bg-gray-200 text-gray-700'
// //                     }`}
// //                   >
// //                     {tech}
// //                   </span>
// //                 ))}
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // export default Projects;


// import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight, Github } from 'lucide-react';

// function Projects({ darkMode, projects }) {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [expandedProject, setExpandedProject] = useState(null);
  
//   const sectionStyle = {
//     background: darkMode
//       ? 'linear-gradient(to bottom right, #111827, #1F2937, #111827)'
//       : 'linear-gradient(to bottom right, #F3F4F6, #E5E7EB, #F3F4F6)',
//     backgroundSize: '100% 400%',
//     backgroundAttachment: 'fixed'
//   };

//   const projectsPerPage = 3;
//   const totalPages = Math.ceil(projects.length / projectsPerPage);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex + projectsPerPage >= projects.length ? 0 : prevIndex + projectsPerPage
//     );
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex - projectsPerPage < 0 ? 
//         Math.max(0, projects.length - projectsPerPage) : 
//         prevIndex - projectsPerPage
//     );
//   };

//   const toggleDetails = (title) => {
//     setExpandedProject(expandedProject === title ? null : title);
//   };

//   return (
//     <section 
//       id="projects"
//       className="py-8 px-4 relative" 
//       style={sectionStyle}
//     >
//       <div className="max-w-6xl mx-auto">
//         <h2 className={`text-4xl font-bold text-center mb-8 ${darkMode ? 'text-white' : 'text-black'}`}>
//           Projects
//         </h2>
        
//         <div className="relative">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {projects.slice(currentIndex, currentIndex + projectsPerPage).map((project) => (
//               <div 
//                 key={project.title}
//                 className="group"
//               >
//                 <div className="bg-gray-900 bg-opacity-70 backdrop-blur-lg rounded-2xl p-6 border border-gray-700 
//                               shadow-xl transform transition-all duration-300 h-full
//                               group-hover:scale-105 group-hover:shadow-2xl">
//                   <div className="mb-4">
//                     <h3 className="text-2xl font-semibold text-white mb-2">
//                       {project.title}
//                     </h3>
//                     <p className="text-gray-400 text-sm">
//                       {project.period}
//                     </p>
//                     <p className="text-gray-100 mt-2">
//                       {project.description}
//                     </p>
//                   </div>

//                   <div className="mb-4">
//                     <h4 className="text-lg font-semibold text-blue-400 mb-2">
//                       Key Features
//                     </h4>
//                     <ul className="space-y-1">
//                       {project.keyFeatures.slice(0, 5).map((feature, idx) => (
//                         <li 
//                           key={idx}
//                           className="text-gray-100 text-sm flex items-start"
//                         >
//                           <svg 
//                             className="w-4 h-4 text-blue-400 mr-2 mt-1 flex-shrink-0" 
//                             fill="currentColor" 
//                             viewBox="0 0 20 20"
//                           >
//                             <path 
//                               fillRule="evenodd" 
//                               d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
//                               clipRule="evenodd" 
//                             />
//                           </svg>
//                           {feature}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   <div className="mb-4">
//                     <h4 className="text-lg font-semibold text-blue-400 mb-2">
//                       Tech Stack
//                     </h4>
//                     <div className="flex flex-wrap gap-2">
//                       {project.techStack.slice(0, 10).map((tech, idx) => (
//                         <span 
//                           key={idx}
//                           className="px-2 py-1 bg-blue-900 bg-opacity-40 text-blue-200 rounded-lg text-sm"
//                         >
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="flex justify-between items-center mt-4">
//                     <a 
//                       href={project.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg 
//                                hover:bg-gray-700 transition-colors duration-200"
//                     >
//                       <Github className="w-4 h-4 mr-2" />
//                       Link
//                     </a>
                    
//                     <button
//                       onClick={() => toggleDetails(project.title)}
//                       className="px-4 py-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
//                     >
//                       {expandedProject === project.title ? 'Hide Details' : 'Show Details'}
//                     </button>
//                   </div>

//                   {/* Expanded Details */}
//                   {expandedProject === project.title && (
//                     <div className="mt-4 space-y-2 border-t border-gray-700 pt-4">
//                       <h4 className="text-lg font-semibold text-blue-400 mb-2">
//                         Additional Details
//                       </h4>
//                       <ul className="space-y-2">
//                         {project.additionalDetails.map((detail, idx) => (
//                           <li 
//                             key={idx}
//                             className="text-gray-100 text-sm flex items-start"
//                           >
//                             <svg 
//                               className="w-4 h-4 text-blue-400 mr-2 mt-1 flex-shrink-0" 
//                               fill="currentColor" 
//                               viewBox="0 0 20 20"
//                             >
//                               <path 
//                                 fillRule="evenodd" 
//                                 d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
//                                 clipRule="evenodd" 
//                               />
//                             </svg>
//                             {detail}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Navigation Buttons */}
//           <button
//             onClick={prevSlide}
//             className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16
//                      p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700
//                      transition-all duration-200 shadow-xl"
//           >
//             <ChevronLeft className="w-6 h-6" />
//           </button>
          
//           <button
//             onClick={nextSlide}
//             className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16
//                      p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700
//                      transition-all duration-200 shadow-xl"
//           >
//             <ChevronRight className="w-6 h-6" />
//           </button>
//         </div>

//         {/* Page Indicators */}
//         <div className="flex justify-center mt-8 space-x-2">
//           {[...Array(totalPages)].map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => setCurrentIndex(idx * projectsPerPage)}
//               className={`w-2 h-2 rounded-full transition-all duration-200 
//                 ${currentIndex === idx * projectsPerPage 
//                   ? 'bg-blue-500 w-4' 
//                   : 'bg-gray-500 hover:bg-gray-400'}`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Projects;

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Github } from 'lucide-react';

function Projects({ darkMode, projects }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedProject, setExpandedProject] = useState(null);
  
  const sectionStyle = {
    background: darkMode
      ? 'linear-gradient(to bottom right, #111827, #1F2937, #111827)'
      : 'linear-gradient(to bottom right, #F3F4F6, #E5E7EB, #F3F4F6)',
    backgroundSize: '100% 400%',
    backgroundAttachment: 'fixed'
  };

  const projectsPerPage = 3;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + projectsPerPage >= projects.length ? 0 : prevIndex + projectsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - projectsPerPage < 0 ? 
        Math.max(0, projects.length - projectsPerPage) : 
        prevIndex - projectsPerPage
    );
  };

  const toggleDetails = (title) => {
    setExpandedProject(expandedProject === title ? null : title);
  };

  return (
    <section 
      id="projects"
      className="py-8 px-4 relative" 
      style={sectionStyle}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold text-center mb-8 ${darkMode ? 'text-white' : 'text-black'}`}>
          Projects
        </h2>
        
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.slice(currentIndex, currentIndex + projectsPerPage).map((project) => (
              <div 
                key={project.title}
                className="group"
              >
                <div className="bg-gray-900 bg-opacity-70 backdrop-blur-lg rounded-2xl p-6 border border-gray-700 
                              shadow-xl transform transition-all duration-300 h-full
                              group-hover:scale-105 group-hover:shadow-2xl">
                  <div className="mb-4">
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {project.period}
                    </p>
                    <p className="text-gray-100 mt-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-blue-400 mb-2">
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {project.keyFeatures.slice(0, 5).map((feature, idx) => (
                        <li 
                          key={idx}
                          className="text-gray-100 text-sm flex items-start"
                        >
                          <svg 
                            className="w-4 h-4 text-blue-400 mr-2 mt-1 flex-shrink-0" 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path 
                              fillRule="evenodd" 
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                              clipRule="evenodd" 
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-blue-400 mb-2">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 10).map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 bg-blue-900 bg-opacity-40 text-blue-200 rounded-lg text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg 
                               hover:bg-gray-700 transition-colors duration-200"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Link
                    </a>
                    
                    <button
                      onClick={() => toggleDetails(project.title)}
                      className="px-4 py-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                    >
                      {expandedProject === project.title ? 'Hide Details' : 'Show Details'}
                    </button>
                  </div>

                  {/* Expanded Details */}
                  {expandedProject === project.title && (
                    <div className="mt-4 space-y-4 border-t border-gray-700 pt-4">
                      {/* Project Success Section */}
                      <div className="space-y-2">
                        <h4 className="text-lg font-semibold text-blue-400 mb-2">
                          Project Success
                        </h4>
                        <ul className="space-y-2">
                          {project.projectSuccess.map((success, idx) => (
                            <li 
                              key={idx}
                              className="text-gray-100 text-sm flex items-start"
                            >
                              <svg 
                                className="w-4 h-4 text-blue-400 mr-2 mt-1 flex-shrink-0" 
                                fill="currentColor" 
                                viewBox="0 0 20 20"
                              >
                                <path 
                                  fillRule="evenodd" 
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                                  clipRule="evenodd" 
                                />
                              </svg>
                              {success}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Additional Details Section */}
                      <div className="space-y-2">
                        <h4 className="text-lg font-semibold text-blue-400 mb-2">
                          Additional Details
                        </h4>
                        <ul className="space-y-2">
                          {project.additionalDetails.map((detail, idx) => (
                            <li 
                              key={idx}
                              className="text-gray-100 text-sm flex items-start"
                            >
                              <svg 
                                className="w-4 h-4 text-blue-400 mr-2 mt-1 flex-shrink-0" 
                                fill="currentColor" 
                                viewBox="0 0 20 20"
                              >
                                <path 
                                  fillRule="evenodd" 
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                                  clipRule="evenodd" 
                                />
                              </svg>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16
                     p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700
                     transition-all duration-200 shadow-xl"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16
                     p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700
                     transition-all duration-200 shadow-xl"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Page Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {[...Array(totalPages)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx * projectsPerPage)}
              className={`w-2 h-2 rounded-full transition-all duration-200 
                ${currentIndex === idx * projectsPerPage 
                  ? 'bg-blue-500 w-4' 
                  : 'bg-gray-500 hover:bg-gray-400'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;