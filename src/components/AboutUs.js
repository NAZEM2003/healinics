import React from 'react';
//styles
import styles from '../styles/AboutUs.module.css';
//images
import about_1 from '../images/about-1.jpg';
import about_2 from '../images/about-2.jpg';

const AboutUs = () => {
    return (
    <div className={styles.about_us}>
        <div className={styles.img_container}>
            <img className={styles.image1} src={about_1} alt="about image" />
            <img className={styles.image2} src={about_2} alt="about image" />
        </div>
        <div className={styles.text_container}>
            <p className={styles.about_us_text}><i className='fa fa-user-circle-o'></i>درباره ما</p>
            <h1 className={styles.about_us_header}>ما را بیشتر بشناسید!</h1>
            <p className={styles.about_us_paragraph}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>

            <ul className={styles.about_us_list}>
                <li><i className='fa fa-check-circle-o'></i>مراقبت های بهداشتی</li>
                <li><i className='fa fa-check-circle-o'></i>پزشکان واجد شرایط</li>
                <li><i className='fa fa-check-circle-o'></i>متخصصان تحقیقات پزشکی</li>
            </ul>
            <div className={styles.about_us_button}>
                <a href="#">اطلاعات بیشتر</a>
            </div>
        </div>

    </div>
    );
};

export default AboutUs;