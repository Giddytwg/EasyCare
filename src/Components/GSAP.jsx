import React, {  useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const RollingBall = () => {
  const ballRef = useRef(null);

  useGSAP(() => {
    const ball = ballRef.current;

    // Animate the ball vertically as the user scrolls
    gsap.to(ball, {
      y: () => document.documentElement.scrollHeight - window.innerHeight, // Move down based on page height
      rotation: 360 * 5, // Roll multiple times
      ease: 'none',
      scrollTrigger: {
        trigger: document.body, // Use the entire page as the trigger
        start: 'top top', // Start when the top of the page is reached
        end: 'bottom bottom', // End when the bottom of the page is reached
        scrub: true, // Sync animation with scroll
      },
    });

  }, []);

  return (
    <div className="h-[300vh] bg-gray-100">
      {/* Ball Element */}
      <div
        ref={ballRef}
        className="w-16 h-16 bg-blue-500 rounded-full fixed left-1/2 transform -translate-x-1/2 shadow-lg"
      >dd</div>

      {/* Page Content for Scroll */}
      <div className="w-full max-w-2xl mx-auto mt-20 text-center">
        <h1 className="text-3xl font-bold">Scroll Down to Move the Ball</h1>
        <p className="mt-10 text-gray-600">
          The ball will move vertically and rotate as you scroll. This effect
          spans the entire page height.
        </p>
      </div>
    </div>
  );
};

export default RollingBall;
