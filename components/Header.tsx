
import React, { useState, useEffect } from 'react';
import type { Page, NavLink } from '../types';

interface HeaderProps {
    currentPage: Page;
    onNavigate: (page: Page) => void;
}

const navLinks: NavLink[] = [
    { name: 'Inicio', page: 'inicio' },
    { name: 'Servicios', page: 'servicios' },
    { name: 'El Centro', page: 'centro' },
    { name: 'Contacto', page: 'contacto' },
];

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const linkClasses = (page: Page) =>
        `relative cursor-pointer text-sm font-medium transition-colors duration-300 before:content-[''] before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-[2px] before:bg-[#4FB3A3] before:transition-all before:duration-300 hover:text-[#4FB3A3] hover:before:w-full ${
            currentPage === page ? 'text-[#4FB3A3] before:w-full' : (isScrolled ? 'text-[#2E2E2E] dark:text-gray-200' : 'text-white')
        }`;

    return (
        <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-800' : 'bg-gradient-to-b from-black/50 to-transparent'}`}>
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-[#4FB3A3] cursor-pointer" style={{fontFamily: "'Playfair Display', serif"}} onClick={() => onNavigate('inicio')}>
                    FisioVida
                </div>
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a key={link.page} onClick={() => onNavigate(link.page)} className={linkClasses(link.page)}>
                            {link.name}
                        </a>
                    ))}
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <XIcon isScrolled={isScrolled}/> : <MenuIcon isScrolled={isScrolled} />}
                    </button>
                </div>
            </nav>
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg absolute w-full">
                    <div className="flex flex-col items-center py-4 space-y-4">
                        {navLinks.map((link) => (
                             <a key={link.page} onClick={() => { onNavigate(link.page); setIsMobileMenuOpen(false); }} className={`cursor-pointer text-lg ${currentPage === link.page ? 'text-[#4FB3A3]' : 'text-[#2E2E2E] dark:text-gray-200'}`}>
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

const MenuIcon: React.FC<{isScrolled: boolean}> = ({ isScrolled }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 transition-colors ${isScrolled ? 'text-[#2E2E2E] dark:text-gray-200' : 'text-white'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
);

const XIcon: React.FC<{isScrolled: boolean}> = ({ isScrolled }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 transition-colors ${isScrolled ? 'text-[#2E2E2E] dark:text-gray-200' : 'text-white'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export default Header;