// pages/success.js

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Typed from 'typed.js';

const Success = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Thank you for contacting us.'],
      typeSpeed: 50, // Typing speed in milliseconds
      loop: false // Whether to loop the animation
    };

    const typed = new Typed(textRef.current, options);

    return () => {
      typed.destroy(); // Clean up Typed.js instance
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-100">
      <h1 className="text-3xl font-bold text-red-800 pb-10">Contact successful!</h1>
      <p ref={textRef} className="text-6xl font-bold mb-4 text-green-600"></p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}

export default Success;
