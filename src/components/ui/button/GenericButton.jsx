import React from 'react';
import styles from './GenericButton.module.scss'

const GenericButton = ({text, ...props}) => {
    return (
        <button className={styles.genericButton} {...props}>
            {text}
        </button>
    );
};

export default GenericButton;
