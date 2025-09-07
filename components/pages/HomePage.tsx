import React, { useState, useEffect, useCallback } from 'react';
import type { Page } from '../../types';
import AnimateOnScroll from '../AnimateOnScroll';
import CountingNumber from '../CountingNumber';

interface HomePageProps {
    onNavigate: (page: Page) => void;
}

const testimonials = [
    {
        quote: "Gracias a FisioVida, pude volver a correr sin dolor. ¡Un equipo de profesionales increíbles y un trato excepcional!",
        author: "Laura Gómez",
        role: "Corredora amateur"
    },
    {
        quote: "La rehabilitación de mi hombro fue un éxito. Me sentí acompañado y motivado en cada paso del proceso.",
        author: "Carlos Pérez",
        role: "Paciente post-operatorio"
    },
    {
        quote: "No solo aliviaron mi dolor de espalda crónico, sino que me enseñaron a prevenir futuras lesiones. ¡Totalmente recomendados!",
        author: "Ana Martínez",
        role: "Trabajadora de oficina"
    }
];

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [parallaxOffset, setParallaxOffset] = useState(0);

    const nextTestimonial = useCallback(() => {
        setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, []);

    useEffect(() => {
        const interval = setInterval(nextTestimonial, 5000);
        return () => clearInterval(interval);
    }, [nextTestimonial]);
    
    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset < window.innerHeight) {
                setParallaxOffset(window.pageYOffset * 0.4);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="animate-fadeIn">
            {/* Hero Section */}
            <section className="h-screen relative overflow-hidden flex items-center justify-center text-white">
                 <div 
                    className="absolute inset-0 bg-cover bg-center z-[-1]"
                    style={{
                        backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://picsum.photos/seed/fisiohero-medical/1920/1080')",
                        transform: `translateY(${parallaxOffset}px) scale(1.1)`
                    }}
                />
                <div className="text-center z-10 p-4">
                    <AnimateOnScroll>
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight">FisioVida</h1>
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={200}>
                        <p className="text-xl md:text-2xl mt-4">Recupera tu movimiento, mejora tu vida.</p>
                    </AnimateOnScroll>
                    <AnimateOnScroll delay={400}>
                        <button onClick={() => onNavigate('contacto')} className="mt-8 px-8 py-3 bg-[#4FB3A3] text-white font-semibold rounded-full hover:bg-[#3d8f81] hover:-translate-y-1 transform transition-all duration-300 shadow-lg">
                            Agenda tu cita
                        </button>
                    </AnimateOnScroll>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-20 bg-white dark:bg-gray-800">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <AnimateOnScroll>
                             <img src="https://picsum.photos/seed/fisiocare-clinic/600/400" alt="Fisioterapeuta aplicando tratamiento en un entorno clínico" className="rounded-lg shadow-xl w-full" />
                        </AnimateOnScroll>
                        <AnimateOnScroll delay={200}>
                            <h2 className="text-4xl font-bold text-[#2E2E2E] dark:text-gray-100">Profesionalidad, Cuidado, Resultados.</h2>
                            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">En FisioVida, nuestra filosofía se centra en ofrecerte un tratamiento totalmente personalizado. Combinamos la última tecnología con técnicas manuales probadas para garantizar una recuperación efectiva y duradera, siempre con un trato cercano y humano.</p>
                        </AnimateOnScroll>
                    </div>
                     {/* Trust Metrics */}
                     <div className="mt-16 max-w-4xl mx-auto">
                        <AnimateOnScroll>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                                <div className="border border-gray-200 dark:border-gray-700 p-6 rounded-lg">
                                    <h3 className="text-3xl font-bold text-[#3A506B] dark:text-[#4FB3A3]"><CountingNumber target={10} />+</h3>
                                    <p className="text-gray-600 dark:text-gray-400 mt-2">Años de Experiencia</p>
                                </div>
                                <div className="border border-gray-200 dark:border-gray-700 p-6 rounded-lg">
                                    <h3 className="text-3xl font-bold text-[#3A506B] dark:text-[#4FB3A3]"><CountingNumber target={5000} />+</h3>
                                    <p className="text-gray-600 dark:text-gray-400 mt-2">Pacientes Tratados</p>
                                </div>
                                <div className="border border-gray-200 dark:border-gray-700 p-6 rounded-lg">
                                    <h3 className="text-3xl font-bold text-[#3A506B] dark:text-[#4FB3A3]"><CountingNumber target={95} />%</h3>
                                    <p className="text-gray-600 dark:text-gray-400 mt-2">Índice de Satisfacción</p>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </section>
            
            {/* Featured Services */}
            <section className="py-20 bg-[#FAFAFA] dark:bg-gray-900">
                <div className="container mx-auto px-6 text-center">
                    <AnimateOnScroll>
                        <h2 className="text-4xl font-bold text-[#2E2E2E] dark:text-gray-100">Nuestros Servicios Destacados</h2>
                        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Soluciones clínicas efectivas para tus necesidades específicas, diseñadas para devolverte a tu mejor versión.</p>
                    </AnimateOnScroll>
                    <div className="grid md:grid-cols-3 gap-8 mt-12">
                        <AnimateOnScroll>
                            <ServiceCard icon={<SpineIcon />} title="Fisioterapia Deportiva" description="Optimiza tu rendimiento y acelera tu recuperación de lesiones para volver al juego más fuerte que nunca." />
                        </AnimateOnScroll>
                        <AnimateOnScroll delay={200}>
                           <ServiceCard icon={<JointIcon />} title="Rehabilitación Post-operatoria" description="Un plan de recuperación integral para restaurar tu movilidad y funcionalidad tras una cirugía." />
                        </AnimateOnScroll>
                        <AnimateOnScroll delay={400}>
                            <ServiceCard icon={<TherapyIcon />} title="Terapia Manual Avanzada" description="Técnicas especializadas para aliviar el dolor, reducir la tensión y mejorar la movilidad articular y muscular." />
                        </AnimateOnScroll>
                    </div>
                     <AnimateOnScroll delay={600}>
                        <button onClick={() => onNavigate('servicios')} className="mt-12 px-8 py-3 border-2 border-[#4FB3A3] text-[#4FB3A3] font-semibold rounded-full hover:bg-[#4FB3A3] hover:text-white dark:hover:text-gray-900 hover:-translate-y-1 transform transition-all duration-300">
                            Ver todos los servicios
                        </button>
                    </AnimateOnScroll>
                </div>
            </section>
            
            {/* Testimonials Section */}
            <section className="py-20 bg-white dark:bg-gray-800">
                <div className="container mx-auto px-6 text-center">
                     <AnimateOnScroll>
                        <h2 className="text-4xl font-bold text-[#2E2E2E] dark:text-gray-100">Lo que dicen nuestros pacientes</h2>
                    </AnimateOnScroll>
                    <div className="relative mt-12 max-w-3xl mx-auto h-56">
                        {testimonials.map((testimonial, index) => (
                             <div key={index} className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentTestimonial ? 'opacity-100' : 'opacity-0'}`}>
                                <p className="text-xl italic text-gray-700 dark:text-gray-300">"{testimonial.quote}"</p>
                                <p className="mt-4 font-bold text-[#2E2E2E] dark:text-gray-100">{testimonial.author}</p>
                                <p className="text-sm text-[#3A506B] dark:text-gray-400 font-semibold">{testimonial.role}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center space-x-2 mt-4">
                        {testimonials.map((_, index) => (
                             <button key={index} onClick={() => setCurrentTestimonial(index)} className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentTestimonial ? 'bg-[#4FB3A3]' : 'bg-[#E5E5E5] dark:bg-gray-600'}`}></button>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

const ServiceCard: React.FC<{icon: React.ReactNode, title: string, description: string}> = ({icon, title, description}) => (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group text-left">
        <div className="inline-block p-4 bg-[#E5E5E5] dark:bg-gray-700 rounded-full text-[#2E2E2E] dark:text-gray-200 group-hover:bg-[#4FB3A3] group-hover:text-white dark:group-hover:text-gray-900 transition-all duration-300 transform group-hover:scale-110">
           {icon}
        </div>
        <h3 className="text-2xl font-bold mt-6 dark:text-gray-100">{title}</h3>
        <p className="mt-2 text-gray-600 dark:text-gray-400">{description}</p>
    </div>
);

const SpineIcon = () => (<svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22c0-8 8-8 8-8s8 0 8 8M4 14c0-8 8-8 8-8s8 0 8 8M4 6c0-4 8-4 8-4s8 0 8 4"></path></svg>);
const JointIcon = () => (<svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="7" cy="7" r="3"></circle><circle cx="17" cy="17" r="3"></circle><path d="M19 15.5l-8-8"></path><path d="M5 8.5l8 8"></path></svg>);
const TherapyIcon = () => (<svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M12 18v-6"></path><path d="m9 15 3-3 3 3"></path></svg>);

export default HomePage;