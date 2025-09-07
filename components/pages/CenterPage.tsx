
import React, { useState } from 'react';
import AnimateOnScroll from '../AnimateOnScroll';

const galleryImages = [
    { id: 1, src: 'https://picsum.photos/seed/fisio-gallery1/500/300', alt: 'Recepción del centro' },
    { id: 2, src: 'https://picsum.photos/seed/fisio-gallery2/500/700', alt: 'Sala de tratamiento individual' },
    { id: 3, src: 'https://picsum.photos/seed/fisio-gallery3/500/400', alt: 'Equipamiento de fisioterapia moderno' },
    { id: 4, src: 'https://picsum.photos/seed/fisio-gallery4/500/600', alt: 'Zona de ejercicios y rehabilitación' },
    { id: 5, src: 'https://picsum.photos/seed/fisio-gallery5/500/350', alt: 'Detalle de camilla de masaje' },
    { id: 6, src: 'https://picsum.photos/seed/fisio-gallery6/500/500', alt: 'Ambiente tranquilo y luminoso' },
    { id: 7, src: 'https://picsum.photos/seed/fisio-gallery7/500/800', alt: 'Profesional realizando una técnica' },
    { id: 8, src: 'https://picsum.photos/seed/fisio-gallery8/500/450', alt: 'Pasillo del centro' },
];

const teamMembers = [
    {
        name: 'Dr. Alejandro Vega',
        role: 'Fisioterapeuta Deportivo y Readaptación',
        image: 'https://picsum.photos/seed/fisio-team1/400/400'
    },
    {
        name: 'Dra. Sofía Navarro',
        role: 'Especialista en Terapia Manual y Dolor Crónico',
        image: 'https://picsum.photos/seed/fisio-team2/400/400'
    },
    {
        name: 'Dr. Javier Ríos',
        role: 'Fisioterapeuta Neurológico y Geriátrico',
        image: 'https://picsum.photos/seed/fisio-team3/400/400'
    }
];

const ImageModal: React.FC<{ src: string, alt: string, onClose: () => void }> = ({ src, alt, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 fade-in" onClick={onClose}>
            <div className="relative max-w-4xl max-h-[90vh] p-4" onClick={e => e.stopPropagation()}>
                <img src={src} alt={alt} className="w-full h-full object-contain rounded-lg" />
                <button onClick={onClose} className="absolute -top-2 -right-2 text-white bg-black/50 rounded-full w-8 h-8 flex items-center justify-center text-2xl">&times;</button>
            </div>
        </div>
    );
};

const CenterPage: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div className="fade-in">
            {/* Banner Section */}
            <section className="h-[50vh] bg-cover bg-center flex items-center justify-center text-white relative" style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://picsum.photos/seed/fisio-center-clinic/1920/600')"}}>
                <div className="text-center p-4">
                    <AnimateOnScroll>
                        <h1 className="text-5xl md:text-6xl font-bold">Tu espacio de recuperación y bienestar</h1>
                    </AnimateOnScroll>
                </div>
            </section>
            
            {/* Introduction Section */}
            <section className="py-20 bg-white dark:bg-gray-800">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <AnimateOnScroll>
                        <h2 className="text-4xl font-bold text-[#2E2E2E] dark:text-gray-100">Sobre FisioVida</h2>
                        <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
                            FisioVida nació de la pasión por la salud y el movimiento. Fundado en 2015, nuestro centro se ha convertido en un referente en fisioterapia integral. Creemos en un enfoque holístico, donde cada paciente es único y merece un plan de tratamiento a medida. Nuestro equipo de fisioterapeutas altamente cualificados se dedica a proporcionar el más alto nivel de atención en un ambiente moderno, acogedor y profesional, diseñado para tu máximo confort y confianza.
                        </p>
                    </AnimateOnScroll>
                </div>
            </section>
            
            {/* Our Team Section */}
            <section className="py-20 bg-[#FAFAFA] dark:bg-gray-900">
                <div className="container mx-auto px-6">
                    <AnimateOnScroll>
                        <h2 className="text-4xl font-bold text-center text-[#2E2E2E] dark:text-gray-100">Nuestro Equipo de Expertos</h2>
                    </AnimateOnScroll>
                    <div className="grid md:grid-cols-3 gap-10 mt-12 max-w-5xl mx-auto">
                        {teamMembers.map((member, index) => (
                             <AnimateOnScroll key={index} delay={index * 150}>
                                <div className="text-center">
                                    <img src={member.image} alt={`Foto de ${member.name}`} className="w-48 h-48 mx-auto rounded-full object-cover shadow-lg border-4 border-white dark:border-gray-700" />
                                    <h3 className="text-2xl font-bold mt-6 text-[#2E2E2E] dark:text-gray-100">{member.name}</h3>
                                    <p className="mt-1 text-[#3A506B] dark:text-gray-400 font-medium">{member.role}</p>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-20 bg-white dark:bg-gray-800">
                <div className="container mx-auto px-6">
                    <AnimateOnScroll>
                        <h2 className="text-4xl font-bold text-center text-[#2E2E2E] dark:text-gray-100">Conoce nuestras instalaciones</h2>
                    </AnimateOnScroll>
                    <div className="mt-12 columns-2 md:columns-3 lg:columns-4 gap-4">
                        {galleryImages.map((image, index) => (
                            <AnimateOnScroll key={image.id} delay={index * 100}>
                                <div className="mb-4 break-inside-avoid cursor-pointer group overflow-hidden rounded-lg shadow-lg relative" onClick={() => setSelectedImage(image.src)}>
                                    <img src={image.src} alt={image.alt} className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-300" />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                                        <svg className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                        </svg>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </section>
            
            {selectedImage && <ImageModal src={selectedImage} alt="Vista ampliada de la galería" onClose={() => setSelectedImage(null)} />}
        </div>
    );
};

export default CenterPage;