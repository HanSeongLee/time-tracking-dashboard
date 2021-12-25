import React from "react";
import styles from './style.module.scss';

const Avatar = ({ ...props }) => {
    return (
        <img className={styles.avatar}
             {...props}
        />
    );
};

export default Avatar;
