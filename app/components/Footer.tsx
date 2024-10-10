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
        <div className="bg-green-950 absolute bottom-0 w-full">
            <footer className="mx-auto px-4 md:px-8">
 
                
                <div className="py-2 text-center text-sm text-gray-200">
                    {/* nav - start */}
                <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-start md:gap-2">
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
