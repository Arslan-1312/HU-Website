import React from 'react';
import { Link } from 'react-router-dom';
import { bottomLinksData } from '../../../data/homeData';

/**
 * BottomLinks displays mission, vision, and other quick resource links.
 */
const BottomLinks = () => {
  const links = bottomLinksData;

  return (
    <section className="container mx-auto px-4 mb-20">

      {/* Responsive gap */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-11 lg:gap-16">

        {links.map((link, i) => (
          <Link
            key={i}
            to={link.path}
            className="flex flex-col items-center group cursor-pointer no-underline w-28"
          >
            <div
              className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 border-2 border-primary-green transition-all duration-300 ${link.filled
                ? 'bg-primary-green text-white group-hover:bg-white group-hover:text-primary-green shadow-lg'
                : 'bg-white text-primary-green group-hover:bg-primary-green group-hover:text-white'
                }`}
            >
              <i className={`${link.icon} text-3xl`}></i>
            </div>

            <h6
              className="
                font-black text-primary-green uppercase transition-colors group-hover:text-nav-green
                text-[10px] tracking-[0.15em]
                text-center
                leading-tight
                whitespace-normal md:whitespace-nowrap
                min-h-[2.25rem]
                pb-1
              "
            >
              {link.title}
            </h6>

          </Link>
        ))}

      </div>
    </section>
  );
};

export default React.memo(BottomLinks);
