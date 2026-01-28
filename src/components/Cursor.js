import React, { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import './Cursor.css';

const Cursor = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });

    // 1. THE SHARED COORDINATE SYSTEM
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // 2. THE TRAILING "ASSEMBLY" DELAY
    const trailConfig = { damping: 28, stiffness: 220, mass: 0.8 };
    const trailX = useSpring(mouseX, trailConfig);
    const trailY = useSpring(mouseY, trailConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            if (!target) return;
            const computedStyle = window.getComputedStyle(target);
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                computedStyle.cursor === 'pointer'
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [mouseX, mouseY]);

    return (
        <div className="targeting-system-root">
            {/* 🎯 GROUP 1: THE CORE (Diamond) - Zero Lag */}
            <motion.div
                className="core-diamond-group"
                style={{
                    x: mousePosition.x,
                    y: mousePosition.y,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            >
                <motion.div
                    className="diamond-shape"
                    animate={{
                        scale: [0.96, 1.04, 0.96],
                        rotate: 45,
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    style={{
                        backgroundColor: isHovering ? '#fff' : '#ef4444',
                        boxShadow: isHovering ? '0 0 15px #fff' : '0 0 10px #ef4444'
                    }}
                />
            </motion.div>

            {/* 🌀 GROUP 2: THE ASSEMBLY (Ring + Spikes) - Trailing */}
            <motion.div
                className="assembly-group"
                style={{
                    x: trailX,
                    y: trailY,
                    translateX: '-50%',
                    translateY: '-50%',
                    scale: isHovering ? 1.25 : 1,
                }}
            >
                <motion.div
                    className="ring-flow-container"
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: isHovering ? 2 : 5,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    <svg width="80" height="80" viewBox="0 0 100 100">
                        <circle
                            cx="50"
                            cy="50"
                            r="44"
                            fill="none"
                            stroke={isHovering ? '#fff' : '#ef4444'}
                            strokeWidth="2.5"
                            strokeDasharray="160 100"
                            strokeLinecap="round"
                        />
                    </svg>

                    {[0, 90, 180, 270].map((angle, i) => (
                        <div
                            key={`spike-${i}`}
                            className="repeater-spike"
                            style={{
                                transform: `rotate(${angle}deg)`,
                                height: isHovering ? '12px' : '8px',
                                backgroundColor: isHovering ? '#fff' : '#ef4444'
                            }}
                        />
                    ))}
                </motion.div>

                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={`particle-${i}`}
                        className="atmosphere-dot"
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 4 + i,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    >
                        <div className="dot-visual" style={{
                            top: `${20 + i * 5}%`,
                            backgroundColor: isHovering ? '#fff' : '#ef4444'
                        }} />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Cursor;
