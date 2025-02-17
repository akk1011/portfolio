import React from 'react';

function Experience({ darkMode, experience }) {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        <div className="space-y-8">
          {experience.map((exp) => (
            <div key={exp.role} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-sm`}>
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{exp.company}</p>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                {exp.location} | {exp.period}
              </p>
              <ul className={`mt-4 space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {exp.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;