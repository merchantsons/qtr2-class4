"use client"; // Ensure this is a string

import Bubbles from './bubbles'; // Adjust the import path if necessary
import { useEffect } from 'react';

export default function Home() {
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
       <div className='font-sans text-red-900 font-bold'>Layout For Login Page</div>
        <div>Qtr 2 - Class 4 Assignment</div>
        <h1 className='font-serif'>Login Page</h1>
        <form className="form">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit" id="login-button">
            Login
          </button>
        </form>
      </div>


      <style jsx>{`                
                button {
                  background-color: white;
                  border: 0;
                  padding: 10px 15px;
                  color: var(--prim);
                  border-radius: 3px;
                  width: 100%; 
                  max-width: 250px; 
                  cursor: pointer;
                  font-size: 18px;
                  transition: background-color 0.25s;
                }
                button:hover {
                    width:100%;
                    
                }
                .headerback{
                    background-color: rgb(30, 61, 51);
                }
      `}</style>
    </div>
  );
}
