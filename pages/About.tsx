import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslations } from '../hooks/useTranslations';
import { ImageSlider } from '../components/ImageSlider';
import { StarIcon, GoogleIcon } from '../components/icons';

const GoogleReviewsWidget: React.FC = () => {
    const { t } = useTranslations();
    const ratingValue = 4.1;
    const allReviewsUrl = 'https://share.google/EbrqfitJWAB3xsQ3Q';

    return (
        <div className="flex justify-center">
            <div className="w-full max-w-sm p-8 space-y-6 text-center text-white border rounded-2xl bg-gray-900/80 border-blue-500/30 backdrop-blur-sm">
                <GoogleIcon className="w-12 h-12 mx-auto" />
                <div className="flex justify-center">
                    {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="w-8 h-8 text-yellow-400" filled={i < Math.round(ratingValue)} />
                    ))}
                </div>
                <div className="text-5xl font-bold tracking-tight">
                    {t('about.reviews.rating')}
                </div>
                <p className="text-gray-400">{t('about.reviews.based_on')}</p>
                <a
                    href={allReviewsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full px-8 py-4 text-lg font-bold text-white transition-all duration-300 transform rounded-full bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(219,39,119,0.7)]"
                >
                    {t('about.reviews.cta_view')}
                </a>

                    <div className="text-xs text-gray-500">
                        <span>{t('about.reviews.widget_error')} </span>
                        <a href={allReviewsUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-300">
                            {t('about.reviews.widget_error_link')}
                        </a>
                    </div>
                </div>
            </div>
        );
    }

const About: React.FC = () => {
    const { t } = useTranslations();

    const galleryImages = [
        { src: '/images/PIAGGIO.png', alt: 'Piaggio' },
        { src: '/images/vespa.png', alt: 'Vespa' },
        { src: '/images/yamaha.png', alt: 'Yamaha' },
        { src: '/images/honda.png', alt: 'Honda' },
        { src: '/images/kymco.png', alt: 'Kymco' },
        { src: '/images/sym.png', alt: 'Sym' },
    ];
    
    return (
        <div className="py-16 overflow-hidden bg-gray-900 sm:py-24">
            <div className="container px-4 mx-auto space-y-16 sm:px-6 lg:px-8 sm:space-y-24">
                
                {/* Welcome Section */}
                <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                    <div className="text-center lg:text-start">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{t('about.welcome.title')}</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">{t('about.welcome.text')}</p>
                    </div>
                    <div className="flex justify-center">
                        <div style={{ display: 'flex', gap: '40px' }}>
                            <div className="logo-circle" style={{ width: '400px', height: '400px', borderRadius: '50%', overflow: 'hidden', boxShadow: '0 0 32px rgba(0,0,0,0.25)', border: '6px solid #222' }}>
                                <img src="/images/scuter logo .jpg" alt="Scootershop MG bv logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div className="logo-circle" style={{ width: '400px', height: '400px', borderRadius: '50%', overflow: 'hidden', boxShadow: '0 0 32px rgba(0,0,0,0.25)', border: '6px solid #222' }}>
                                <img src="/images/SCUTER LOGO 2.png" alt="Scootershop MG bv logo 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <div className="flex items-center">
                                <a
                                    href="https://marrisgym.nl/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 ml-4 font-bold text-white transition-all duration-300 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(219,39,119,0.7)]"
                                >
                                    marrisgym.nl
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Values Section */}
                <div className="py-16 bg-base-dark">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{t('about.values.title')}</h2>
                        {/* Ramka na zdjęcie RDW o kształcie blaszki */}
                        <div className="flex justify-center mt-8">
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <div
                                    style={{
                                        width: '500px',
                                        height: '300px',
                                        padding: '16px',
                                        overflow: 'hidden',
                                        background: 'linear-gradient(135deg, #e2e8f0 60%, #cbd5e1 100%)',
                                        boxShadow: '0 0 24px rgba(0,0,0,0.25)',
                                        clipPath: 'polygon(10% 0%, 90% 0%, 100% 20%, 100% 80%, 90% 100%, 10% 100%, 0% 80%, 0% 20%)',
                                        border: '4px solid #b0b0b0',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <img
                                        src="/images/RDW.jpg"
                                        alt="RDW certyfikat"
                                        style={{
                                            maxWidth: '100%',
                                            maxHeight: '100%',
                                            objectFit: 'contain',
                                            borderRadius: 0,
                                            background: '#fff',
                                            display: 'block',
                                            margin: 'auto',
                                        }}
                                    />
                                </div>
                                <a
                                    href="https://www.rdw.nl/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 px-8 py-4 font-bold text-white transition-all duration-300 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(219,39,119,0.7)]"
                                >
                                    www.rdw.nl
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-8 mt-12 text-center md:grid-cols-3">
                        <div className="p-8 border border-gray-700 rounded-lg">
                            <h3 className="text-xl font-semibold text-neon-red">{t('about.values.one')}</h3>
                        </div>
                         <div className="p-8 border border-gray-700 rounded-lg">
                            <h3 className="text-xl font-semibold text-neon-red">{t('about.values.two')}</h3>
                        </div>
                         <div className="p-8 border border-gray-700 rounded-lg">
                            <h3 className="text-xl font-semibold text-neon-red">{t('about.values.three')}</h3>
                        </div>
                    </div>
                </div>

                {/* Google Reviews Section */}
                <GoogleReviewsWidget />

                {/* Gallery Section */}
                <div>
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{t('about.gallery.title')}</h2>
                        <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-300">{t('about.gallery.subtitle')}</p>
                    </div>
                    <div className="mt-8">
                        <ImageSlider images={galleryImages} />
                    </div>
                    <p className="mt-6 text-center text-gray-400">{t('about.gallery.more_brands')}</p>
                </div>
                {/* Ramka na zdjęcie */}
                    <div className="flex justify-center items-start gap-8 mt-12">
                        <div className="w-full max-w-2xl p-2 overflow-hidden transition-all duration-300 border border-gray-700 rounded-lg hover:border-neon-blue hover:shadow-neon-blue">
                            <img 
                                src="/images/Zdjecie 1 .jpg" 
                                alt="Zdjęcie 1" 
                                className="object-cover w-full h-auto rounded-md" 
                            />
                        </div>
                        <div className="w-full max-w-sm">
                            <GoogleReviewsWidget />
                        </div>
                    </div>
                    {/* CTA Section */}
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-white">{t('about.cta.title')}</h2>
                        <div className="mt-8">
                            <Link to="/contact" className="inline-block px-10 py-4 font-semibold text-white transition duration-300 ease-in-out transform rounded-md bg-neon-blue hover:bg-blue-700 hover:scale-105 hover:shadow-neon-blue">
                                {t('about.cta.cta_contact')}
                            </Link>
                        </div>
                    </div>
                        {/* CTA Section */}
            </div>
        );
    };

    export default About;