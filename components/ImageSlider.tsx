import React, { useState, useEffect } from 'react';

interface ImageSliderProps {
    images: { src: string; alt: string; title?: string; description?: string; }[];
}

export const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const goToNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const goToPrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            goToNext();
        }, 5000);
        return () => clearInterval(interval);
    }, [activeIndex]);

    return (
        <div className="relative w-full h-[50vh] min-h-[400px] max-h-[600px] flex items-center justify-center overflow-hidden">
            <div className="w-full h-full" style={{ perspective: '1000px' }}>
                <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
                    {images.map((image, index) => {
                        const offset = (index - activeIndex + images.length) % images.length;
                        const isVisible = offset < 3 || offset > images.length - 3; 
                        let transform = '';
                        let zIndex = 0;
                        let opacity = 0;
                        let pointerEvents: 'auto' | 'none' = 'none';

                        if (isVisible) {
                            if (offset === 0) { // Active slide
                                transform = 'translateX(0) translateZ(0) rotateY(0)';
                                zIndex = images.length;
                                opacity = 1;
                                pointerEvents = 'auto';
                            } else if (offset === 1 || offset === 2) { // Next slides
                                transform = `translateX(${offset * 40}%) translateZ(-${offset * 120}px) rotateY(-45deg)`;
                                zIndex = images.length - offset;
                                opacity = 1;
                            } else if (offset === images.length - 1 || offset === images.length - 2) { // Previous slides
                                const prevOffset = images.length - offset;
                                transform = `translateX(-${prevOffset * 40}%) translateZ(-${prevOffset * 120}px) rotateY(45deg)`;
                                zIndex = images.length - prevOffset;
                                opacity = 1;
                            }
                        }

                        return (
                            <div
                                key={index}
                                className="absolute w-[50%] max-w-[450px] h-[75%] top-[12.5%] left-0 right-0 mx-auto transition-transform duration-500 ease-out"
                                style={{
                                    transform: transform,
                                    zIndex: zIndex,
                                    opacity: opacity,
                                    pointerEvents: pointerEvents
                                }}
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="object-cover w-full h-full rounded-lg shadow-2xl shadow-black/50"
                                />
                                {(image.title || image.description) && offset === 0 && (
                                     <div className="absolute bottom-0 left-0 w-full p-4 text-white transition-opacity duration-300 bg-black bg-opacity-60 rounded-b-lg">
                                        {image.title && <h3 className="text-lg font-bold">{image.title}</h3>}
                                        {image.description && <p className="mt-1 text-sm">{image.description}</p>}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            <button
                onClick={goToPrev}
                className="absolute z-30 p-2 transform -translate-y-1/2 bg-black rounded-full left-4 sm:left-8 top-1/2 bg-opacity-40 hover:bg-opacity-60 transition-colors"
                aria-label="Previous slide"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button
                onClick={goToNext}
                className="absolute z-30 p-2 transform -translate-y-1/2 bg-black rounded-full right-4 sm:right-8 top-1/2 bg-opacity-40 hover:bg-opacity-60 transition-colors"
                aria-label="Next slide"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </button>
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${activeIndex === index ? 'bg-white' : 'bg-gray-500 hover:bg-gray-400'}`}
                        aria-label={`Go to slide ${index + 1}`}
                    ></button>
                ))}
            </div>
        </div>
    );
};
