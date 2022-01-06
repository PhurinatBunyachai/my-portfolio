import React,{useEffect,useRef} from 'react'
import { useHistory,useLocation  } from 'react-router-dom';
import styled from 'styled-components'
import Typed from 'typed.js';
export default function Header() {

    const el = useRef(null);
    const typed = useRef(null);
    const history = useHistory();
    const {pathname} = useLocation();
    const [empty,prefix] = pathname.split("/")

    useEffect(() => {
        const options = {
            strings: [
            'Phurinat...',
          ],
          typeSpeed: 200,
          backSpeed: 50,
          smartBackspace: true 
        };
        typed.current = new Typed(el.current, options);
        return () => {
            typed.current.destroy();
        }
    })

   
    const openPage = (path ='/') =>{ 
        history.push(`${path}`);
    }

    return (
        <Container>
            <Logo onClick={() => {window.location = '/'}}>
                <span ref={el}></span>
            </Logo>
            <Menu>
               <div className={`${prefix == '' ? 'active' : '' }`} onClick={() => {openPage()}}>
                   Home
               </div>
               <div className={`${prefix == 'About' ? 'active' : '' }`} onClick={() => {openPage('/About')}}>
                   About
               </div>
               <div className={`${prefix == 'Contract' ? 'active' : '' }`}>
                   Contract
               </div>
            </Menu>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items:center;
    border-bottom: 3px solid;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
    padding: 10px 45px 10px 45px;
    box-shadow: 5px 5px 18px #F6F4F4;
   
`
const Logo = styled.div`
    cursor: pointer;
    span{
        font-size: 24px;
    }
`
const Menu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:start;
    gap: 10px;
    cursor: pointer;
     .active {
        color: #ff002a;
    }
    
`