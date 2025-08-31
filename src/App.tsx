import { useEffect } from 'react';
import Hero from './components/Hero';
import Story from './components/Story';
import Calm from './components/Calm';
import EasterEgg from './components/EasterEgg';
import Footer from './components/Footer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
  }, []);
  return (
    <>
      <Hero />
      <Story />
      <Calm />
      <EasterEgg />
      <Footer />
    </>
  );
}