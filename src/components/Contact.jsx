

// import React from 'react';
// import { Github, Linkedin, Mail } from 'lucide-react';

// function Contact({ darkMode, personalInfo }) {
//   const sectionStyle = {
//     background: darkMode
//       ? 'linear-gradient(to bottom right, #111827, #1F2937, #111827)'
//       : 'linear-gradient(to bottom right, #F3F4F6, #E5E7EB, #F3F4F6)',
//     backgroundSize: '100% 400%',
//     backgroundAttachment: 'fixed'
//   };

//   return (
//     <section 
//       id="contact"
//       className="flex items-center py-12"
//       style={sectionStyle}
//     >
//       <div className="max-w-4xl mx-auto text-center">
//         <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-black'}`}>
//           Contact Me
//         </h2>
//         <p className={`text-lg mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
//           To connect about potential opportunities, please email:
//         </p>
//         <a  
//           href={`mailto:${personalInfo.email}`}
//           className={`
//             text-lg font-medium mb-6 inline-block
//             ${darkMode 
//               ? 'text-blue-400 hover:text-blue-300' 
//               : 'text-blue-600 hover:text-blue-700'
//             }
//             transition-all duration-300 ease-in-out
//             hover:scale-105 hover:shadow-lg
//             hover:translate-y-[-2px]
//           `}
//         >
//           {personalInfo.email}
//         </a>
//         <div className="mt-6 flex justify-center space-x-6">
//           {[
//             { href: personalInfo.github, Icon: Github },
//             { href: personalInfo.linkedin, Icon: Linkedin }
//           ].map(({ href, Icon }) => (
//             <a  
//               key={href}
//               href={href}
//               className={`
//                 ${darkMode 
//                   ? 'text-gray-300 hover:text-white' 
//                   : 'text-gray-600 hover:text-gray-900'
//                 }
//                 transition-all duration-300 ease-in-out
//                 hover:scale-125 hover:rotate-[360deg]
//               `}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Icon size={28} />
//             </a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contact;


// Contact.jsx
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

function Contact({ darkMode, personalInfo }) {
  const sectionStyle = {
    background: darkMode
      ? 'linear-gradient(to bottom right, #111827, #1F2937, #111827)'
      : 'linear-gradient(to bottom right, #F3F4F6, #E7E7EB, #F3F4F6)',
    backgroundSize: '100% 400%',
    backgroundAttachment: 'fixed'
  };

  return (
    <section 
      id="contact"
      className="flex items-center py-6 md:py-12 px-4 md:px-6"
      style={sectionStyle}
    >
      <div className="w-full max-w-4xl mx-auto text-center">
        <h2 className={`text-2xl md:text-3xl font-bold mb-3 md:mb-4 ${darkMode ? 'text-white' : 'text-black'}`}>
          Contact Me
        </h2>
        <p className={`text-base md:text-lg mb-3 md:mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          To connect about potential opportunities, please email:
        </p>
        <a  
          href={`mailto:${personalInfo.email}`}
          className={`
            text-base md:text-lg font-medium mb-4 md:mb-6 inline-block
            ${darkMode 
              ? 'text-blue-400 hover:text-blue-300' 
              : 'text-blue-600 hover:text-blue-700'
            }
            transition-all duration-300 ease-in-out
            hover:scale-105 hover:shadow-lg
            hover:translate-y-[-2px]
          `}
        >
          {personalInfo.email}
        </a>
        <div className="mt-4 md:mt-6 flex justify-center space-x-4 md:space-x-6">
          {[
            { href: personalInfo.github, Icon: Github },
            { href: personalInfo.linkedin, Icon: Linkedin }
          ].map(({ href, Icon }) => (
            <a  
              key={href}
              href={href}
              className={`
                ${darkMode 
                  ? 'text-gray-300 hover:text-white' 
                  : 'text-gray-600 hover:text-gray-900'
                }
                transition-all duration-300 ease-in-out
                hover:scale-125 hover:rotate-[360deg]
              `}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon size={24} className="w-6 h-6 md:w-7 md:h-7" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;