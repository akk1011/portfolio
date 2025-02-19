// import React from 'react';

// function Skills({ darkMode, skills }) {
//   return (
//     <section className={`py-16 px-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
//       <div className="max-w-4xl mx-auto">
//         <h2 className="text-3xl font-bold mb-8">Skills</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {Object.entries(skills).map(([category, items]) => (
//             <div key={category} className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-6 rounded-lg`}>
//               <h3 className="font-semibold text-lg mb-3">{category}</h3>
//               <div className="flex flex-wrap gap-2">
//                 {items.map((skill) => (
//                   <span
//                     key={skill}
//                     className={`px-3 py-1 rounded-full text-sm ${
//                       darkMode 
//                         ? 'bg-gray-600 text-gray-200' 
//                         : 'bg-gray-200 text-gray-700'
//                     }`}
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
  'Programming & Visualization': <Code className="w-10 h-10 text-blue-400" />,
  'Cloud & Big Data Infrastructure': <Cloud className="w-10 h-10 text-indigo-400" />,
  'Libraries & Frameworks': <Server className="w-10 h-10 text-green-400" />,
  'Modeling Techniques': <Brain className="w-10 h-10 text-purple-400" />,
  'AWS Services': <Database className="w-10 h-10 text-orange-400" />,
  'Azure Services': <BarChart className="w-10 h-10 text-teal-400" />,
  //'Optimization and Analysis': <LineChart className="w-10 h-10 text-teal-400" />,
};



function Skills({ darkMode, skills }) {
  return (
    <section 
      id = 'skills'
      className={`
        py-8 px-4 
        ${darkMode 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' 
          : 'bg-gradient-to-br from-gray-200 via-gray-200 to-gray-300'
        }
        pt-16 min-h-screen
      `}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl font-bold text-center mb-8 ${darkMode ? 'text-white' : 'text-black'}`}>
          Skills & Technologies
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div 
              key={category}
              className={`
                bg-gray-900 bg-opacity-70 backdrop-blur-lg 
                rounded-2xl p-6 border border-gray-700 
                shadow-xl transform transition-all 
                duration-300 hover:scale-105 hover:shadow-2xl
              `}
            >
              <div className="flex items-center mb-6">
                {categoryIcons[category]}
                <h3 className="text-xl font-semibold ml-4 text-white">
                  {category}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className={`
                      px-3 py-1 rounded-full text-sm font-medium
                      bg-gray-700 text-gray-200
                      transition-all duration-200
                      hover:bg-gray-600 hover:text-white
                      cursor-default
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