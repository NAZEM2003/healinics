import React from 'react';
//styles
import styles from '../styles/Infobar.module.css';
const Infobar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infobar}>
                <div className={styles.right_section}>
                    <span className={styles.location}><i className='fa fa-map-marker'></i>همدان , میدان امام </span>
                    <span className={styles.work_time}><i className='fa fa-clock-o'></i>شنبه تا پنجشنبه : 7 الی 21</span>
                </div>

                <div className={styles.left_section}>
                    <a href='#' className={styles.phone_number}><i className='fa fa-phone'></i>09918334277</a>
                    <ul className={styles.social_media}>
                        <li><a href="#"><i className='fa fa-facebook'></i></a></li>
                        <li><a href="#"><i className='fa fa-twitter'></i></a></li>
                        <li><a href="#"><i className='fa fa-linkedin'></i></a></li>
                        <li><a href="#"><i className='fa fa-instagram'></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Infobar;