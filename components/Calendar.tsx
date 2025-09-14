import React, { useState } from 'react';
import { useTranslations } from '../hooks/useTranslations';
import { ChevronLeftIcon, ChevronRightIcon } from './icons';

interface CalendarProps {
    selectedDate: Date | null;
    onDateSelect: (date: Date) => void;
}

export const Calendar: React.FC<CalendarProps> = ({ selectedDate, onDateSelect }) => {
    const { t } = useTranslations();
    const [currentDate, setCurrentDate] = useState(new Date());

    const daysOfWeek = t('calendar.days_short').split(',');
    const monthNames = t('calendar.months').split(',');

    const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const startDateDay = startOfMonth.getDay(); // 0 for Sunday
    const numDays = endOfMonth.getDate();

    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    const handleDateClick = (day: number) => {
        const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        if (newDate >= today) {
            onDateSelect(newDate);
        }
    };
    
    const isSelected = (day: number) => {
        if (!selectedDate) return false;
        return selectedDate.getDate() === day &&
               selectedDate.getMonth() === currentDate.getMonth() &&
               selectedDate.getFullYear() === currentDate.getFullYear();
    };

    const isPast = (day: number) => {
        const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return date < today;
    };

    const renderCalendarDays = () => {
        const days = [];
        for (let i = 0; i < startDateDay; i++) {
            days.push(<div key={`empty-start-${i}`} className="w-10 h-10"></div>);
        }
        for (let day = 1; day <= numDays; day++) {
            const past = isPast(day);
            const selected = isSelected(day);
            days.push(
                <button
                    type="button"
                    key={day}
                    onClick={() => handleDateClick(day)}
                    disabled={past}
                    className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-200 
                        ${selected ? 'bg-neon-blue text-white shadow-neon-blue' : ''}
                        ${!selected && !past ? 'hover:bg-gray-700' : ''}
                        ${past ? 'text-gray-600 cursor-not-allowed' : 'text-gray-300'}
                    `}
                >
                    {day}
                </button>
            );
        }
        return days;
    };
    
    return (
        <div className="p-4 bg-gray-900/50 rounded-lg">
            <div className="flex items-center justify-between mb-4">
                <button type="button" onClick={handlePrevMonth} className="p-2 transition-colors rounded-full hover:bg-gray-700" aria-label="Previous month">
                    <ChevronLeftIcon className="w-5 h-5 text-gray-300" />
                </button>
                <div className="font-bold text-white text-lg">
                    {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                </div>
                <button type="button" onClick={handleNextMonth} className="p-2 transition-colors rounded-full hover:bg-gray-700" aria-label="Next month">
                    <ChevronRightIcon className="w-5 h-5 text-gray-300" />
                </button>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-gray-400 text-sm font-semibold">
                {daysOfWeek.map(day => <div key={day} className="w-10 h-10 flex items-center justify-center">{day}</div>)}
            </div>
            <div className="grid grid-cols-7 gap-1 mt-2">
                {renderCalendarDays()}
            </div>
        </div>
    );
};
