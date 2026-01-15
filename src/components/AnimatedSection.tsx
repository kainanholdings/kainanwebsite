"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
    animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale" | "blur";
    delay?: number;
    duration?: number;
    threshold?: number;
}

export default function AnimatedSection({
    children,
    className = "",
    animation = "fade-up",
    delay = 0,
    duration = 600,
    threshold = 0.1,
}: AnimatedSectionProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [threshold]);

    const baseStyles: React.CSSProperties = {
        transitionProperty: "opacity, transform, filter",
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        transitionDelay: `${delay}ms`,
    };

    const animations: Record<string, { hidden: React.CSSProperties; visible: React.CSSProperties }> = {
        "fade-up": {
            hidden: { opacity: 0, transform: "translateY(40px)" },
            visible: { opacity: 1, transform: "translateY(0)" },
        },
        "fade-in": {
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
        },
        "slide-left": {
            hidden: { opacity: 0, transform: "translateX(-60px)" },
            visible: { opacity: 1, transform: "translateX(0)" },
        },
        "slide-right": {
            hidden: { opacity: 0, transform: "translateX(60px)" },
            visible: { opacity: 1, transform: "translateX(0)" },
        },
        scale: {
            hidden: { opacity: 0, transform: "scale(0.9)" },
            visible: { opacity: 1, transform: "scale(1)" },
        },
        blur: {
            hidden: { opacity: 0, filter: "blur(10px)" },
            visible: { opacity: 1, filter: "blur(0)" },
        },
    };

    const animationState = isVisible
        ? animations[animation].visible
        : animations[animation].hidden;

    return (
        <div
            ref={ref}
            className={className}
            style={{ ...baseStyles, ...animationState }}
        >
            {children}
        </div>
    );
}
