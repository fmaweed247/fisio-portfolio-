
import React, { useState, useEffect } from 'react';
import { Page, Theme } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import ServicesPage from './components/pages/ServicesPage';
import CenterPage from './components/pages/CenterPage';
import ContactPage from './components/pages/ContactPage';
import Preloader from './components/Preloader';
import ThemeToggle from './components/ThemeToggle';

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<Page>('inicio');
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isExiting, setIsExiting] = useState<boolean>(false);
    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window !== 'undefined' && window.localStorage) {
            const storedTheme = window.localStorage.getItem('theme');
            if (storedTheme === 'dark' || storedTheme === 'light') {
                return storedTheme;
            }
        }
        return 'light';
    });

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    const handlePageChange = (page: Page) => {
        if (page === currentPage) return;
        setIsExiting(true);
        setTimeout(() => {
            setCurrentPage(page);
            setIsExiting(false);
            window.scrollTo(0, 0);
        }, 500);
    };

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'servicios':
                return <ServicesPage />;
            case 'centro':
                return <CenterPage />;
            case 'contacto':
                return <ContactPage />;
            case 'inicio':
            default:
                return <HomePage onNavigate={handlePageChange} />;
        }
    };

    if (isLoading) {
        return <Preloader />;
    }

    return (
        <div className="bg-[#FAFAFA] text-[#2E2E2E] dark:bg-gray-900 dark:text-gray-200">
            <Header currentPage={currentPage} onNavigate={handlePageChange} />
            <main className={`transition-opacity duration-500 ${isExiting ? 'opacity-0' : 'opacity-100'}`}>
                {renderPage()}
            </main>
            <Footer />
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
    );
};

export default App;