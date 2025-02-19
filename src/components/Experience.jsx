


import React from 'react';
import GSKLogo from '../assets/GSK3.png';
import NASportzLogo from '../assets/SI3.png';
import BilledRightLogo from '../assets/BR2.png';

function Experience({ darkMode, experience }) {
  const sectionStyle = {
    background: darkMode
      ? 'linear-gradient(to bottom right, #111827, #1F2937, #111827)'
      : 'linear-gradient(to bottom right, #F3F4F6, #E5E7EB, #F3F4F6)',
    backgroundSize: '100% 400%',
    backgroundAttachment: 'fixed'
  };

  
  const companyLogos = {
    'GSK (ViiV Healthcare)': GSKLogo,
    'NA Sportz Interactive': NASportzLogo,
    'BilledRight Healthcare Solutions': BilledRightLogo
  };

  return (
    <section 
      id = 'experience'
      className="py-8 px-4" 
      style = {sectionStyle}      
    >
      <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold text-center mb-8 ${darkMode ? 'text-white' : 'text-black'}`}> 
          Work Experience
        </h2>
        
        <div className="relative before:absolute before:inset-0 before:ml-5 before:w-0.5 before:bg-gray-700">
          {experience.map((exp, index) => {
            const periodParts = exp.period.split(' - ');
            const [startMonth, startYear] = periodParts[0].split(' ');
            const endPart = periodParts[1];
            const [endMonth, endYear] = endPart === 'Present' 
              ? ['', 'Present'] 
              : endPart.split(' ');

            return (
              <div 
                key={exp.role}
                className={`
                  relative flex items-center mb-8
                  group
                `}
              >
                {/* Date Labels */}
                <div className={`absolute -left-[160px] w-[100px] text-right pr-4
  ${darkMode 
    ? 'text-gray-400 group-hover:text-white' 
    : 'text-black group-hover:text-gray-700'}
  transition-colors`}>

                  <div className="text-sm font-medium">
                    {startMonth} {startYear}
                  </div>
                  <div className="text-xs text-black-500 group-hover:text-black-300">
                    to
                  </div>
                  <div className="text-sm font-medium">
                    {endMonth} {endYear}
                  </div>
                </div>

                {/* Timeline Dot/Logo */}
                <div className="absolute -left-[75px] z-10 
                  flex items-center justify-center
                ">
                  <img 
                    src={companyLogos[exp.company]}
                    alt={`${exp.company} Logo`}
                    className="w-20 h-20 object-contain mix-blend-multiply"
                  />
                </div>

                {/* Experience Card */}
                <div 
                  className={`
                    ml-8 w-full
                    bg-gray-900 bg-opacity-70 backdrop-blur-lg 
                    rounded-2xl p-6 border border-gray-700 
                    shadow-xl transform transition-all 
                    duration-300 group-hover:scale-105 group-hover:shadow-2xl
                  `}
                >
                  <div className="mb-4">
                    <h3 className="text-2xl font-semibold text-white">
                      {exp.role}
                    </h3>
                    <p className="text-gray-100">
                      {exp.company} | {exp.location}
                    </p>
                  </div>
                  
                  <ul className="space-y-2 text-gray-100">
                    {exp.highlights.map((highlight, index) => (
                      <li 
                        key={index} 
                        className="flex items-start"
                      >
                        <svg 
                          className="w-4 h-4 text-blue-400 mr-3 mt-1 flex-shrink-0" 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path 
                            fillRule="evenodd" 
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                            clipRule="evenodd" 
                          />
                        </svg>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;