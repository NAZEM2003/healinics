import React,{useContext, useEffect} from 'react';
//styles
import styles from "../styles/Navbar.module.css"
//images
import logo from '../images/logo.jpeg';
//styled components
import styled from 'styled-components';

const Ul = styled.ul`
    display: flex;
    a,
    li{
        margin-left: 25px;
        color: #333;
        cursor: pointer;
        position: relative;
        transition: all .3s;
    }
    li:hover,
    li a:hover{
        color: rgb(60, 120, 200);
    }

    .dropdown_menu{
        display: none;
    }
    .dropdown_menu_container:hover .dropdown_menu{
        display: inline-block;
        position: absolute;
        top: 20px;
        left: -70px;
        width: 150px;
        padding: 10px;
        background-color: #fff;
    }
    .dropdown_menu a{
        display: inline-block;
        padding: 10px 0;
        color: #333;
        z-index:25;
    }
    .dropdown_menu a:hover{
        color: rgb(60,120,200);
    }

    @media (max-width:992px){
        flex-direction: column;
        background-color: rgb(60 , 120 , 200);
        position:fixed;
        top:0;
        right:0;
        height:100vh;
        width: 300px;
        padding-top:3.5rem;
        transition: all .3s; 
        transform: ${props => props.open ? 'translateX(0)' : 'translateX(100%)'};


        .dropdown_menu_container{
            margin:0;
            padding:15px 30px;
        }
        a,li{
            color: #ccc;
            padding: 15px;
        }
        li a:hover,
        li:hover{
            color:#fff;
        }

        .dropdown_menu_container:hover .dropdown_menu{
            z-index: 25;
            position: absolute;
            top:40px;
            right:50px;
            width: 200px;
            padding: 10px;
            background-color:#fff;
        }
       
    }
`


const Navbar = ({open}) => {
    
    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>

                <a href='#'><img className={styles.logo} src={logo} alt="logo" /></a>

                    <Ul open={open}>
                        <li><a href="#">صفحه اصلی</a></li>
                        <li><a href="#">درباره ما</a></li>
                        <li><a href="#">خدمات</a></li>


                        <li className='dropdown_menu_container'>صفحات <i className='fa fa-angle-down'></i>
                            <ul className='dropdown_menu'>
                                <li><a href="#">ویژگی ها </a></li>
                                <li><a href="#">پزشکان ما</a></li>
                                <li><a href="#">رزرو نوبت</a></li>
                                <li><a href="#">نظر بیماران</a></li>
                            </ul>
                        </li>



                        <li><a href="#">تماس با ما</a></li>
                        <li> <a href="#">رزرو نوبت <i className='fa fa-arrow-left'></i></a></li>
                    </Ul>
                  

            </nav>
        </div>
    );
};

export default Navbar;