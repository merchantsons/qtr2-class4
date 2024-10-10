import React from 'react';

const App = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
                {/* Your main content goes here */}
            </main>
            <Footer />
        </div>
    );
};

const Footer = () => {
    return (
        <div className="bg-green-950">
            <footer className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div className="flex flex-col items-center justify-between gap-4 border-t border-b py-6 md:flex-row">

                    {/* social - start */}
                    <div className="flex gap-4">
                        {/* Add your social icons here */}
                        <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                            {/* Social Icon SVG */}
                        </a>
                        {/* Repeat for other social icons */}
                    </div>
                    {/* social - end */}
                </div>
                
                <div className="py-8 text-center text-sm text-gray-200">
                    {/* nav - start */}
                <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-6">
                    <a href="#" className="text-gray-200 transition duration-100 hover:text-yellow-500 active:text-yellow-700">About</a>
                    <a href="#" className="text-gray-200 transition duration-100 hover:text-yellow-500 active:text-yellow-700">Investor Relations</a>
                    <a href="#" className="text-gray-200 transition duration-100 hover:text-yellow-500 active:text-yellow-700">Jobs</a>
                    <a href="#" className="text-gray-200 transition duration-100 hover:text-yellow-500 active:text-yellow-700">Press</a>
                    <a href="#" className="text-gray-200 transition duration-100 hover:text-yellow-500 active:text-yellow-700">Blog</a>
                </nav>
                {/* nav - end */}
                    © 2024 - Governor IT Initiative. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default App;
