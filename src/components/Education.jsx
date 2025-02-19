// // import React from 'react';
// // import { GraduationCap } from 'lucide-react';
// // import SyracuseUniversityLogo from '../assets/SU.png';
// // import BharathiarUniversityLogo from '../assets/BU.png';

// // function Education({ darkMode, education }) {
// //   const universityLogos = {
// //     'Syracuse University': SyracuseUniversityLogo,
// //     'Bharathiar University': BharathiarUniversityLogo
// //   };

// //   return (
// //     <section 
// //       id="education"
// //       className={`
// //         py-8 px-4 
// //         ${darkMode 
// //           ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' 
// //           : 'bg-gradient-to-br from-gray-200 via-gray-200 to-gray-300'
// //         }
// //       `}
// //     >
// //       <div className="max-w-4xl mx-auto w-full">
// //         <h2 className={`text-4xl font-bold text-center mb-8 ${darkMode ? 'text-white' : 'text-black'}`}>
// //           Education
// //         </h2>
        
// //         <div className="space-y-6">
// //           {education.degrees.map((edu) => (
// //             <div 
// //               key={edu.school}
// //               className={`
// //                 p-6 rounded-2xl shadow-xl 
// //                 ${darkMode 
// //                   ? 'bg-gray-800 border border-gray-700' 
// //                   : 'bg-gray-100 border border-gray-200'
// //                 }
// //                 flex items-center
// //                 transform transition-transform hover:scale-105
// //               `}
// //             >
// //               <div className="mr-6">
// //                 {universityLogos[edu.school] ? (
// //                   <img 
// //                     src={universityLogos[edu.school]} 
// //                     alt={`${edu.school} Logo`} 
// //                     className="w-16 h-16 object-contain"
// //                   />
// //                 ) : (
// //                   <GraduationCap 
// //                     className={`
// //                       w-12 h-12 
// //                       ${darkMode ? 'text-blue-400' : 'text-blue-600'}
// //                     `} 
// //                   />
// //                 )}
// //               </div>
// //               <div>
// //                 <h3 className={`
// //                   text-xl font-semibold mb-1
// //                   ${darkMode ? 'text-white' : 'text-black'}
// //                 `}>
// //                   {edu.school}
// //                 </h3>
// //                 <p className={`
// //                   text-base mb-1
// //                   ${darkMode ? 'text-gray-300' : 'text-gray-600'}
// //                 `}>
// //                   {edu.degree}
// //                 </p>
// //                 <p className={`
// //                   text-sm
// //                   ${darkMode ? 'text-gray-400' : 'text-gray-500'}
// //                 `}>
// //                   {edu.location} | {edu.period}
// //                 </p>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // export default Education;

// import React from 'react';
// import { GraduationCap } from 'lucide-react';
// import SyracuseUniversityLogo from '../assets/SU.png';
// import BharathiarUniversityLogo from '../assets/BU.png';

// function Education({ darkMode, education }) {
//   const sectionStyle = {
//     background: darkMode
//       ? 'linear-gradient(to bottom right, #111827, #1F2937, #111827)'
//       : 'linear-gradient(to bottom right, #F3F4F6, #E5E7EB, #F3F4F6)',
//     backgroundSize: '100% 400%',
//     backgroundAttachment: 'fixed'
//   };

//   const universityLogos = {
//     'Syracuse University': SyracuseUniversityLogo,
//     'Bharathiar University': BharathiarUniversityLogo
//   };

//   return (
//     <section 
//       id="education"
//       //className="pt-8 pb-7 px-4"
//       className = 'py-8 px-4'
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
//               className={`
//                 p-6 rounded-2xl shadow-xl 
//                 ${darkMode 
//                   ? 'bg-gray-800 border border-gray-700' 
//                   : 'bg-gray-100 border border-gray-200'
//                 }
//                 flex items-center
//                 transform transition-all duration-300 ease-in-out
//                 hover:scale-105 hover:shadow-2xl
//                 hover:translate-y-[-4px]
//               `}
//             >
//               <div className="mr-6 transition-transform duration-300 ease-in-out hover:scale-110">
//                 {universityLogos[edu.school] ? (
//                   <img 
//                     src={universityLogos[edu.school]} 
//                     alt={`${edu.school} Logo`} 
//                     className="w-16 h-16 object-contain"
//                   />
//                 ) : (
//                   <GraduationCap 
//                     className={`
//                       w-12 h-12 
//                       ${darkMode ? 'text-blue-400' : 'text-blue-600'}
//                     `} 
//                   />
//                 )}
//               </div>
//               <div>
//                 <h3 className={`
//                   text-xl font-semibold mb-1
//                   ${darkMode ? 'text-white' : 'text-black'}
//                   transition-colors duration-300 ease-in-out
//                   hover:text-blue-500
//                 `}>
//                   {edu.school}
//                 </h3>
//                 <p className={`
//                   text-base mb-1
//                   ${darkMode ? 'text-gray-300' : 'text-gray-600'}
//                 `}>
//                   {edu.degree}
//                 </p>
//                 <p className={`
//                   text-sm
//                   ${darkMode ? 'text-gray-400' : 'text-gray-500'}
//                 `}>
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
      className="py-8 pb-16 px-4"
      style={sectionStyle}
    >
      <div className="max-w-4xl mx-auto w-full">
        <h2 className={`text-4xl font-bold text-center mb-8 ${darkMode ? 'text-white' : 'text-black'}`}>
          Education
        </h2>
        
        <div className="space-y-6">
          {education.degrees.map((edu) => (
            <div 
              key={edu.school}
              className="bg-gray-900 bg-opacity-70 backdrop-blur-lg rounded-2xl p-6 border border-gray-700 
                        shadow-xl transform transition-all duration-300
                        hover:scale-105 hover:shadow-2xl hover:translate-y-[-4px]
                        flex items-center"
            >
              <div className="mr-6 transition-transform duration-300 ease-in-out hover:scale-110">
                {universityLogos[edu.school] ? (
                  <img 
                    src={universityLogos[edu.school]} 
                    alt={`${edu.school} Logo`} 
                    className="w-16 h-16 object-contain brightness-100 z-10"
                  />
                ) : (
                  <GraduationCap 
                    className="w-12 h-12 text-blue-400"
                  />
                )}
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-1 text-white transition-colors duration-300 ease-in-out hover:text-blue-400">
                  {edu.school}
                </h3>
                <p className="text-base mb-1 text-gray-100">
                  {edu.degree}
                </p>
                <p className="text-sm text-gray-200">
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