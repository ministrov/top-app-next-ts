'use client';

import { useState, KeyboardEvent } from 'react';
import cn from 'classnames';
import styles from './SkipLink.module.css';

export const SkipLink = () => {
    const [isSkipLinkDisplayed, setIsSkipLinkDisplayed] = useState<boolean>(false);

    const skipContentAction = (key: KeyboardEvent) => {
        if (key.code == 'Space' || key.code == 'Enter') {
            key.preventDefault();
            // bodyRef.current?.focus();
        }
        setIsSkipLinkDisplayed(false);
    };
    return (
        <a
            onFocus={() => setIsSkipLinkDisplayed(true)}
            tabIndex={0}
            className={cn(styles.skipLink, {
                [styles.displayed]: isSkipLinkDisplayed
            })}
            onKeyDown={skipContentAction}
        >
            Сразу к содержанию
        </a>
    )
}
