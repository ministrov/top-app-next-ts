import styles from './aboutPage.module.css';

export default function AboutLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={styles.body}>
            {children}
        </div>
    );
}
