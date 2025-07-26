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
        // alert('Landing page is still under development. Pls mail on raj.harshit960@gmail.com to get alpha access.');
    }, []);

    return (
        <div>
            {children}
        </div>
    )
}