import React, { useState } from 'react';
import { galleryData } from '../../data/academicData';

const Galleryhome = () => {
    const [view, setView] = useState('albums');
    const data = galleryData;

    // Update these paths to match your filenames in public/assets/gallery/
    const albums = data.albums;

    // Example images for the detail view (Image 1 content)
    const albumDetails = data.albumDetails;

    return (
        <div className="container mx-auto px-4 py-12 font-roboto min-h-[80vh]">
            <div className="flex flex-col gap-12">
                <div className="w-full">
                    <h2 className="text-3xl font-extrabold text-primary-green mb-8 flex items-center">
                        <i className="fas fa-images mr-4 text-custom-green"></i>
                        {view === 'albums' ? data.title : data.detailsTitle}
                    </h2>

                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                        {view === 'albums' ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {albums.map((album) => (
                                    <div
                                        key={album.id}
                                        onClick={() => setView('details')}
                                        className="group cursor-pointer"
                                    >
                                        <div className="overflow-hidden rounded-lg border-4 border-gray-100 shadow-md group-hover:border-primary-green transition-all">
                                            {/* Changed src to album.img */}
                                            <img src={album.img} alt={album.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform" loading="lazy" />
                                        </div>
                                        <p className="mt-3 text-center text-[11px] font-bold text-primary-green leading-tight uppercase">
                                            {album.title}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div>
                                <button
                                    onClick={() => setView('albums')}
                                    className="mb-8 bg-dark-green text-white px-6 py-2 rounded-md font-bold text-sm hover:bg-opacity-90 transition-all"
                                >
                                    Go Back to Albums
                                </button>

                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                    {albumDetails.map((imgSrc, i) => (
                                        <div key={i} className="rounded-lg border-4 border-gray-100 shadow-sm overflow-hidden">
                                            {/* Changed src to local imgSrc */}
                                            <img src={imgSrc} alt={`Gallery item ${i}`} className="w-full h-48 object-cover" loading="lazy" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Galleryhome;