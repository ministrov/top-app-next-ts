'use client';

import { useEffect } from 'react';
import { useScrollY } from '@/hooks/useScrollY';
import { useAnimation } from 'framer-motion';
import { motion } from 'framer-motion';
// import { Icon } from '@/app/assets/Icon';
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';
import styles from './Up.module.css';

export const Up = () => {
    const controls = useAnimation();
    const y = useScrollY();

    useEffect(() => {
        controls.start({ opacity: y / document.body.scrollHeight });
    }, [y, controls]);

    console.log(controls);
    console.log(y);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <motion.button
            className={styles.up}
            initial={{ opacity: 0 }}
            animate={controls}
        >
            <ButtonIcon
                onClick={scrollToTop}
                appearence='primary'
                icon={'ArrowUpIcon'}
            />
        </motion.button>
    )
}
