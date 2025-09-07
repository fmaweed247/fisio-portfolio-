
import React, { useState } from 'react';
import AnimateOnScroll from '../AnimateOnScroll';

interface AccordionItemProps {
    title: string;
    children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-[#E5E5E5] dark:border-gray-700">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center py-5 text-left text-xl font-semibold text-[#2E2E2E] dark:text-gray-200"
            >
                <span>{title}</span>
                <span className={`transform transition-transform duration-500 ease-out ${isOpen ? 'rotate-180' : ''}`}>
                    <svg className="w-6 h-6 text-[#4FB3A3]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </span>
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <div className="p-5 bg-white dark:bg-gray-800 rounded-b-lg">
                    {children}
                </div>
            </div>
        </div>
    );
};

const ServiceDetail: React.FC<{name: string, description: string, duration: string, price:string}> = ({name, description, duration, price}) => (
    <div className="py-3 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
        <div className="flex justify-between items-start">
            <div>
                <h4 className="font-bold text-lg text-[#2E2E2E] dark:text-gray-100">{name}</h4>
                <p className="text-gray-600 dark:text-gray-400 mt-1">{description}</p>
            </div>
            <div className="text-right ml-4 flex-shrink-0">
                <p className="font-semibold text-[#4FB3A3]">{price}</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">{duration}</p>
            </div>
        </div>
    </div>
);


const ServicesPage: React.FC = () => {
    return (
        <div className="fade-in pt-32 pb-20">
            <section className="container mx-auto px-6 text-center">
                 <AnimateOnScroll>
                    <h1 className="text-5xl font-bold text-[#2E2E2E] dark:text-gray-100">Nuestros Servicios</h1>
                    <p className="mt-4 text-lg text-[#3A506B] dark:text-gray-400 max-w-3xl mx-auto">Tratamientos basados en evidencia para una recuperación óptima y duradera.</p>
                </AnimateOnScroll>
            </section>
            <section className="container mx-auto px-6 mt-16 relative">
                 <AnimateOnScroll>
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 opacity-5 dark:opacity-10 hidden lg:block" style={{ zIndex: -1 }}>
                        <svg width="300" height="600" viewBox="0 0 24 24" fill="none" stroke="#E5E5E5" strokeWidth="0.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22c0-8 8-8 8-8s8 0 8 8M4 14c0-8 8-8 8-8s8 0 8 8M4 6c0-4 8-4 8-4s8 0 8 4"></path></svg>
                    </div>
                    <div className="max-w-4xl mx-auto bg-[#FAFAFA] dark:bg-gray-800/50 rounded-lg shadow-lg p-4 md:p-8">
                        <AccordionItem title="Fisioterapia General y Diagnóstico">
                            <ServiceDetail name="Consulta y Valoración Inicial" description="Evaluación completa para un diagnóstico preciso y un plan de tratamiento personalizado." duration="60 min" price="€50" />
                            <ServiceDetail name="Tratamiento del Dolor de Espalda" description="Técnicas manuales y ejercicios para aliviar el dolor lumbar y cervical." duration="50 min" price="€45" />
                            <ServiceDetail name="Fisioterapia Neurológica" description="Rehabilitación para pacientes con condiciones como Ictus, Parkinson o esclerosis múltiple." duration="60 min" price="€55" />
                        </AccordionItem>
                        <AccordionItem title="Rehabilitación Deportiva">
                            <ServiceDetail name="Prevención de Lesiones" description="Análisis biomecánico y programa de ejercicios para reducir el riesgo de lesiones." duration="60 min" price="€60" />
                            <ServiceDetail name="Recuperación de Lesiones" description="Tratamiento de esguinces, tendinitis, roturas fibrilares y más." duration="50 min" price="€50" />
                            <ServiceDetail name="Readaptación al Deporte" description="Proceso guiado para asegurar una vuelta segura y eficaz a la actividad deportiva." duration="60 min" price="€55" />
                        </AccordionItem>
                         <AccordionItem title="Terapias Manuales Avanzadas">
                            <ServiceDetail name="Masaje Terapéutico y Descontracturante" description="Alivia la tensión muscular, mejora la circulación y promueve la relajación." duration="50 min" price="€45" />
                            <ServiceDetail name="Punción Seca" description="Técnica invasiva para el tratamiento de puntos gatillo miofasciales." duration="45 min" price="€40" />
                            <ServiceDetail name="Drenaje Linfático Manual" description="Estimula el sistema linfático para reducir edemas y mejorar la circulación." duration="60 min" price="€50" />
                        </AccordionItem>
                    </div>
                </AnimateOnScroll>
            </section>
        </div>
    );
};

export default ServicesPage;