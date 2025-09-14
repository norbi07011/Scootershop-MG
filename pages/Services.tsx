import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslations } from '../hooks/useTranslations';
import { WrenchScrewdriverIcon, SparklesIcon, ArrowPathIcon } from '../components/icons';
import { ImageSlider } from '../components/ImageSlider';

const ServiceCard: React.FC<{
    icon: React.ReactNode;
    title: string;
    description: string;
    ctaText: string;
}> = ({ icon, title, description, ctaText }) => {
    return (
        <div className="flex flex-col h-full p-8 transition-all duration-300 bg-gray-800 border border-gray-700 rounded-lg hover:border-neon-blue hover:shadow-neon-blue hover:-translate-y-2">
            <div className="flex-shrink-0">{icon}</div>
            <h3 className="mt-4 text-2xl font-bold text-white">{title}</h3>
            <p className="flex-grow mt-2 text-gray-400">{description}</p>
            <div className="mt-6">
                 <Link to="/contact" className="inline-block px-6 py-2 font-semibold text-white transition-colors duration-300 rounded-md bg-neon-blue/80 hover:bg-neon-blue">
                    {ctaText}
                </Link>
            </div>
        </div>
    );
};


const Services: React.FC = () => {
    const { t } = useTranslations();

    const serviceImages = [
        { src: '/images/Nasze Usługi Części Najwyższej Jakości.jpg', alt: 'Części Najwyższej Jakości', title: 'Części Najwyższej Jakości', description: 'Wykonaj naprawę tylko najlepszych części.' },
        { src: '/images/Nasze Usługi Serwis i Naprawa.jpg', alt: 'Serwis i Naprawa', title: t('services.maintenance.title'), description: t('services.maintenance.description') },
        { src: '/images/Nasze Usługi Skup Sprzedaż Zamiana.jpg', alt: 'Skup/Sprzedaż/Zamiana', title: t('services.trade.title'), description: t('services.trade.description') },
        { src: '/images/Nasze Usługi Eksport.png', alt: 'Eksport', title: t('services.export.title'), description: t('services.export.description') },
        { src: '/images/Nasze Usługi Stylizacja i akcesoria.png', alt: 'Stylizacja i akcesoria', title: t('services.styling.title'), description: t('services.styling.description') },
    ];

    const servicesList = [
        {
            icon: <WrenchScrewdriverIcon className="w-12 h-12 text-neon-blue" />,
            title: t('services.maintenance.title'),
            description: t('services.maintenance.description'),
        },
        {
            icon: <SparklesIcon className="w-12 h-12 text-neon-blue" />,
            title: t('services.styling.title'),
            description: t('services.styling.description'),
        },
        {
            icon: <ArrowPathIcon className="w-12 h-12 text-neon-blue" />,
            title: t('services.trade.title'),
            description: t('services.trade.description'),
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-neon-blue"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.07a2.25 2.25 0 0 1-2.25 2.25H5.625a2.25 2.25 0 0 1-2.25-2.25v-4.07a2.25 2.25 0 0 1 .928-1.758l7.5-4.5a2.25 2.25 0 0 1 2.646 0l7.5 4.5a2.25 2.25 0 0 1 .928 1.758Z" /></svg>,
            title: t('services.export.title'),
            description: t('services.export.description'),
        }
    ];

    return (
        <div className="py-16 bg-gray-900 sm:py-24">
            <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center lg:max-w-4xl">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        {t('services.title')}
                    </h2>
                </div>
                
                <div className="mt-12">
                    <ImageSlider images={serviceImages} />
                </div>

                <div className="grid max-w-2xl grid-cols-1 gap-8 mx-auto mt-24 lg:max-w-none lg:grid-cols-2">
                    {servicesList.map((service, index) => (
                        <ServiceCard 
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                            ctaText={t('services.cta')}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;