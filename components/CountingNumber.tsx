
import React, { useState, useEffect, useRef } from 'react';

interface CountingNumberProps {
    target: number;
    duration?: number;
}

const CountingNumber: React.FC<CountingNumberProps> = ({ target, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    let start = 0;
                    const startTime = Date.now();
                    const end = target;

                    const step = () => {
                        const now = Date.now();
                        const progress = Math.min((now - startTime) / duration, 1);
                        const currentNum = Math.floor(progress * (end - start) + start);
                        
                        setCount(currentNum);

                        if (progress < 1) {
                            requestAnimationFrame(step);
                        } else {
                            setCount(target); // Ensure it ends on the exact target
                        }
                    };
                    
                    requestAnimationFrame(step);
                }
            },
            {
                threshold: 0.1,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(ref.current);
            }
        };
    }, [target, duration]);

    return <span ref={ref}>{count.toLocaleString('es-ES')}</span>;
};

export default CountingNumber;