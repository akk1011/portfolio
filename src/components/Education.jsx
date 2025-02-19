

// import React from 'react';
// import { GraduationCap } from 'lucide-react';
// import SyracuseUniversityLogo from '../assets/SU.png';
// import BharathiarUniversityLogo from '../assets/BU.png';

// function Education({ darkMode, education }) {
//   const sectionStyle = {
//     background: darkMode
//       ? 'linear-gradient(to bottom right, #111827, #1F2937, #111827)'
//       : 'linear-gradient(to bottom right, #F3F4F6, #E5E7EB, #F3F4F6)',
//     backgroundSize: '100% 100vh',
//     backgroundRepeat: 'no-repeat',
//     backgroundAttachment: 'fixed'
//   };

//   const universityLogos = {
//     'Syracuse University': SyracuseUniversityLogo,
//     'Bharathiar University': BharathiarUniversityLogo
//   };

//   return (
//     <section 
//       id="education"
//       className="py-8 pb-16 px-4"
//       style={sectionStyle}
//     >
//       <div className="max-w-4xl mx-auto w-full">
//         <h2 className={`text-4xl font-bold text-center mb-8 ${darkMode ? 'text-white' : 'text-black'}`}>
//           Education
//         </h2>
        
//         <div className="space-y-6">
//           {education.degrees.map((edu) => (
//             <div 
//               key={edu.school}
//               className="bg-gray-900 bg-opacity-70 backdrop-blur-lg rounded-2xl p-6 border border-gray-700 
//                         shadow-xl transform transition-all duration-300
//                         hover:scale-105 hover:shadow-2xl hover:translate-y-[-4px]
//                         flex items-center"
//             >
//               <div className="mr-6 transition-transform duration-300 ease-in-out hover:scale-110">
//                 {universityLogos[edu.school] ? (
//                   <img 
//                     src={universityLogos[edu.school]} 
//                     alt={`${edu.school} Logo`} 
//                     className="w-16 h-16 object-contain brightness-100 z-10"
//                   />
//                 ) : (
//                   <GraduationCap 
//                     className="w-12 h-12 text-blue-400"
//                   />
//                 )}
//               </div>
//               <div>
//                 <h3 className="text-2xl font-semibold mb-1 text-white transition-colors duration-300 ease-in-out hover:text-blue-400">
//                   {edu.school}
//                 </h3>
//                 <p className="text-base mb-1 text-gray-100">
//                   {edu.degree}
//                 </p>
//                 <p className="text-sm text-gray-200">
//                   {edu.location} | {edu.period}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Education;


import React from 'react';
import { GraduationCap } from 'lucide-react';
import SyracuseUniversityLogo from '../assets/SU.png';
import BharathiarUniversityLogo from '../assets/BU.png';

function Education({ darkMode, education }) {
  const sectionStyle = {
    background: darkMode
      ? 'linear-gradient(to bottom right, #111827, #1F2937, #111827)'
      : 'linear-gradient(to bottom right, #F3F4F6, #E5E7EB, #F3F4F6)',
    backgroundSize: '100% 100vh',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed'
  };

  const universityLogos = {
    'Syracuse University': SyracuseUniversityLogo,
    'Bharathiar University': BharathiarUniversityLogo
  };

  return (
    <section 
      id="education"
      className="py-4 md:py-8 pb-8 md:pb-16 px-4 md:px-6"
      style={sectionStyle}
    >
      <div className="max-w-4xl mx-auto w-full">
        <h2 className={`text-2xl md:text-4xl font-bold text-center mb-4 md:mb-8 ${darkMode ? 'text-white' : 'text-black'}`}>
          Education
        </h2>
        
        <div className="space-y-4 md:space-y-6">
          {education.degrees.map((edu) => (
            <div 
              key={edu.school}
              className="bg-gray-900 bg-opacity-70 backdrop-blur-lg rounded-2xl p-4 md:p-6 border border-gray-700 
                        shadow-xl transform transition-all duration-300
                        hover:scale-105 hover:shadow-2xl hover:translate-y-[-4px]
                        flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-6"
            >
              <div className="transition-transform duration-300 ease-in-out hover:scale-110">
                {universityLogos[edu.school] ? (
                  <img 
                    src={universityLogos[edu.school]} 
                    alt={`${edu.school} Logo`} 
                    className="w-12 h-12 md:w-16 md:h-16 object-contain brightness-100 z-10"
                  />
                ) : (
                  <GraduationCap 
                    className="w-10 h-10 md:w-12 md:h-12 text-blue-400"
                  />
                )}
              </div>
              <div className="text-center md:text-left flex-1">
                <h3 className="text-xl md:text-2xl font-semibold mb-1 text-white transition-colors duration-300 ease-in-out hover:text-blue-400">
                  {edu.school}
                </h3>
                <p className="text-sm md:text-base mb-1 text-gray-100">
                  {edu.degree}
                </p>
                <p className="text-xs md:text-sm text-gray-200">
                  {edu.location} | {edu.period}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;