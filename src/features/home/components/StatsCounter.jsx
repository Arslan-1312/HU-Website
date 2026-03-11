import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { universityStats } from '../../../data/homeData';

const StatsCounter = React.memo(() => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Animation only happens once
        threshold: 0.1,    // Starts when 20% of the component is visible
    });

    const stats = universityStats;

    return (
        <section ref={ref} className="container mx-auto px-4 mb-20">
            <div className="bg-custom-green rounded-[2rem] shadow-2xl p-8 md:p-14 overflow-hidden relative border border-white/10">
                {/* Modern Decorative Backgrounds */}
                <div className="absolute top-[-10%] right-[-5%] w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-64 h-64 bg-black/20 rounded-full blur-2xl"></div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 text-center text-white relative z-10">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`group transition-all duration-100 hover:-translate-y-2 ${index !== stats.length - 1 ? 'md:border-r border-white/10' : ''
                                } px-2`}
                        >
                            {/* Animated Icon Box */}
                            <div className="mb-6 inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl shadow-inner group-hover:bg-white/20 transition-colors duration-300">
                                <i className={`${stat.icon} text-3xl group-hover:scale-110 transition-transform duration-300`}></i>
                            </div>

                            {/* Counting Number */}
                            <div className="text-4xl md:text-5xl font-black mb-2 tracking-tight flex justify-center items-center">
                                {inView ? (
                                    <CountUp
                                        start={0}
                                        end={stat.count}
                                        duration={2.5}
                                        separator=","
                                    />
                                ) : (
                                    "0"
                                )}
                                <span>{stat.suffix}</span>
                            </div>

                            {/* Label */}
                            <div className="uppercase text-[11px] font-bold tracking-[0.3em] text-white/70 group-hover:text-white transition-colors">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
});

export default StatsCounter;