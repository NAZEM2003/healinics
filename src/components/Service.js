import React from 'react';
//styles
import styles from '../styles/Service.module.css';


const Service = ({icon , title , text}) => {
    return (
        <div className={styles.container}>
            <p className={styles.service_icon}><i className={icon}></i></p>
            <h2 className={styles.service_title}>{title}</h2>
            <p className={styles.service_text}>{text}</p>
            <a className={styles.service_more_info} href="#"><i className='fa fa-plus'></i>اطلاعات بیشتر</a>
        </div>
    );
};

export default Service;