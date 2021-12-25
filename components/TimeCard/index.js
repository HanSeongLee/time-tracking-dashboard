import React from "react";
import styles from './style.module.scss';
import cn from "classnames";
import EllipsisIcon from '../../public/img/icon-ellipsis.svg';

const TimeCard = ({ variants='work', category, time }) => {
    const variantsLowerCase = variants?.toLowerCase().replace(' ', '');

    return (
        <div className={cn(styles.timeCard, {
            [styles.work]: variantsLowerCase === 'work',
            [styles.play]: variantsLowerCase === 'play',
            [styles.study]: variantsLowerCase === 'study',
            [styles.exercise]: variantsLowerCase === 'exercise',
            [styles.social]: variantsLowerCase === 'social',
            [styles.selfCare]: variantsLowerCase === 'selfcare',
        })}>
            <div className={styles.cardBody}>
                <div className={styles.topSide}>
                    <div className={styles.categoryText}>
                        {category}
                    </div>
                    <div className={styles.ellipsisButton}>
                        <EllipsisIcon />
                    </div>
                </div>
                <div className={styles.bottomSide}>
                    <div className={styles.timeText}>
                        {time?.current}hrs
                    </div>
                    <div className={styles.lastWeekTimeText}>
                        Last Week - {time?.previous}hrs
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimeCard;
