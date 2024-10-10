"use client"; // Ensure this is a string
import Link from 'next/link';
import Bubbles from '../components/Bubbles'; // Adjust the import path if necessary
import { useEffect } from 'react';

export default function Contant() {
  useEffect(() => {
    const loginButton = document.getElementById("login-button");

    if (loginButton) {
      loginButton.addEventListener("click", (event) => {
        event.preventDefault();
        const form = document.querySelector('form');
        const wrapper = document.querySelector('.wrapper');

        if (form) {
          form.style.display = 'none'; // Hide the form
        }
        if (wrapper) {
          wrapper.classList.add('form-success'); // Add success class
        }
      });
    }

    return () => {
      if (loginButton) {
        loginButton.removeEventListener("click", () => { });
      }
    };
  }, []);

  return (
    <div className="wrapper">
      <Bubbles />
      <div className="container">
      <div className='font-sans text-red-900 font-bold'>Layout For Main Page</div>
        <div className='text-sm text-red-950 italic'>Click Login Inside Hamburger Menu To Check Login Page Layout</div>
        <div className='font-semibold text-sm text-green-950'>October 8th 2024</div>
        <h1 className='font-bold'>HOME PAGE</h1>
        <div>Qtr 2 - Class 4 Assignment</div>
        
      </div>
    </div>
  );
}
