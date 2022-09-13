import React from 'react';
import styles from './TopBar.module.scss'
import GenericButton from "../button/GenericButton";
import TopBarItem from "./TopBarItem";

const TopBar = () => {
    return (
        <div className={styles.topBar}>
            <TopBarItem itemContent={<GenericButton text={'Услуги'}/>}/>
            <TopBarItem itemContent={<GenericButton text={'Записаться'}/>}/>
            <TopBarItem itemContent={<GenericButton text={'График записей'}/>}/>
        </div>
    );
};

export default TopBar;