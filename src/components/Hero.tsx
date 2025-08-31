import { useRef, useEffect } from 'react';
import lottie from 'lottie-web';
import { gsap } from 'gsap';
import heartData from '../assets/lottie-heart.json';

export default function Hero() {
    const lottieRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        lottie.loadAnimation({
            container: lottieRef.current!,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: heartData,
        });

        gsap.fromTo(
            titleRef.current,
            { opacity: 0, y: 60 },
            { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
        );
    }, []);

    return (
        <section id="hero" style={{ height: '100vh', display: 'grid', placeItems: 'center' }}>
            <div ref={lottieRef} style={{ width: 200, height: 200 }} />
            <h1 ref={titleRef} style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', textAlign: 'center' }}>
                Hey Anya, I’m right here.
            </h1>
        </section>
    );
}