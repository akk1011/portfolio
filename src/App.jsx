import React, { useState } from 'react';
import { portfolioData } from './data/portfolioData.js';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-200`}>
      <Navigation 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        personalInfo={portfolioData.personalInfo} 
      />
      
      <Header 
        darkMode={darkMode} 
        personalInfo={portfolioData.personalInfo} 
      />
      
      <Experience 
        darkMode={darkMode} 
        experience={portfolioData.experience} 
      />
      
      <Skills 
        darkMode={darkMode} 
        skills={portfolioData.skills} 
      />
      
      <Projects 
        darkMode={darkMode} 
        projects={portfolioData.projects} 
      />
      
      <Education 
        darkMode={darkMode} 
        education={portfolioData.education} 
      />
      
      <Contact 
        darkMode={darkMode} 
        personalInfo={portfolioData.personalInfo} 
      />
    </div>
  );
}

export default App;