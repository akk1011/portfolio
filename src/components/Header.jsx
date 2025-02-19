

// import React from 'react';
// import { Star, Code, Server, Clock } from 'lucide-react';
// import portraitImage from '../data/portrait.jpg';

// function Home({ darkMode, personalInfo }) {
//   const sectionStyle = {
//     background: darkMode
//       ? 'linear-gradient(to bottom right, #111827, #1F2937, #111827)'
//       : 'linear-gradient(to bottom right, #F3F4F6, #E5E7EB, #F3F4F6)',
//     backgroundSize: '100% 400%',
//     backgroundAttachment: 'fixed'
//   };

//   return (
//     <header 
//       id='home'
//       className="pt-16 min-h-screen flex items-center"
//       style={sectionStyle}
//     >
//       <div className="max-w-6xl mx-auto px-4 w-full flex items-center">
//         {/* Photo Section */}
//         <div className="w-1/3 -ml-8 mr-12 justify-center">
//           <img 
//             src={portraitImage}
//             alt={personalInfo.name}
//             className="rounded-full w-70 h-70 object-cover shadow-xl"
//           />
//         </div>

//         {/* Content Section */}
//         <div className="w-2/3">
//           <div className="text-left">
//             <h1 className="text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`">
//               {personalInfo.name}
//             </h1>
//             <p className="text-2xl mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`">
//               {personalInfo.title}
//             </p>
//             <p className="text-lg max-w-3xl mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`">
//               {personalInfo.about}
//             </p>
//           </div>

//           {/* Metrics Cards */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {[
//               { icon: Star, color: 'text-blue-400', number: '3+', text: 'Years Experience' },
//               { icon: Code, color: 'text-green-400', number: '15+', text: 'Projects' },
//               { icon: Server, color: 'text-purple-400', number: '20+', text: 'Technologies' },
//               { icon: Clock, color: 'text-red-400', number: '10000+', text: 'Lines of Code' }
//             ].map((item, index) => (
//               <div 
//                 key={index}
//                 className="bg-gray-900 bg-opacity-70 backdrop-blur-lg rounded-2xl p-4 border border-gray-700 
//                           shadow-xl transform transition-all duration-300
//                           hover:scale-105 hover:shadow-2xl
//                           flex flex-col items-center justify-center
//                           w-full aspect-square"
//               >
//                 <item.icon className={`w-20 h-20 mb-6 ${item.color}`} />
//                 <div className="text-4xl font-bold mb-2 text-white">
//                   {item.number}
//                 </div>
//                 <div className="text-base text-gray-300">
//                   {item.text}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Home;

import React from 'react';
import { Star, Code, Server, Clock } from 'lucide-react';
import portraitImage from '../data/portrait3.png';

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
      id="home"
      className="pt-8 md:pt-16 min-h-screen flex items-center"
      style={sectionStyle}
    >
      <div className="max-w-6xl mx-auto px-4 w-full">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Photo Section */}
          <div className="w-40 md:w-1/3 mx-auto md:-ml-8"> {/* Reduced from w-48 */}
            <img 
              src={portraitImage}
              alt={personalInfo.name}
              className="rounded-full w-40 h-40 md:w-64 md:h-64 object-cover shadow-xl filter contrast-95 brightness-95" // Reduced size and added subtle filters
            />
          </div>

          {/* Content Section */}
          <div className="w-full md:w-2/3 text-center md:text-left">
            <h1 className={`text-3xl md:text-5xl font-bold mb-2 md:mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              {personalInfo.name}
            </h1>
            <p className={`text-xl md:text-2xl mb-2 md:mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              {personalInfo.title}
            </p>
            <p className={`text-base md:text-lg max-w-3xl mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              {personalInfo.about}
            </p>

            {/* Metrics Cards */}
<div className="grid grid-cols-2 gap-3 md:gap-4 max-w-3xl">
  {[
    { icon: Star, color: 'text-blue-400', number: '3+', text: 'Years Experience' },
    { icon: Code, color: 'text-green-400', number: '15+', text: 'Projects' },
    { icon: Server, color: 'text-purple-400', number: '20+', text: 'Technologies' },
    { icon: Clock, color: 'text-red-400', number: '10000+', text: 'Lines of Code' }
  ].map((item, index) => (
    <div 
      key={index}
      className="bg-gray-900 bg-opacity-70 backdrop-blur-lg rounded-xl md:rounded-2xl 
                border border-gray-700 shadow-xl transform transition-all duration-300
                hover:scale-105 hover:shadow-2xl flex flex-col items-center justify-center
                w-full h-[120px] md:h-[160px]"
    >
      <item.icon className={`w-8 h-8 md:w-16 md:h-16 mb-1 md:mb-3 ${item.color}`} />
      <div className="text-3xl md:text-4xl font-bold mb-1 text-white"> {/* Increased from text-2xl/text-3xl */}
        {item.number}
      </div>
      <div className="text-sm md:text-base text-gray-300 text-center"> {/* Increased from text-xs/text-sm */}
        {item.text}
      </div>
    </div>
  ))}
</div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Home;