import React from 'react';
import { Link } from 'react-router-dom';
import { marqueeLinks } from '../../../data/homeData';

/**
 * InfoMarquee provides a scrolling news ticker for important announcements.
 * Styled with the university's signature green.
 */
const InfoMarquee = () => {
    const links = marqueeLinks;

    return (
        <div className="bg-nav-green text-white py-3 overflow-hidden border-b border-white/20">
            <div className="whitespace-nowrap inline-block animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused]">
                {links.map((link, i) => (
                    <React.Fragment key={i}>
                        <Link
                            to={link.path}
                            className="font-bold mx-8 tracking-wide hover:underline text-white no-underline inline-block"
                        >
                            {link.text}
                        </Link>
                        <span className="mx-8 text-white/60">|</span>
                    </React.Fragment>
                ))}

                {/* Duplicate content for seamless infinite scrolling */}
                {links.map((link, i) => (
                    <React.Fragment key={`dup-${i}`}>
                        <Link
                            to={link.path}
                            className="font-bold mx-8 tracking-wide hover:underline text-white no-underline inline-block"
                        >
                            {link.text}
                        </Link>
                        <span className="mx-8 text-white/60">|</span>
                    </React.Fragment>
                ))}
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            ` }} />
        </div>
    );
};

export default React.memo(InfoMarquee);
