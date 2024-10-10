"use client"
import React, { useState } from 'react';
import Link from 'next/link';


const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false); // Close the menu when a link is clicked
    };

    return (
        <div className="headerback fixed top-0 z-50 w-full">
            {/* Full navbar for larger screens */}
            <div className="hidden md:flex justify-between mx-auto w-11/12 p-5">
                <a href="/"><div className='logo absolute'></div></a>
                <ul className="flex space-x-8 text-white pr-40">
                    <li><Link href="/" className="font-bold p-2 text-white hover:bg-yellow-700 hover:text-black">Home</Link></li>
                    <li><Link href="#" className="font-bold p-2 text-white hover:bg-yellow-700 hover:text-black">Apply</Link></li>
                    <li><Link href="#" className="font-bold p-2 text-white hover:bg-yellow-700 hover:text-black">Jobs</Link></li>
                    <li><Link href="/login" className="font-bold p-2 text-white hover:bg-yellow-700 hover:text-black">Login</Link></li>
                </ul>
            </div>

            {/* Hamburger menu for small screens */}
            <div className="md:hidden flex justify-between items-center p-4">
                <a href="/"><div className='absolute logo'></div></a>
                <button onClick={toggleMenu} className="text-white">
                    {/* Hamburger icon */}
                    {isMenuOpen ? '✖' : '☰'}
                </button>
            </div>

            {/* Dropdown menu for small screens */}
            {isMenuOpen && (
                
                <div className="md:hidden headerback inharite text-right">                    
                    <ul className="flex flex-col space-y-2 p-5 text-white">
                        <li><Link href="/" className="font-semibold hover:bg-yellow-600 hover:text-black p-2 pr-10" onClick={handleLinkClick}>Home</Link></li>
                        <li><Link href="#" className="font-semibold hover:bg-yellow-600 hover:text-black p-2 pr-10" onClick={handleLinkClick}>Apply</Link></li>
                        <li><Link href="#" className="font-semibold hover:bg-yellow-600 hover:text-black p-2 pr-10" onClick={handleLinkClick}>Jobs</Link></li>
                        <li><Link href="/login" className="font-semibold hover:bg-yellow-600 hover:text-black p-2 pr-10" onClick={handleLinkClick}>Login</Link></li>
                    </ul>
                </div>
            )}

            <style jsx>{`

                // .logo {                    
                //     width: 100px;
                //     height: 50px;
                //     background-image: url('/logo.gif'); 
                //     background-size: contain;
                //     background-repeat: no-repeat;
                // }


                button {
                    cursor: pointer;
                    font-size: 30px; /* Adjust size of the hamburger icon */
                    
                }
                button:hover {
                    background-color: rgb(30, 61, 51);
                    width:10%;
                    
                }
                
            `}</style>
        </div>
    );
};

export default Header;