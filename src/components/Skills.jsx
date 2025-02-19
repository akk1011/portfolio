

// import React from 'react';
// import { 
//   Code, 
//   Database, 
//   BarChart, 
//   Cloud, 
//   Brain, 
//   Server, 
//   LineChart
// } from 'lucide-react';

// const categoryIcons = {
//   'Programming & Visualization': <Code className="w-10 h-10 text-blue-400" />,
//   'Cloud & Big Data Infrastructure': <Cloud className="w-10 h-10 text-indigo-400" />,
//   'Libraries & Frameworks': <Server className="w-10 h-10 text-green-400" />,
//   'Modeling Techniques': <Brain className="w-10 h-10 text-purple-400" />,
//   'AWS Services': <Database className="w-10 h-10 text-orange-400" />,
//   'Azure Services': <BarChart className="w-10 h-10 text-teal-400" />,
//   //'Optimization and Analysis': <LineChart className="w-10 h-10 text-teal-400" />,
// };



// function Skills({ darkMode, skills }) {
//   return (
//     <section 
//       id = 'skills'
//       className={`
//         py-8 px-4 
//         ${darkMode 
//           ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' 
//           : 'bg-gradient-to-br from-gray-200 via-gray-200 to-gray-300'
//         }
//         pt-16 min-h-screen
//       `}
//     >
//       <div className="max-w-6xl mx-auto">
//         <h2 className={`text-4xl font-bold text-center mb-8 ${darkMode ? 'text-white' : 'text-black'}`}>
//           Skills & Technologies
//         </h2>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {Object.entries(skills).map(([category, items]) => (
//             <div 
//               key={category}
//               className={`
//                 bg-gray-900 bg-opacity-70 backdrop-blur-lg 
//                 rounded-2xl p-6 border border-gray-700 
//                 shadow-xl transform transition-all 
//                 duration-300 hover:scale-105 hover:shadow-2xl
//               `}
//             >
//               <div className="flex items-center mb-6">
//                 {categoryIcons[category]}
//                 <h3 className="text-xl font-semibold ml-4 text-white">
//                   {category}
//                 </h3>
//               </div>
              
//               <div className="flex flex-wrap gap-2">
//                 {items.map((skill) => (
//                   <span
//                     key={skill}
//                     className={`
//                       px-3 py-1 rounded-full text-sm font-medium
//                       bg-gray-700 text-gray-200
//                       transition-all duration-200
//                       hover:bg-gray-600 hover:text-white
//                       cursor-default
//                     `}
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Skills;

import React from 'react';
import { 
  Code, 
  Database, 
  BarChart, 
  Cloud, 
  Brain, 
  Server, 
  LineChart
} from 'lucide-react';

const categoryIcons = {
  'Programming & Visualization': <Code className="w-8 h-8 md:w-10 md:h-10 text-blue-400" />,
  'Cloud & Big Data Infrastructure': <Cloud className="w-8 h-8 md:w-10 md:h-10 text-indigo-400" />,
  'Libraries & Frameworks': <Server className="w-8 h-8 md:w-10 md:h-10 text-green-400" />,
  'Modeling Techniques': <Brain className="w-8 h-8 md:w-10 md:h-10 text-purple-400" />,
  'AWS Services': <Database className="w-8 h-8 md:w-10 md:h-10 text-orange-400" />,
  'Azure Services': <BarChart className="w-8 h-8 md:w-10 md:h-10 text-teal-400" />,
};

function Skills({ darkMode, skills }) {
  return (
    <section 
      id="skills"
      className={`
        py-6 md:py-8 px-4 
        ${darkMode 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' 
          : 'bg-gradient-to-br from-gray-200 via-gray-200 to-gray-300'
        }
        pt-12 md:pt-16 min-h-screen
      `}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-2xl md:text-4xl font-bold text-center mb-6 md:mb-8 ${darkMode ? 'text-white' : 'text-black'}`}>
          Skills & Technologies
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div 
              key={category}
              className={`
                bg-gray-900 bg-opacity-70 backdrop-blur-lg 
                rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-700 
                shadow-xl transform transition-all 
                duration-300 hover:scale-105 hover:shadow-2xl
              `}
            >
              <div className="flex items-center mb-4 md:mb-6">
                {categoryIcons[category]}
                <h3 className="text-lg md:text-xl font-semibold ml-3 md:ml-4 text-white leading-tight">
                  {category}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className={`
                      px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium
                      bg-gray-700 text-gray-200
                      transition-all duration-200
                      hover:bg-gray-600 hover:text-white
                      cursor-default
                      whitespace-nowrap
                    `}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;