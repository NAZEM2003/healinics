import React from 'react';
//styles
import styles from '../styles/Services.module.css';
//components
import Service from './Service';

const Services = () => {
    return (
        <div className={styles.services}>
        <p className={styles.services_text}><i className='fa fa-sitemap'></i>خدمات</p>
        <h1 className={styles.services_title}>راه حل های مراقبت های بهداشتی</h1>
        <div className={styles.services_container}>
            <Service icon='fa fa-magic' title="کاردیولوژی" text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"/>
            <Service icon='fa fa-heart' title="ریوی" text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"/>
            <Service icon='fa fa-low-vision' title="عصب شناسی" text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"/>
            <Service icon='fa fa-wheelchair' title="ارتوپدی" text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"/>
            <Service icon='fa fa-thumbs-o-up' title="جراحی دندان" text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"/>
            <Service icon='fa fa-thermometer' title="آزمایشگاه" text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"/>
        </div>
    </div>
    );
};

export default Services;