

// import React from 'react';
// // import { Award, Code, Server, Clock } from 'lucide-react';
// import { Star, Code, Server, Clock } from 'lucide-react';
// import portraitImage from '../data/portrait.jpg';


// function Home({ darkMode, personalInfo }) {
//   return (
//     <header 
//       id='home'
//       className={`
//         ${darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black'
//            : 'bg-gradient-to-br from-gray-200 via-gray-200 to-gray-300'}
//         pt-16 min-h-screen flex items-center
//       `}
//     >
//       <div className="max-w-6xl mx-auto px-4 w-full flex items-center">
//         {/* Photo Section */}
//         <div className="w-1/3 -ml-8 mr-12 justify-center">
//           <img 
//             src={portraitImage} // Replace with your actual photo path
//             alt={personalInfo.name}
//             className="rounded-full w-70 h-70 object-cover shadow-xl"
//           />
//         </div>

//         {/* Content Section */}
//         <div className="w-2/3">
//           <div className="text-left">
//             <h1 className={`text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-black'}`}>
//               {personalInfo.name}
//             </h1>
//             <p className={`text-2xl mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
//               {personalInfo.title}
//             </p>
//             <p className={`text-lg max-w-3xl mb-12 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
//               {personalInfo.about}
//             </p>
//           </div>

//           {/* Metrics Cards */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             <div 
//               className={`
//                 p-4 rounded-xl shadow-lg 
//                 ${darkMode 
//                   ? 'bg-gray-800 border border-gray-700' 
//                   : 'bg-gray-100 border border-gray-200'
//                 }
//                 flex flex-col items-center justify-center
//                 transform transition-transform hover:scale-105
//                 w-full aspect-square
//               `}
//             >
//               <Star className={`w-20 h-20 mb-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
//               <div className={`text-4xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>3+</div>
//               <div className={`text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
//                 Years Experience
//               </div>
//             </div>

//             <div 
//               className={`
//                 p-4 rounded-xl shadow-lg
//                 ${darkMode 
//                   ? 'bg-gray-800 border border-gray-700' 
//                   : 'bg-gray-100 border border-gray-200'
//                 }
//                 flex flex-col items-center justify-center
//                 transform transition-transform hover:scale-105
//                 w-full aspect-square
//               `}
//             >
//               <Code className={`w-20 h-20 mb-6 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
//               <div className={`text-4xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>15+</div>
//               <div className={`text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
//                 Projects
//               </div>
//             </div>

//             <div 
//               className={`
//                 p-4 rounded-xl shadow-lg
//                 ${darkMode 
//                   ? 'bg-gray-800 border border-gray-700' 
//                   : 'bg-gray-100 border border-gray-200'
//                 }
//                 flex flex-col items-center justify-center
//                 transform transition-transform hover:scale-105
//                 w-full aspect-square
//               `}
//             >
//               <Server className={`w-20 h-20 mb-6 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`} />
//               <div className={`text-4xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>20+</div>
//               <div className={`text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
//                 Technologies
//               </div>
//             </div>

//             <div 
//               className={`
//                 p-4 rounded-xl shadow-lg
//                 ${darkMode 
//                   ? 'bg-gray-800 border border-gray-700' 
//                   : 'bg-gray-100 border border-gray-200'
//                 }
//                 flex flex-col items-center justify-center
//                 transform transition-transform hover:scale-105
//                 w-full aspect-square
//               `}
//             >
//               <Clock className={`w-20 h-20 mb-6 ${darkMode ? 'text-red-400' : 'text-red-600'}`} />
//               <div className={`text-4xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>10000+</div>
//               <div className={`text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
//                 Lines of Code
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Home;

import React from 'react';
import { Star, Code, Server, Clock } from 'lucide-react';
import portraitImage from '../data/portrait.jpg';

function Home({ darkMode, personalInfo }) {
  const sectionStyle = {
    background: darkMode
      ? 'linear-gradient(to bottom right, #111827, #1F2937, #111827)'
      : 'linear-gradient(to bottom right, #F3F4F6, #E5E7EB, #F3F4F6)',
    backgroundSize: '100% 400%',
    backgroundAttachment: 'fixed'
  };

  return (
    <header 
      id='home'
      className="pt-16 min-h-screen flex items-center"
      style={sectionStyle}
    >
      <div className="max-w-6xl mx-auto px-4 w-full flex items-center">
        {/* Photo Section */}
        <div className="w-1/3 -ml-8 mr-12 justify-center">
          <img 
            src={portraitImage}
            alt={personalInfo.name}
            className="rounded-full w-70 h-70 object-cover shadow-xl"
          />
        </div>

        {/* Content Section */}
        <div className="w-2/3">
          <div className="text-left">
            <h1 className="text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`">
              {personalInfo.name}
            </h1>
            <p className="text-2xl mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`">
              {personalInfo.title}
            </p>
            <p className="text-lg max-w-3xl mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`">
              {personalInfo.about}
            </p>
          </div>

          {/* Metrics Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Star, color: 'text-blue-400', number: '3+', text: 'Years Experience' },
              { icon: Code, color: 'text-green-400', number: '15+', text: 'Projects' },
              { icon: Server, color: 'text-purple-400', number: '20+', text: 'Technologies' },
              { icon: Clock, color: 'text-red-400', number: '10000+', text: 'Lines of Code' }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-gray-900 bg-opacity-70 backdrop-blur-lg rounded-2xl p-4 border border-gray-700 
                          shadow-xl transform transition-all duration-300
                          hover:scale-105 hover:shadow-2xl
                          flex flex-col items-center justify-center
                          w-full aspect-square"
              >
                <item.icon className={`w-20 h-20 mb-6 ${item.color}`} />
                <div className="text-4xl font-bold mb-2 text-white">
                  {item.number}
                </div>
                <div className="text-base text-gray-300">
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Home;