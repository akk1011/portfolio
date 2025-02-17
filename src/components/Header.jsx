import React from 'react';

function Header({ darkMode, personalInfo }) {
  return (
    <header className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm pt-16`}>
      <div className="max-w-4xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold">{personalInfo.name}</h1>
        <p className={`mt-2 text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {personalInfo.title}
        </p>
        <p className={`mt-4 max-w-2xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {personalInfo.about}
        </p>
      </div>
    </header>
  );
}

export default Header;