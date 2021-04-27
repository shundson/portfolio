

import { render } from "@testing-library/react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Menu } from "../../molecules/menu";
import { Hunberger} from "../Hunberger";
export const Header =()=>{


    const humberger=()=>{
        document.getElementById('nav').classList.toggle('in');
        document.getElementById('line1').classList.toggle('batu1');
        document.getElementById('line3').classList.toggle('batu2');
        document.getElementById('line2').classList.toggle('shokyo');
        document.getElementById('hanhan').classList.toggle('mae');
        document.getElementsByTagName('body')[0].classList.toggle('fixed');
        
      }

    
    return(
        <SHeader>
         <div className="menuwrap">
        <div className="wrapper SpaceBetween flex">
        <h1 className="logo">shunD's PortFolio</h1>
        <nav>
        <ul className="Headernav flex">
            <SLi><SLink to="/">TOP</SLink></SLi>
            <SLi><SLink to="/works">WORKS</SLink></SLi>
            <SLi><SLink to="/skills">SKILLS</SLink></SLi>
            <SLi><SLink to="/about">ABOUT</SLink></SLi>
            
        </ul>
        </nav>
        <Hunberger kansu={humberger}/>
        </div>
       
        <Menu kansu={humberger}/>
        
        </div>
        </SHeader>
    );
}

const SHeader = styled.header`
    background-color:#5DBEFF;
    color:#fff;
    font-weight:600;
    height:80px;
`;

const SLi = styled.li`
background-color:#5DBEFF;
margin-left:80px;
`;

const SLink = styled(Link)`
    color:white;
`;


