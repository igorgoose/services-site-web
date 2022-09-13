import React from 'react';
import styles from './TopBarItem.module.scss'

const TopBarItem = ({itemContent, ...props}) => {
    return (
        <div className={styles.topBarItem} {...props}>
            {itemContent}
        </div>
    );
};

export default TopBarItem;