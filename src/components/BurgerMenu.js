import React,{useEffect, useState} from 'react';
//components
import Navbar from './Navbar';
//styled components
import styled , {keyframes} from 'styled-components';


const DIV = styled.div`
    width:2rem;
    height:2rem;
    position: absolute;
    top:5px;
    right:20px;
    z-index: 200;
    display:none;
    cursor:pointer;
    @media (max-width:992px){
        display: flex;
        justify-content: space-around;
        flex-direction:column;
    }
    div{
        width:2rem;
        height: .25rem;
        background-color: ${props => props.open ? '#fff' : 'rgb(60,120,200)'};
        border-radius: 10px;
        transform-origin:1px;
        transition: all .3s;
        &:nth-child(1){
            transform: ${props => props.open ? "rotate(45deg)" : "rotate(0)"}
        }
        &:nth-child(2){
            transform: ${props => props.open ? "translateX(-100%)" : "translateX(0)"};
            opacity:${props => props.open ? 0 : 1};
        }
        &:nth-child(3){
            transform: ${props => props.open ? "rotate(-45deg)" : "rotate(0)"}
        }
    }

`;
const ContainerAnimation = keyframes `
 0% { height:0;}
 100% {height:56px;}
`;

const Container = styled.div`
    background-color:red;
    overflow: hidden;
    width:100%;
    z-index:20;
    transition: all .5s;
    position:${props => props.isSticky ? "fixed" : "relative"};
    top:0;
    animation-name: ${props => props.isSticky ? ContainerAnimation : ''};
    animation-duration: .5s;
`


const BurgerMenu = ({scrollTop}) => {
    const [open , setOpen] = useState(false);
    const [isSticky , setIsSticky] = useState(false);
    useEffect(()=>{
        if(scrollTop > 300){
            setIsSticky(true);
        }
        else{
            setIsSticky(false);
        }
    });


    const clickHandler = ()=>{
        setOpen(!open);
    }
    
    return (
        <Container isSticky={isSticky}>
            <DIV open={open} onClick={clickHandler}>
                <div></div>
                <div></div>
                <div></div>
            </DIV>
            <Navbar open={open}/>
        </Container>
    );
};

export default BurgerMenu;