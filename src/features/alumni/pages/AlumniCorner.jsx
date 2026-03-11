import React from "react";
import { alumniCornerData } from "../../../data/alumniData";

/**
 * Alumni Portal Page - Alumni Corner Section (Frontend Only Version)
 * Matches the directory UI from the provided image.
 */
const AlumniCorner = () => {
  const data = alumniCornerData;
  const alumniData = data.members;

  // pagination numbers (dummy)
  const pageNumbers1 = data.pagination.pageNumbers1;
  const pageNumbers2 = data.pagination.pageNumbers2;

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Main Content Area */}
      <div className="mx-4 md:mx-12 py-10 flex flex-col lg:flex-row gap-10">
        {/* Left Side: Alumni Directory */}
        <div className="lg:w-2/3">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="mb-8">
              <h3 className="text-3xl font-black text-green-700 mb-1">
                {data.title}
              </h3>
              <p className="text-gray-600 font-medium">
                {data.membersCountText.replace('{count}', alumniData.length)}
              </p>
            </div>

            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 pb-4 border-b-2 border-gray-100 mb-6 text-green-900 font-bold text-lg">
              {data.headers.map((header, i) => (
                <div key={i} className={header === 'Picture' ? 'col-span-3' : header === 'Information' ? 'col-span-4' : 'col-span-5'}>
                  {header}
                </div>
              ))}
            </div>

            {/* Alumni List */}
            <div className="space-y-8">
              {alumniData.map((alumni) => (
                <div
                  key={alumni.id}
                  className="grid grid-cols-12 gap-4 pb-8 border-b border-gray-100 last:border-0"
                >
                  {/* Picture */}
                  <div className="col-span-3 flex items-start">
                    <div className="w-20 h-20 rounded-full border-2 border-green-600 flex items-center justify-center bg-gray-50 overflow-hidden">
                      {alumni.image ? (
                        <img
                          src={alumni.image}
                          alt={alumni.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <svg
                          className="w-12 h-12 text-gray-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                      )}
                    </div>
                  </div>

                  {/* Information */}
                  <div className="col-span-4 space-y-1 text-sm">
                    <p>
                      <span className="font-bold">Name:</span> {alumni.name}
                    </p>
                    <p>
                      <span className="font-bold">Current Job Title:</span>{" "}
                      {alumni.jobTitle}
                    </p>
                    <p>
                      <span className="font-bold">Company Name:</span>{" "}
                      {alumni.company}
                    </p>
                    <button className="text-green-600 font-bold hover:underline mt-2 block">
                      View Detail
                    </button>
                  </div>

                  {/* Programs */}
                  <div className="col-span-5 space-y-1 text-sm">
                    <p>
                      <span className="font-bold">Programme:</span>{" "}
                      {alumni.programme}
                    </p>
                    <p>
                      <span className="font-bold">Year of Passing:</span>{" "}
                      {alumni.year}
                    </p>
                    <p>
                      <span className="font-bold">Current Status:</span>{" "}
                      {alumni.status}
                    </p>
                    <p>
                      <span className="font-bold">Contact Via:</span> Chat (
                      {alumni.status})
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-10 flex flex-wrap gap-1 justify-center">
              <button className="px-3 py-1 border border-gray-300 rounded text-xs text-gray-500 hover:bg-gray-50">
                «
              </button>

              <button className="px-3 py-1 bg-green-800 text-white rounded text-xs font-bold">
                1
              </button>

              {pageNumbers1.map((num) => (
                <button
                  key={num}
                  className="px-3 py-1 border border-gray-300 rounded text-xs text-gray-600 hover:bg-gray-50"
                >
                  {num}
                </button>
              ))}

              <span className="px-2 text-gray-400">...</span>

              {pageNumbers2.map((num) => (
                <button
                  key={num}
                  className="px-3 py-1 border border-gray-300 rounded text-xs text-gray-600 hover:bg-gray-50"
                >
                  {num}
                </button>
              ))}

              <button className="px-3 py-1 border border-gray-300 rounded text-xs text-gray-500 hover:bg-gray-50">
                »
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Login Panel */}
        <div className="lg:w-1/3">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 sticky top-24">
            <div className="bg-gradient-to-r from-primary-green to-dark-green text-white text-center py-4 rounded-xl mb-8 font-black uppercase tracking-tighter">
              Login / Register
            </div>

            <form className="space-y-5">
              <div>
                <label className="block text-[10px] font-black uppercase text-gray-400 mb-2 ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-600 focus:bg-white outline-none transition-all text-sm"
                  placeholder="yourname@alumni.hu.edu.pk"
                />
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase text-gray-400 mb-2 ml-1">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-600 focus:bg-white outline-none transition-all text-sm"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="button"
                className="w-full bg-green-900 hover:bg-black text-white py-4 rounded-xl font-black uppercase tracking-widest transition-all shadow-lg hover:shadow-green-200 mt-4"
              >
                Sign In
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-center">
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                Help? 0995-123456
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniCorner;
