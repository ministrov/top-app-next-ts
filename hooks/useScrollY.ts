import { useEffect, useState } from 'react';

export const useScrollY = (): number => {
    const [scrollY, setScrollY] = useState<number>(0);
    
    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.addEventListener('scroll', handleScroll);
    }, []);

    return scrollY;
};