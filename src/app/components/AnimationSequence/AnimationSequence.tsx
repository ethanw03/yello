'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';

const LogoAnimation = dynamic(() => import('../LogoAnimation/LogoAnimation'), { ssr: false });
const Strobe = dynamic(() => import('../Strobe/Strobe'), { ssr: false });
const Home = dynamic(() => import('../../Home/page'), { ssr: false });

export default function AnimationSequence() {
    const [stage, setStage] = useState(0);

    useEffect(() => {
        const timeouts: ReturnType<typeof setTimeout>[] = [];
        if (stage === 0) {
            timeouts.push(setTimeout(() => setStage(1), 5000));
        } else if (stage === 1) {
            timeouts.push(setTimeout(() => setStage(2), 5000));
        }
        return () => timeouts.forEach(clearTimeout);
    }, [stage]);

    return (
        <AnimatePresence>
            {stage === 0 && (
                <motion.div
                    key="logo"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 20 }}
                    transition={{ duration: .1 }}
                >
                    <LogoAnimation />
                </motion.div>
            )}
            {stage === 1 && (
                <motion.div
                    key="strobe"
                    initial={{ opacity: 1, }} 

                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: '100vh' }}
                    transition={{ duration: 2, type: "spring", stiffness: 20 }}
                >
                    <Strobe />
                </motion.div>
            )}
            {stage === 2 && (
                <motion.div
                    key="home"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    
                >
                    <Home />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
