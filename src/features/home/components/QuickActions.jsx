import React from 'react';
import QuickActionIcon from '../../../components/QuickActionIcon';

/**
 * QuickActions section providing immediate access to common university tools.
 */
const QuickActions = () => {
    const actions = [
        {
            icon: "fas fa-images",
            title: "HU Gallery",
            bgColor: "bg-blue-600",
            path: "/Galleryhome"
        },
        {
            icon: "fas fa-link",
            title: "Important Links",
            bgColor: "bg-cyan-500",
            path: "/importantlinks"
        },
        {
            icon: "fas fa-laptop",
            title: "HU Portals",
            bgColor: "bg-red-600",
            path: "/portal" // Direct navigation to the new Portal page
        },
        {
            icon: "fas fa-file-contract",
            title: "HU Tenders",
            bgColor: "bg-blue-700",
            path: "/tenders"
        },
        {
            icon: "fas fa-home",
            title: "Day Care Center",
            bgColor: "bg-amber-500",
            path: "/daycare"
        },
        {
            icon: "fas fa-wheelchair",
            title: "DRC- HU",
            bgColor: "bg-gray-800",
            path: "/drc"
        },
    ];

    return (
        <section className="container mx-auto px-4 my-16">
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                {actions.map((action, index) => (
                    <QuickActionIcon
                        key={index}
                        id={`quick-action-${index}`}
                        {...action}
                    />
                ))}
            </div>
        </section>
    );
};

export default React.memo(QuickActions);
