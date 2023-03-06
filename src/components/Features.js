import React from 'react';
//styles
import styles from '../styles/Features.module.css';
//images
import feature_images from '../images/feature-images.jpg';

const Features = () => {
    return (
        <div className={styles.feature_container}>

        <div className={styles.feature_text_column}>
            <p className={styles.feature}><i className='fa fa-heartbeat'></i>ویژگی ها</p>
            <h1 className={styles.feature_title}>چرا ما را انتخاب کنید</h1>
            <p className={styles.feature_text}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </p>
            <ul className={styles.feature_list}>
                <li><i className='fa fa-sitemap'></i>تجربه پزشکان</li>
                <li><i className='fa fa-check'></i>کیفیت خدمات</li>
                <li><i className='fa fa-comment'></i>مشاوره مثبت</li>
                <li><i className='fa fa-tty'></i>پشتیبانی 24ساعته</li>
            </ul>
        </div>
        
        <div className={styles.feature_image_column}>
            <img src={feature_images} alt="feature image" />
        </div>

    </div>
    );
};

export default Features;