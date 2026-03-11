import React from 'react';
import { Link } from 'react-router-dom';

const PortalCard = ({ title, subtitle, isNew, path }) => {
    return (
        <Link
            to={path}
            className="w-[280px] h-[280px] rounded-full bg-primary-green text-white flex flex-col justify-center items-center mx-auto shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-all duration-250 hover:-translate-y-2 hover:scale-[1.04] hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)] hover:bg-[#1a8c48] active:translate-y-[-2px] active:scale-[0.98] no-underline"
        >
            <img src="assets/logo.png" alt="HU Logo" className="w-[90px] mb-4" loading="lazy" />
            <div className="font-bold tracking-widest text-[1.6rem]">{title}</div>
            <div className="text-[1rem]">{subtitle}</div>
            {isNew && <div className="font-bold text-[1.4rem] mt-2">NEW</div>}
        </Link>
    );
};

export default PortalCard;
