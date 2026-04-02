import { Link } from 'react-router-dom';
import MeritAlert from '../components/MeritAlert';

const MeritList = () => {
    const meritLists = [
        {
            title: "General Merit List",
            icon: "fas fa-list-ul",
            path: "/admissions/merit-list/general",
            description: "View the overall ranking and merit lists for all programs."
        },
        {
            title: "Provisional Merit List",
            icon: "fas fa-clipboard-list",
            path: "/admissions/merit-list/provisional",
            description: "View the tentative merit lists for initial scrutiny."
        }
    ];

    return (
        <div className="bg-white py-4 md:py-8 w-full min-h-screen">
            <MeritAlert />
            <div className="container mx-auto px-4 max-w-5xl">
                
                {/* Page Title */}
                <div className="mb-8 border-b-2 border-green-100 pb-4">
                    <h1 className="text-2xl md:text-3xl font-bold text-green-900">
                        Merit List
                    </h1>
                     {/* Information Box */}
                <div className="mt-12 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                    <div className="flex items-start">
                        <i className="fas fa-info-circle text-blue-500 text-xl mt-1 mr-4"></i>
                        <div>
                            <h3 className="font-bold text-blue-900">Important Note</h3>
                            <p className="text-blue-800 text-sm mt-1">
                                Candidates are advised to regularly check the website for updates regarding interviewing schedules and final selection lists. For any queries, please visit the Admission Help Desk.
                            </p>
                        </div>
                    </div> 
                </div>
                 
                </div>
   
         
                {/* Merit List Links */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {meritLists.map((item, index) => (
                        <Link
                            key={index}
                            to={item.path}
                            className="group relative bg-white border-2 border-green-50 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-green-200 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                        >
                            {/* Decorative Background Icon */}
                            <div className="absolute -right-4 -bottom-4 text-green-50 text-8xl opacity-50 group-hover:scale-110 transition-transform duration-500">
                                <i className={item.icon}></i>
                            </div>

                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center text-green-700 text-2xl mb-4 group-hover:bg-green-700 group-hover:text-white transition-colors duration-300">
                                    <i className={item.icon}></i>
                                </div>
                                
                                <h2 className="text-xl font-bold text-gray-900 mb-2">
                                    {item.title}
                                </h2>
                                
                                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                    {item.description}
                                </p>
                            </div>

                            <div className="relative z-10 flex items-center text-green-700 font-bold text-sm uppercase tracking-wider">
                                View Details 
                                <i className="fas fa-arrow-right ml-2 group-hover:translate-x-2 transition-transform"></i>
                            </div>
                        </Link>
                    ))}
                </div>

                </div>
        </div>
    );
};

export default MeritList;
