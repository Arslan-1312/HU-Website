import React from 'react';
import { Link } from 'react-router-dom';

const QuickActionIcon = ({ id, icon, title, bgColor, path = "#" }) => {
    const isInternal = path.startsWith('/');

    const Content = (
        <div id={id} className="bg-white shadow-sm p-4 border rounded h-full transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
            <div className={`w-[60px] h-[60px] rounded-full flex items-center justify-center text-2xl text-white mb-2 mx-auto ${bgColor}`}>
                <i className={icon}></i>
            </div>
            <h6 className="text-[13px] font-semibold mt-[10px] mb-0">{title}</h6>
        </div>
    );

    if (isInternal) {
        return (
            <Link to={path} className="text-decoration-none text-dark group">
                {Content}
            </Link>
        );
    }

    return (
        <a href={path} className="text-decoration-none text-dark group">
            {Content}
        </a>
    );
};

export default QuickActionIcon;
