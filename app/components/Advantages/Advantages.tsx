import { AdvantagesProps } from './Advantages.props';
import { Icon } from '@/app/assets/Icon';
import styles from './Advantages.module.css';

export const Advantages = ({ advantages }: AdvantagesProps) => {
    return (
        <div className={styles.advantages}>
            {advantages.map((advantage) => (
                <div key={advantage._id}>
                    <span className={styles.icon}>{<Icon.CheckIcon />}</span>
                    <h3 className={styles.title}>{advantage.title}</h3>
                    <hr className={styles.vline} />
                    <p className={styles.description}>{advantage.description}</p>
                </div>
            ))}
        </div>
    )
}
