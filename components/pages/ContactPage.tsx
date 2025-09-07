import React, { useState } from 'react';
import AnimateOnScroll from '../AnimateOnScroll';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [formStatus, setFormStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Basic validation
        if (formData.name && formData.email && formData.message) {
            setFormStatus('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
            setFormData({ name: '', email: '', phone: '', message: '' });
            setTimeout(() => setFormStatus(''), 5000);
        } else {
            setFormStatus('Por favor, rellena todos los campos obligatorios.');
        }
    };
    
    return (
        <div>
            {/* Banner Section */}
            <section className="h-[50vh] bg-cover bg-center flex items-center justify-center text-white relative" style={{backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://picsum.photos/seed/fisio-contact-reception/1920/600')"}}>
                <div className="text-center px-6">
                    <AnimateOnScroll>
                        <h1 className="text-5xl md:text-6xl font-bold">Contacta y Pide tu Cita</h1>
                        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">Estamos aquí para ayudarte. Rellena el formulario o utiliza nuestros datos de contacto para agendar tu próxima visita.</p>
                    </AnimateOnScroll>
                </div>
            </section>
            
            <div className="py-20 bg-white dark:bg-gray-800">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Contact Form */}
                        <AnimateOnScroll>
                            <div className="bg-[#FAFAFA] dark:bg-gray-900/50 p-8 rounded-lg shadow-lg">
                                <h2 className="text-3xl font-bold mb-6 text-[#2E2E2E] dark:text-gray-100">Envíanos un mensaje</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Nombre Completo *</label>
                                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border border-[#E5E5E5] dark:border-gray-600 bg-white dark:bg-gray-800 rounded-md focus:ring-2 focus:ring-[#4FB3A3] focus:outline-none"/>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Email *</label>
                                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border border-[#E5E5E5] dark:border-gray-600 bg-white dark:bg-gray-800 rounded-md focus:ring-2 focus:ring-[#4FB3A3] focus:outline-none"/>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="phone" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Teléfono (Opcional)</label>
                                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-[#E5E5E5] dark:border-gray-600 bg-white dark:bg-gray-800 rounded-md focus:ring-2 focus:ring-[#4FB3A3] focus:outline-none"/>
                                    </div>
                                    <div className="mb-6">
                                        <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Mensaje *</label>
                                        <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} required className="w-full px-4 py-2 border border-[#E5E5E5] dark:border-gray-600 bg-white dark:bg-gray-800 rounded-md focus:ring-2 focus:ring-[#4FB3A3] focus:outline-none"></textarea>
                                    </div>
                                    <button type="submit" className="w-full py-3 bg-[#4FB3A3] text-white font-semibold rounded-md hover:bg-[#3d8f81] transition-colors duration-300">
                                        Enviar y Solicitar Cita
                                    </button>
                                    {formStatus && <p className="mt-4 text-center text-sm text-[#4FB3A3]">{formStatus}</p>}
                                </form>
                            </div>
                        </AnimateOnScroll>
                        
                        {/* Contact Info & Map */}
                        <AnimateOnScroll delay={200}>
                            <div className="space-y-8">
                                 <div>
                                    <h3 className="text-2xl font-bold mb-4 text-[#2E2E2E] dark:text-gray-100">Información de Contacto</h3>
                                    <div className="space-y-3 text-gray-700 dark:text-gray-300">
                                        <p className="flex items-center"><PhoneIcon /> <span className="ml-3">+34 912 345 678</span></p>
                                        <p className="flex items-center"><MailIcon /> <span className="ml-3">info@fisiovida.es</span></p>
                                        <p className="flex items-start"><LocationIcon /> <span className="ml-3">Calle de la Fisioterapia, 123<br/>28001 Madrid, España</span></p>
                                    </div>
                                </div>
                                 <div>
                                    <h3 className="text-2xl font-bold mb-4 text-[#2E2E2E] dark:text-gray-100">Horario</h3>
                                    <div className="space-y-2 text-gray-700 dark:text-gray-300">
                                        <p><strong>Lunes a Viernes:</strong> 9:00 - 20:00</p>
                                        <p><strong>Sábado:</strong> 10:00 - 14:00</p>
                                        <p><strong>Domingo:</strong> Cerrado</p>
                                    </div>
                                </div>
                                <div className="h-80 w-full rounded-lg overflow-hidden shadow-lg">
                                    <iframe 
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.165516905597!2d-3.68880668460375!3d40.42730197936388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42289c45018a41%3A0x8a7a8a1e2f8f8b8a!2sCalle%20de%20Serrano%2C%20Madrid!5e0!3m2!1ses!2ses!4v1678886455581!5m2!1ses!2ses" 
                                        width="100%" 
                                        height="100%" 
                                        style={{border:0}} 
                                        className="dark:grayscale dark:invert"
                                        allowFullScreen={true}
                                        loading="lazy" 
                                        referrerPolicy="no-referrer-when-downgrade">
                                    </iframe>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </div>
        </div>
    );
};


const PhoneIcon = () => (<svg className="w-6 h-6 text-[#3A506B] dark:text-[#4FB3A3]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>);
const MailIcon = () => (<svg className="w-6 h-6 text-[#3A506B] dark:text-[#4FB3A3]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>);
const LocationIcon = () => (<svg className="w-6 h-6 text-[#3A506B] dark:text-[#4FB3A3] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>);

export default ContactPage;