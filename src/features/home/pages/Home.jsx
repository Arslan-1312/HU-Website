import React from 'react';
import Hero from '../components/Hero';
import HomeAlert from '../components/HomeAlert';
import InfoMarquee from '../components/InfoMarquee';
import QuickActions from '../components/QuickActions';
import PromoBanners from '../components/PromoBanners';
import MainContent from '../components/MainContent';
import StatsCounter from '../components/StatsCounter';
import QuoteSection from '../components/QuoteSection';
import BottomLinks from '../components/BottomLinks';

/**
 * Home Page Component
 * 
 * This is the main landing page of the Hazara University website.
 * It has been modularized into separate components for maintainability
 * and follows the design extracted from the original website.
 */
const Home = () => {
    return (
        <div className="font-roboto text-center  bg-white overflow-hidden">
            {/* 0. Home Alert: Popup on visit/refresh */}
            <HomeAlert />

            {/* 1. Hero Carousel: Dynamic sliding images */}
            <Hero />

            {/* 2. Scrolling Marquee: Latest updates and merit lists */}
            <InfoMarquee />

            {/* 3. Quick Actions: Icons for Portals, Gallery, Tenders, etc. */}
            <QuickActions />

            {/* 4. Promotional Banners: Call to action images */}
            <PromoBanners />

            {/* 5. Main Information Grid: VC Message, Highlights, and News */}
            <MainContent />

            {/* 6. University Stats: Departments, Programs, Faculty, Students */}
            <StatsCounter />

            {/* 7. Inspiration Section: Educational quotes */}
            <QuoteSection />

            {/* 8. Utility Links: About, Mission, Transport, etc. */}
            <BottomLinks />
        </div>
    );
};

export default Home;
