import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslations } from '../hooks/useTranslations';
import { WrenchScrewdriverIcon, SparklesIcon, ArrowPathIcon } from '../components/icons';
import { ImageSlider } from '../components/ImageSlider';

const Home: React.FC = () => {
    const { t } = useTranslations();

    const homeSliderImages = [
        { src: '/images/Bez nazwy-384.jpg', alt: 'Fragment Naszej Pracy 1' },
        { src: '/images/Bez nazwy-385.jpg', alt: 'Fragment Naszej Pracy 2' },
        { src: '/images/Bez nazwy-386.jpg', alt: 'Fragment Naszej Pracy 3' },
        { src: '/images/Bez nazwy-387.jpg', alt: 'Fragment Naszej Pracy 4' },
        { src: '/images/Bez nazwy-388.jpg', alt: 'Fragment Naszej Pracy 5' },
        { src: '/images/Bez nazwy-389.jpg', alt: 'Fragment Naszej Pracy 6' },
        { src: '/images/Bez nazwy-390.jpg', alt: 'Fragment Naszej Pracy 7' },
    ];

    const testimonials = [
        { quote: t('home.testimonials.review1.quote'), author: t('home.testimonials.review1.author') },
        { quote: t('home.testimonials.review2.quote'), author: t('home.testimonials.review2.author') },
    ];

    return (
        <div className="space-y-16 md:space-y-24">
            {/* Hero Section */}
            <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="/images/logo%20strona%20g%C5%82owna%20.jpg" alt="Logo strony głównej" className="object-cover w-full h-full" />
                    <div className="absolute inset-0 bg-black opacity-60"></div>
                </div>
                <div className="relative z-10 px-4">
                    <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                        {t('home.hero.title')}
                    </h1>
                    <div className="max-w-md mx-auto mt-6">
                        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                            <Link to="/contact" className="px-8 py-3 font-semibold text-white transition duration-300 ease-in-out transform border-2 rounded-md border-neon-red bg-neon-red/20 hover:bg-neon-red hover:scale-105 hover:shadow-neon-red">
                                {t('home.hero.cta_appointment')}
                            </Link>
                            <Link to="/services" className="px-8 py-3 font-semibold text-white transition duration-300 ease-in-out transform border-2 rounded-md border-neon-blue bg-neon-blue/20 hover:bg-neon-blue hover:scale-105 hover:shadow-neon-blue">
                                {t('home.hero.cta_services')}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Us Section */}
            <section className="container px-4 mx-auto sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-white">{t('home.why_us.title')}</h2>
                <div className="grid max-w-4xl grid-cols-1 gap-8 mx-auto mt-12 md:grid-cols-3">
                    <div className="p-8 text-center transition-all duration-300 bg-gray-800 border border-gray-700 rounded-lg hover:border-neon-red hover:shadow-neon-red hover:-translate-y-2">
                        <h3 className="text-xl font-semibold">{t('home.why_us.items.one')}</h3>
                    </div>
                    <div className="p-8 text-center transition-all duration-300 bg-gray-800 border border-gray-700 rounded-lg hover:border-neon-red hover:shadow-neon-red hover:-translate-y-2">
                        <h3 className="text-xl font-semibold">{t('home.why_us.items.two')}</h3>
                    </div>
                    <div className="p-8 text-center transition-all duration-300 bg-gray-800 border border-gray-700 rounded-lg hover:border-neon-red hover:shadow-neon-red hover:-translate-y-2">
                        <h3 className="text-xl font-semibold">{t('home.why_us.items.three')}</h3>
                    </div>
                </div>
            </section>

            {/* Offer Section */}
            <section className="container px-4 mx-auto sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-white">{t('home.offer.title')}</h2>
                 <div className="grid max-w-5xl grid-cols-1 gap-8 mx-auto mt-12 md:grid-cols-3">
                    <Link to="/services" className="block p-8 overflow-hidden text-center transition-all duration-300 bg-gray-800 border border-gray-700 rounded-lg group hover:border-neon-blue hover:shadow-neon-blue hover:-translate-y-2">
                        <WrenchScrewdriverIcon className="w-12 h-12 mx-auto mb-4 text-neon-blue" />
                        <h3 className="text-xl font-semibold">{t('home.offer.items.one')}</h3>
                    </Link>
                    <Link to="/services" className="block p-8 overflow-hidden text-center transition-all duration-300 bg-gray-800 border border-gray-700 rounded-lg group hover:border-neon-blue hover:shadow-neon-blue hover:-translate-y-2">
                        <SparklesIcon className="w-12 h-12 mx-auto mb-4 text-neon-blue" />
                        <h3 className="text-xl font-semibold">{t('home.offer.items.two')}</h3>
                    </Link>
                    <Link to="/services" className="block p-8 overflow-hidden text-center transition-all duration-300 bg-gray-800 border border-gray-700 rounded-lg group hover:border-neon-blue hover:shadow-neon-blue hover:-translate-y-2">
                        <ArrowPathIcon className="w-12 h-12 mx-auto mb-4 text-neon-blue" />
                        <h3 className="text-xl font-semibold">{t('home.offer.items.three')}</h3>
                    </Link>
                </div>
            </section>

            {/* New Image Slider Section */}
            <section className="container px-4 mx-auto sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-white">{t('home.slider.title')}</h2>
                <div className="mt-4">
                    <ImageSlider images={homeSliderImages} />
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 bg-gray-900">
                <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center text-white">{t('home.testimonials.title')}</h2>
                    <div className="grid max-w-4xl grid-cols-1 gap-8 mx-auto mt-12 md:grid-cols-2">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="p-8 bg-gray-800 border-l-4 rounded-lg border-neon-red">
                                <p className="italic text-gray-300">"{testimonial.quote}"</p>
                                <p className="mt-4 font-semibold text-right text-neon-red">- {testimonial.author}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="container px-4 pb-16 mx-auto text-center sm:px-6 lg:px-8 md:pb-24">
                <h2 className="text-3xl font-bold text-white">{t('home.cta.title')}</h2>
                <p className="mt-2 text-lg text-gray-400">{t('home.cta.subtitle')}</p>
                <div className="mt-8">
                    <Link to="/contact" className="inline-block px-10 py-4 font-semibold text-white transition duration-300 ease-in-out transform rounded-md bg-neon-red hover:bg-red-700 hover:scale-105 hover:shadow-neon-red">
                        {t('home.cta.cta_contact')}
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;