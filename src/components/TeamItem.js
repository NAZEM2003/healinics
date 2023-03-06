import React from 'react';
//styles
import styles from '../styles/TeamItem.module.css';

const TeamItem = ({image , name , department}) => {
    return (
        <div className={styles.container}>
            <div className={styles.image_box}>
                <img src={image} alt="team image" />
            </div>
            <h2 className={styles.doc_name}>{name}</h2>
            <p className={styles.department}>{department}</p>

        
            <ul className={styles.social_media_container}>
                <li><a href="#"><i className='fa fa-facebook'></i></a></li>
                <li><a href="#"><i className='fa fa-twitter'></i></a></li>
                <li><a href="#"><i className='fa fa-instagram'></i></a></li>
            </ul>

        </div>
    );
};

export default TeamItem;