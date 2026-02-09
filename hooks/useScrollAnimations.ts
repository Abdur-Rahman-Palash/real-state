'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimations = () => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    // Create GSAP context
    const ctx = gsap.context(() => {
      // Animate sections on scroll
      const sections = element.querySelectorAll('[data-scroll-section]');
      
      sections.forEach((section, index) => {
        gsap.from(section, {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          }
        });
      });

      // Animate cards with stagger
      const cards = element.querySelectorAll('[data-scroll-card]');
      
      gsap.from(cards, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: cards[0],
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        }
      });

      // Parallax effect for background elements
      const parallaxElements = element.querySelectorAll('[data-parallax]');
      
      parallaxElements.forEach((element) => {
        gsap.to(element, {
          yPercent: -50,
          ease: 'none',
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          }
        });
      });

      // Scale animations for featured items
      const scaleElements = element.querySelectorAll('[data-scroll-scale]');
      
      scaleElements.forEach((element) => {
        gsap.from(element, {
          scale: 0.8,
          opacity: 0,
          duration: 1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          }
        });
      });

    }, element);

    return () => ctx.revert();
  }, []);

  return containerRef;
};
