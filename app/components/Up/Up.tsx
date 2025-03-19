'use client';

import { useEffect } from 'react';
import { useScrollY } from '@/hooks/useScrollY';
import { useAnimation } from 'framer-motion';
import { motion } from 'framer-motion';
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';
import styles from './Up.module.css';

export const Up = () => {
    const controls = useAnimation();
    const y = useScrollY();

    useEffect(() => {
        controls.start({ opacity: y / document.body.scrollHeight });
    }, [y, controls]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <motion.div
            className={styles.up}
            initial={{ opacity: 0 }}
            animate={controls}
            aria-label='Наверх'
        >
            <ButtonIcon
                onClick={scrollToTop}
                appearence='primary'
                icon={'ArrowUpIcon'}
            />
        </motion.div>
    )
}
