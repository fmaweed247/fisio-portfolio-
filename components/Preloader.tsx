
import React from 'react';

const Preloader: React.FC = () => {
    return (
        <div className="fixed inset-0 bg-[#FAFAFA] dark:bg-gray-900 flex flex-col items-center justify-center z-50 transition-opacity duration-500">
            <div className="animate-pulse">
                <h1 className="text-4xl font-bold text-[#4FB3A3]" style={{fontFamily: "'Playfair Display', serif"}}>
                    FisioVida
                </h1>
            </div>
            <p className="mt-2 text-lg text-[#2E2E2E] dark:text-gray-300">Cargando bienestar...</p>
        </div>
    );
};

export default Preloader;