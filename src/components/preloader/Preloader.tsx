import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import '../../styles/fonts.css';

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [isFontReady, setIsFontReady] = useState(false);
  const elements = {
    preloader: useRef<HTMLDivElement>(null),
    letters: {
      g: useRef<HTMLSpanElement>(null),
      hyphen: useRef<HTMLSpanElement>(null),
      n: useRef<HTMLSpanElement>(null),
      i: useRef<HTMLSpanElement>(null)
    },
    tagline: useRef<HTMLDivElement>(null)
  };

  useEffect(() => {
    // Wait 1 second to ensure font loads
    const fontLoadTimeout = setTimeout(() => {
      setIsFontReady(true);
    }, 1000);

    return () => clearTimeout(fontLoadTimeout);
  }, []);

  useEffect(() => {
    if (!isFontReady) return; // Don't start animation until font is "ready"

    const tl = gsap.timeline();
    
    // Set initial state
    gsap.set(Object.values(elements.letters).map(l => l.current), {
      opacity: 0,
      y: 20
    });
    gsap.set(elements.tagline.current, {
      opacity: 0,
      y: 20
    });

    // Animation sequence
    tl.to(elements.letters.g.current, {
      opacity: 1,
      y: 0,
      duration: 0.3,
      ease: "power2.out"
    })
    .to(elements.letters.hyphen.current, {
      opacity: 1,
      y: 0,
      duration: 0.3,
      ease: "power2.out"
    }, "+=0.2")
    .to(elements.letters.n.current, {
      opacity: 1,
      y: 0,
      duration: 0.3,
      ease: "power2.out"
    }, "+=0.2")
    .to(elements.letters.i.current, {
      opacity: 1,
      y: 0,
      duration: 0.3,
      ease: "power2.out"
    }, "+=0.2")
    .to(elements.tagline.current, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out"
    }, "+=0.3")
    .to(elements.preloader.current, {
      y: '-100vh',
      duration: 1.2,
      ease: "power2.in",
      onComplete: onComplete
    }, "+=0.5");

    return () => tl.kill();
  }, [isFontReady, onComplete]);

  return (
    <div 
      ref={elements.preloader}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#1F5AAA]"
    >
      <div 
        className="font-bold text-white flex items-center"
        style={{ fontFamily: "'Gütten', sans-serif" }}
      >
        <span ref={elements.letters.g} className="opacity-0 text-[25vw] md:text-[150px]">g</span>
        <span ref={elements.letters.hyphen} className="opacity-0 mx-1 md:mx-4 text-[25vw] md:text-[150px]">-</span>
        <span ref={elements.letters.n} className="opacity-0 text-[25vw] md:text-[150px]">n</span>
        <span ref={elements.letters.i} className="opacity-0 text-[25vw] md:text-[150px]">i</span>
      </div>
      <div 
        ref={elements.tagline}
        className="opacity-0 mt-2 md:mt-4 text-white text-[4vw] md:text-3xl tracking-wider"
        style={{ fontFamily: "'Gütten', sans-serif" }}
      >
        Gateway of New International
      </div>
    </div>
  );
};

export default Preloader;