import Head from 'next/head';
// import Image from 'next/image';
import Link from 'next/link';
import Htag from '../components/Htag/Htag';
import cn from 'classnames';
import styles from './aboutPage.module.css';

const AboutPage = () => {
    return (
        <>
            <Head>
                <title>О нас | Название компании</title>
                <meta name="description" content="Узнайте больше о нашей команде и миссии" />
            </Head>

            <main className={styles.container}>
                <Htag tag={'h1'}>О нас</Htag>
                <section className={cn(styles.maxW3xl, styles.mxAuto, styles.textCenter)}>
                    <p className={`${styles.mb8} ${styles.leadingRelaxed}`}>
                        Мы команда увлечённых профессионалов, стремящихся сделать мир лучше своими продуктами и услугами. Наша миссия заключается в предоставлении высококачественных решений, которые помогают нашим клиентам достигать успеха.
                    </p>

                    <Link className={`${styles.inlineBlock} ${styles.bgBlue500} ${styles.hoverBgBlue700} ${styles.textWhite} ${styles.fontBold} ${styles.py2} ${styles.px4} ${styles.transition} ${styles.focusOutlineNone} ${styles.focusShadowOutline} ${styles.rounded}`} href="/contact">
                        Свяжитесь с нами
                    </Link>
                </section>

                <section className={`${styles.mt16} ${styles.maxW3xl} ${styles.mxAuto} ${styles.grid} ${styles.gap8} ${styles.mdGridCols2}`}>
                    <div className={`${styles.flex} ${styles.flexCol} ${styles.itemsCenter} ${styles.p8} ${styles.border} ${styles.shadowMd} ${styles.roundedLg}`}>
                        {/* <Image src="/images/founder.jpg" alt="Основатель" className={`${styles.w24} ${styles.h24} ${styles.roundedFull} ${styles.mb4}`} /> */}
                        <h2 className={`${styles.fontSemiBold} ${styles.textXl} ${styles.mb2}`}>Иван Иванов</h2>
                        <p className={`${styles.textGray600} ${styles.textSm} ${styles.uppercase} ${styles.trackingWidest} ${styles.mb4}`}>Основатель и генеральный директор</p>
                        <p className={`${styles.leadingRelaxed} ${styles.textGray800}`}>
                            Иван Иванов основал компанию в 2010 году и с тех пор руководит её развитием. Его страсть к инновациям и стремление к совершенству являются движущей силой нашего успеха.
                        </p>
                    </div>

                    <div className={`${styles.flex} ${styles.flexCol} ${styles.itemsCenter} ${styles.p8} ${styles.border} ${styles.shadowMd} ${styles.roundedLg}`}>
                        {/* <Image src="/images/developer.jpg" alt="Разработчик" className={`${styles.w24} ${styles.h24} ${styles.roundedFull} ${styles.mb4}`} /> */}
                        <h2 className={`${styles.fontSemiBold} ${styles.textXl} ${styles.mb2}`}>Петр Петров</h2>
                        <p className={`${styles.textGray600} ${styles.textSm} ${styles.uppercase} ${styles.trackingWidest} ${styles.mb4}`}>Ведущий разработчик</p>
                        <p className={`${styles.leadingRelaxed} ${styles.textGray800}`}>
                            Петр Петров отвечает за техническую реализацию наших проектов. Его глубокие знания и опыт позволяют нам создавать надёжные и эффективные решения.
                        </p>
                    </div>

                    {/* Добавьте больше членов команды по аналогии */}
                </section>

                <section className={`${styles.mt16} ${styles.maxW3xl} ${styles.mxAuto} ${styles.textCenter}`}>
                    <h2 className={`${styles.text3xl} ${styles.fontBold} ${styles.mb4}`}>Наши ценности</h2>
                    <ul className={`${styles.flex} ${styles.justifyBetween} ${styles.flexWrap}`}>
                        <li className={`${styles.wFull} ${styles.smW1_2} ${styles.mdW1_3} ${styles.p4}`}>
                            <span className={`${styles.block} ${styles.w12} ${styles.h12} ${styles.mxAuto} ${styles.mb4} ${styles.bgGray100} ${styles.roundedFull}`}></span>
                            <h3 className={`${styles.fontSemiBold} ${styles.textLg} ${styles.mb2}`}>Инновации</h3>
                            <p className={`${styles.leadingRelaxed} ${styles.textGray800}`}>Мы постоянно ищем новые способы улучшения наших продуктов.</p>
                        </li>
                        <li className={`${styles.wFull} ${styles.smW1_2} ${styles.mdW1_3} ${styles.p4}`}>
                            <span className={`${styles.block} ${styles.w12} ${styles.h12} ${styles.mxAuto} ${styles.mb4} ${styles.bgGray100} ${styles.roundedFull}`}></span>
                            <h3 className={`${styles.fontSemiBold} ${styles.textLg} ${styles.mb2}`}>Качество</h3>
                            <p className={`${styles.leadingRelaxed} ${styles.textGray800}`}>Мы стремимся предоставлять продукты высочайшего качества.</p>
                        </li>
                        <li className={`${styles.wFull} ${styles.smW1_2} ${styles.mdW1_3} ${styles.p4}`}>
                            <span className={`${styles.block} ${styles.w12} ${styles.h12} ${styles.mxAuto} ${styles.mb4} ${styles.bgGray100} ${styles.roundedFull}`}></span>
                            <h3 className={`${styles.fontSemiBold} ${styles.textLg} ${styles.mb2}`}>Клиентоориентированность</h3>
                            <p className={`${styles.leadingRelaxed} ${styles.textGray800}`}>Удовлетворение потребностей клиентов — наша главная цель.</p>
                        </li>
                        {/* Добавьте больше ценностей по аналогии */}
                    </ul>
                </section>

                <section className={`${styles.mt16} ${styles.maxW3xl} ${styles.mxAuto} ${styles.textCenter}`}>
                    <h2 className={`${styles.text3xl} ${styles.fontBold} ${styles.mb4}`}>Контактная информация</h2>
                    <address className={styles.notItalic}>
                        <p className={styles.mb2}>Адрес: г. Москва, ул. Ленина, д. 123</p>
                        <p className={styles.mb2}>Телефон: +7 (495) 123-45-67</p>
                        <p className={styles.mb2}>Email: info@company.com</p>
                    </address>
                </section>
            </main>
        </>
    )
}

export default AboutPage;