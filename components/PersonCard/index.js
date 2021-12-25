import React from 'react';
import styles from './style.module.scss';
import Avatar from "../Avatar";
import cn from 'classnames';

const PersonCard = ({ currentMenu, onMenuChange }) => {
    return (
        <div className={styles.personCard}>
            <div className={styles.infoWrapper}>
                <Avatar src={'/img/image-jeremy.png'}
                        alt={'Jeremy Robson'}
                />

                <div className={styles.rightSide}>
                    <div className={styles.subtitle}>
                        Report for
                    </div>
                    <div className={styles.title}>
                        Jeremy Robson
                    </div>
                </div>
            </div>
            <ul className={styles.menu}>
                <li className={cn(styles.menuItem, {
                    [styles.active]: currentMenu === 'daily'
                })}
                    onClick={_ => onMenuChange('daily')}
                >
                    Daily
                </li>
                <li className={cn(styles.menuItem, {
                    [styles.active]: currentMenu === 'weekly'
                })}
                    onClick={_ => onMenuChange('weekly')}
                >
                    Weekly
                </li>
                <li className={cn(styles.menuItem, {
                    [styles.active]: currentMenu === 'monthly'
                })}
                    onClick={_ => onMenuChange('monthly')}
                >
                    Monthly
                </li>
            </ul>
        </div>
    );
};

export default PersonCard;
