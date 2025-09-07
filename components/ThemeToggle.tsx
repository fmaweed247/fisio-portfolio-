
import React from 'react';
import type { Theme } from '../types';

interface ThemeToggleProps {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
    return (
        <button
            onClick={toggleTheme}
            aria-label={`Activar modo ${theme === 'light' ? 'oscuro' : 'claro'}`}
            className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center text-[#4FB3A3] hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4FB3A3] focus:ring-offset-white dark:focus:ring-offset-gray-900"
        >
            <div className="relative w-6 h-6">
                {/* Sun Icon */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`absolute inset-0 w-full h-full transition-all duration-300 ease-in-out ${theme === 'light' ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-50'}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                {/* Moon Icon */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`absolute inset-0 w-full h-full transition-all duration-300 ease-in-out ${theme === 'dark' ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-50'}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
            </div>
        </button>
    );
};

export default ThemeToggle;