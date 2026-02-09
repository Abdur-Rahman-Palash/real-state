import { motion, Variants, MotionProps } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const slideInFromTop: Variants = {
  hidden: { opacity: 0, y: -100 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

export const slideInFromBottom: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

export const pageTransition: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.4, ease: "easeInOut" }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.3, ease: "easeInOut" }
  }
};

export const cardHover: Variants = {
  rest: { scale: 1, y: 0 },
  hover: { 
    scale: 1.05, 
    y: -5,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

export const buttonHover: Variants = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: { duration: 0.2, ease: "easeOut" }
  },
  tap: { 
    scale: 0.95,
    transition: { duration: 0.1 }
  }
};

export const useGSAPScrollAnimation = (
  elementRef: React.RefObject<HTMLElement>,
  animationConfig: gsap.TweenVars,
  triggerConfig?: ScrollTrigger.Vars
) => {
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      gsap.from(element, {
        ...animationConfig,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          ...triggerConfig
        }
      });
    }, element);

    return () => ctx.revert();
  }, [elementRef, animationConfig, triggerConfig]);
};

export const useGSAPStaggerAnimation = (
  elementsRef: React.RefObject<HTMLElement[]>,
  animationConfig: gsap.TweenVars,
  triggerConfig?: ScrollTrigger.Vars
) => {
  useEffect(() => {
    const elements = elementsRef.current;
    if (!elements || elements.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.from(elements, {
        ...animationConfig,
        stagger: 0.1,
        scrollTrigger: {
          trigger: elements[0],
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          ...triggerConfig
        }
      });
    }, elements[0]);

    return () => ctx.revert();
  }, [elementsRef, animationConfig, triggerConfig]);
};

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className = "",
  variants = fadeInUp,
  delay = 0 
}) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({ 
  children, 
  className = "",
  hover = true 
}) => {
  return (
    <motion.div
      className={className}
      variants={cardHover}
      initial="rest"
      whileHover={hover ? "hover" : "rest"}
      whileTap="rest"
    >
      {children}
    </motion.div>
  );
};

interface AnimatedButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({ 
  children, 
  className = "",
  onClick 
}) => {
  return (
    <motion.button
      className={className}
      variants={buttonHover}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};
