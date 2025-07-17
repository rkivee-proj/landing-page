"use client"
import { useEffect, useRef } from 'react';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let locomotiveScroll: any;

        const initScroll = async () => {
            const LocomotiveScroll = (await import('locomotive-scroll')).default;
            
            if (containerRef.current) {
                locomotiveScroll = new LocomotiveScroll();
                            }
        };
        initScroll();
    }, []);

    return (
        <div>
            {children}
        </div>
    )
}