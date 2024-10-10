// Bubbles.js
import React, { useEffect } from 'react';

const Bubbles = () => {
  useEffect(() => {
    const bubbles = document.querySelectorAll<HTMLLIElement>('.bg-bubbles li');

    bubbles.forEach((bubble) => {
      const randomX = Math.random() * 200; // Random horizontal position
      const randomSize = Math.random() * 60 + 20; // Random size between 20px and 80px
      const randomDuration = Math.random() * 5 + 15; // 5 to 15 seconds for slower movement
      const randomDelay = Math.random() * 1; // Random delay

      const bubbleElement = bubble as HTMLLIElement;
      bubbleElement.style.left = `${randomX}vw`;
      bubbleElement.style.width = `${randomSize}px`;
      bubbleElement.style.height = `${randomSize}px`;
      bubbleElement.style.animationDuration = `${randomDuration}s`; // Increased duration
      bubbleElement.style.animationDelay = `${randomDelay}s`;
    });
  }, []);

  return (
    <ul className="bg-bubbles">      
      {[...Array(10)].map((_, index) => (
        <li key={index} />
      ))}
    </ul>
  );
};

export default Bubbles;
