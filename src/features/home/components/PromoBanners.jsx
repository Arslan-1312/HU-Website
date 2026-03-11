import React from 'react';
import { promoBanners } from '../../../data/homeData';

/**
 * PromoBanners displays visual highlights or advertisements.
 */
const PromoBanners = () => {
    const banners = promoBanners;

    return (
        <section className="container mx-auto px-4 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {banners.map((banner, index) => (
                    <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <img
                            src={banner.src}
                            alt={banner.alt}
                            className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default React.memo(PromoBanners);
