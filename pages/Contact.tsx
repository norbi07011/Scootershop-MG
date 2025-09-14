import React, { useState } from 'react';
import { useTranslations } from '../hooks/useTranslations';
import { Calendar } from '../components/Calendar';

type ServiceType = 'repair' | 'trade' | 'other' | '';

interface FormData {
    name: string;
    email: string;
    phone:string;
    service: ServiceType;
    message: string;
    repairDetails: {
        engine: boolean;
        tires: boolean;
        electrical: boolean;
        damage: boolean;
        maintenance: boolean;
    };
    tradeDetails: {
        model: string;
        year: string;
        mileage: string;
    };
    appointmentDate: Date | null;
}

const Contact: React.FC = () => {
    const { t, language } = useTranslations();
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        repairDetails: {
            engine: false,
            tires: false,
            electrical: false,
            damage: false,
            maintenance: false,
        },
        tradeDetails: {
            model: '',
            year: '',
            mileage: '',
        },
        appointmentDate: null,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleServiceChange = (service: ServiceType) => {
        if (service !== 'repair') {
            setFormData(prev => ({ ...prev, service, appointmentDate: null }));
        } else {
            setFormData(prev => ({ ...prev, service }));
        }
    };

    const handleRepairCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            repairDetails: { ...prev.repairDetails, [name as keyof typeof formData.repairDetails]: checked }
        }));
    };

    const handleTradeInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            tradeDetails: { ...prev.tradeDetails, [name as keyof typeof formData.tradeDetails]: value }
        }));
    };

    const handleDateSelect = (date: Date) => {
        setFormData(prev => ({ ...prev, appointmentDate: date }));
    };


    const generateMessageBody = (): string => {
        let body = `${t('contact.form.name')}: ${formData.name}\n`;
        body += `${t('contact.form.phone')}: ${formData.phone}\n`;
        body += `${t('contact.form.email')}: ${formData.email}\n`;

        if (formData.service) {
            body += `\n${t('contact.form.service')}: ${t(`contact.form.services.${formData.service}`)}\n`;
        }

        if (formData.service === 'repair') {
            const selectedRepairs = Object.entries(formData.repairDetails)
                .filter(([, checked]) => checked)
                .map(([repairKey]) => t(`contact.form.repair_options.${repairKey}`))
                .join(', ');
            
            if (selectedRepairs) {
                body += `\n${t('contact.form.repair_details_title')}:\n- ${selectedRepairs.replace(/, /g, '\n- ')}\n`;
            }
            if (formData.appointmentDate) {
                body += `\n${t('contact.form.selected_date')}: ${formData.appointmentDate.toLocaleDateString(language)}\n`;
            }
        }

        if (formData.service === 'trade') {
            body += `\n--- ${t('contact.form.trade_details_title')} ---\n`;
            body += `${t('contact.form.trade_options.model')}: ${formData.tradeDetails.model}\n`;
            body += `${t('contact.form.trade_options.year')}: ${formData.tradeDetails.year}\n`;
            body += `${t('contact.form.trade_options.mileage')}: ${formData.tradeDetails.mileage}\n`;
        }

        body += `\n--- ${t('contact.form.message')} ---\n${formData.message}`;

        return body;
    };

    const handleWhatsAppSubmit = () => {
        const text = generateMessageBody();
        const whatsappUrl = `https://wa.me/31633687980?text=${encodeURIComponent(text)}`;
        window.open(whatsappUrl, '_blank');
    };

    const handleEmailSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const body = generateMessageBody();
        const subject = formData.service ? t(`contact.form.services.${formData.service}`) : 'Contact Form Submission';
        const mailtoUrl = `mailto:info@scootershop-mg.nl?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoUrl;
    };
    
    const services: ServiceType[] = ['repair', 'trade', 'other'];
    const repairOptions = ['engine', 'tires', 'electrical', 'damage', 'maintenance'];

    return (
        <div className="py-16 bg-gray-900 sm:py-24">
            <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{t('contact.title')}</h2>
                    <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-400">{t('contact.subtitle')}</p>
                </div>
                
                <div className="grid grid-cols-1 gap-16 mt-16 lg:grid-cols-2">
                    <form onSubmit={handleEmailSubmit} className="space-y-8">
                        {/* Basic Info */}
                        <div className="space-y-6">
                            <input type="text" name="name" placeholder={t('contact.form.name') + ' *'} required value={formData.name} onChange={handleInputChange} className="w-full px-4 py-3 text-white transition-colors duration-300 bg-gray-800 border-2 border-gray-700 rounded-md focus:border-neon-blue focus:ring-0" />
                            <input type="email" name="email" placeholder={t('contact.form.email') + ' *'} required value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 text-white transition-colors duration-300 bg-gray-800 border-2 border-gray-700 rounded-md focus:border-neon-blue focus:ring-0" />
                            <input type="tel" name="phone" placeholder={t('contact.form.phone') + ' *'} required value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 text-white transition-colors duration-300 bg-gray-800 border-2 border-gray-700 rounded-md focus:border-neon-blue focus:ring-0" />
                        </div>
                        
                        {/* Service Selection */}
                        <div>
                             <h3 className="mb-4 text-lg font-medium text-gray-300">{t('contact.form.service')} *</h3>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                {services.map(service => (
                                    <button key={service} type="button" onClick={() => handleServiceChange(service)} className={`px-4 py-3 text-center rounded-md transition-all duration-300 border-2 ${formData.service === service ? 'bg-neon-blue/80 border-neon-blue text-white shadow-neon-blue' : 'bg-gray-800 border-gray-700 text-gray-300 hover:border-neon-blue/50'}`}>
                                        {t(`contact.form.services.${service}`)}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Conditional Fields */}
                        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${formData.service ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            {/* Repair Details */}
                            {formData.service === 'repair' && (
                                <div className="p-6 mt-6 space-y-4 bg-gray-800/50 rounded-lg">
                                    <h4 className="font-semibold text-white">{t('contact.form.repair_details_title')}</h4>
                                    <div className="grid grid-cols-2 gap-4">
                                        {repairOptions.map(opt => (
                                            <label key={opt} className="flex items-center space-x-3 text-gray-300 cursor-pointer">
                                                <input type="checkbox" name={opt} checked={formData.repairDetails[opt as keyof typeof formData.repairDetails]} onChange={handleRepairCheckboxChange} className="w-5 h-5 text-neon-blue bg-gray-700 border-gray-600 rounded-sm form-checkbox focus:ring-neon-blue/50 focus:ring-offset-gray-800" />
                                                <span>{t(`contact.form.repair_options.${opt}`)}</span>
                                            </label>
                                        ))}
                                    </div>
                                    <div className="pt-4 mt-4 border-t border-gray-700">
                                        <h4 className="mb-4 font-semibold text-white">{t('contact.form.appointment_date_title')}</h4>
                                        <Calendar
                                            selectedDate={formData.appointmentDate}
                                            onDateSelect={handleDateSelect}
                                        />
                                    </div>
                                </div>
                            )}
                            {/* Trade-in Details */}
                            {formData.service === 'trade' && (
                                <div className="p-6 mt-6 space-y-4 bg-gray-800/50 rounded-lg">
                                    <h4 className="font-semibold text-white">{t('contact.form.trade_details_title')}</h4>
                                    <input type="text" name="model" placeholder={t('contact.form.trade_options.model')} value={formData.tradeDetails.model} onChange={handleTradeInputChange} className="w-full px-4 py-3 text-white transition-colors duration-300 bg-gray-800 border-2 border-gray-700 rounded-md focus:border-neon-blue focus:ring-0" />
                                    <input type="text" name="year" placeholder={t('contact.form.trade_options.year')} value={formData.tradeDetails.year} onChange={handleTradeInputChange} className="w-full px-4 py-3 text-white transition-colors duration-300 bg-gray-800 border-2 border-gray-700 rounded-md focus:border-neon-blue focus:ring-0" />
                                    <input type="text" name="mileage" placeholder={t('contact.form.trade_options.mileage')} value={formData.tradeDetails.mileage} onChange={handleTradeInputChange} className="w-full px-4 py-3 text-white transition-colors duration-300 bg-gray-800 border-2 border-gray-700 rounded-md focus:border-neon-blue focus:ring-0" />
                                </div>
                            )}
                        </div>

                        {/* Message */}
                        <div>
                            <textarea id="message" name="message" rows={5} required value={formData.message} onChange={handleInputChange} placeholder={t('contact.form.message') + ' *'} className="w-full px-4 py-3 text-white transition-colors duration-300 bg-gray-800 border-2 border-gray-700 rounded-md focus:border-neon-blue focus:ring-0"></textarea>
                        </div>
                        
                        {/* Submit Buttons */}
                        <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                            <button type="button" onClick={handleWhatsAppSubmit} className="flex-1 px-6 py-3 font-semibold text-white transition-transform duration-300 transform bg-green-600 rounded-md hover:bg-green-700 hover:scale-105">{t('contact.form.cta_whatsapp')}</button>
                            <button type="submit" className="flex-1 px-6 py-3 font-semibold text-white transition-transform duration-300 transform rounded-md bg-neon-red hover:bg-red-700 hover:scale-105">{t('contact.form.cta_email')}</button>
                        </div>
                    </form>

                    <div className="space-y-8">
                        <div className="p-6 bg-gray-800 rounded-lg">
                            <h3 className="text-xl font-bold text-white">{t('contact.info.title')}</h3>
                            <div className="mt-4 space-y-3 text-gray-300">
                                <p><strong className="text-neon-blue">{t('contact.info.address')}:</strong> {t('contact.info.address_value')}</p>
                                <p><strong className="text-neon-blue">{t('contact.info.phone')}:</strong> <a href="https://wa.me/31633687980" target="_blank" rel="noopener noreferrer" className="hover:underline">+31 6 33687980</a></p>
                                <p><strong className="text-neon-blue">{t('contact.info.email')}:</strong> <a href="mailto:info@scootershop-mg.nl" className="hover:underline">info@scootershop-mg.nl</a></p>
                            </div>
                        </div>

                        <div className="p-6 bg-gray-800 rounded-lg">
                            <h3 className="text-xl font-bold text-white">{t('contact.hours.title')}</h3>
                            <ul className="mt-4 space-y-1 text-gray-300">
                                <li>{t('contact.hours.monday')}: {t('contact.hours.times')}</li>
                                <li>{t('contact.hours.tuesday')}: {t('contact.hours.times')}</li>
                                <li>{t('contact.hours.wednesday')}: <span className="font-semibold text-neon-red">{t('contact.hours.closed')}</span></li>
                                <li>{t('contact.hours.thursday')}: {t('contact.hours.times')}</li>
                                <li>{t('contact.hours.friday')}: {t('contact.hours.times')}</li>
                                <li>{t('contact.hours.saturday')}: {t('contact.hours.closed')}</li>
                                <li>{t('contact.hours.sunday')}: {t('contact.hours.closed')}</li>
                            </ul>
                        </div>
                        
                        <div className="overflow-hidden rounded-lg shadow-lg">
                             <iframe 
                                src="https://maps.google.com/maps?q=Mangaanstraat%2050a%2C%202544%20DW%20Den%20Haag&t=&z=17&ie=UTF8&iwloc=&output=embed"
                                width="100%" 
                                height="300" 
                                style={{ border: 0 }} 
                                allowFullScreen={true}
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Scootershop MG Location"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;