import React ,{useState} from 'react';
import './Header.css';
import { BiMenuAltRight } from 'react-icons/bi';
import OutSideClickHandler from 'react-outside-click-handler';

function Header()
{
    const [menuOpened, setMenuOpened] = useState(false);
    const getMenuStyles = (menuOpened) => {
        if(document.documentElement.clientWidth <= 800)
        {
            return {right: !menuOpened && '-100%'}
        }
    }
    return (
        <section className="h-wrapper">
            <div className=" flexCenter paddings innerWidth  h-container">
                <img src="./logo.png" alt="logo" width={100}/>
                <OutSideClickHandler onOutsideClick={()=>{setMenuOpened(false)}}>

                
                <div className=" flexCenter h-menu" style={getMenuStyles(menuOpened)}>
                    <a href="">Resendencies</a>
                    <a href="">Our Values</a>
                    <a href="">Contact us</a>
                    <a href="">Get Started</a>
                    <button className='button'>
                       <a href="">Contact</a>
                    </button>
                </div>
                </OutSideClickHandler>
                <div className="menu-icon" onClick={()=>{setMenuOpened((prev)=>!prev)}} >
                   <BiMenuAltRight size={30}/>
                </div>

            </div>
            
        </section>
    );
}

export default Header;