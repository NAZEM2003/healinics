import React from 'react';
//styles
import styles from '../styles/Team.module.css';
//components
import TeamItem from './TeamItem';
//images
import teamimage1 from '../images/team-item1.jpg';
import teamimage2 from '../images/team-item2.jpg';
import teamimage3 from '../images/team-item3.jpg';
import teamimage4 from '../images/team-item4.jpg';

const Team = () => {
    return (
        <div className={styles.team_container}>
        <p className={styles.team}><i className='fa fa-heartbeat'></i>پزشکان</p>
        <h1 className={styles.team_title}>پزشکان مجرب ما</h1>
        <div className={styles.item_container}>
            <TeamItem image={teamimage1} name="نام پزشک" department="دپارتمان"/>
            <TeamItem image={teamimage2} name="نام پزشک" department="دپارتمان"/>
            <TeamItem image={teamimage3} name="نام پزشک" department="دپارتمان"/>
            <TeamItem image={teamimage4} name="نام پزشک" department="دپارتمان"/>
        </div>
    </div>
    );
};


export default Team;