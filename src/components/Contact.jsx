import React from 'react';
import { Github, Linkedin } from 'lucide-react';

function Contact({ darkMode, personalInfo }) {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
        <p className={`text-xl mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          To connect about potential opportunities, please email:
        </p>
        <a 
          href={`mailto:${personalInfo.email}`}
          className={`text-xl font-medium ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}
        >
          {personalInfo.email}
        </a>
        <div className="mt-8 flex justify-center space-x-6">
          <a 
            href={personalInfo.github}
            className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={28} />
          </a>
          <a 
            href={personalInfo.linkedin}
            className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;