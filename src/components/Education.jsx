import React from 'react';

function Education({ darkMode, education }) {
  return (
    <section className={`py-16 px-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Education</h2>
        <div className="space-y-6">
          {education.degrees.map((edu) => (
            <div key={edu.school} className={`${darkMode ? 'bg-gray-700' : 'bg-gray-50'} p-6 rounded-lg`}>
              <h3 className="text-xl font-semibold">{edu.school}</h3>
              <p className={`mt-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{edu.degree}</p>
              <p className={`text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                {edu.location} | {edu.period}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;