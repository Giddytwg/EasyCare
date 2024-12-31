import { NavLink, Link } from 'react-router-dom';

import easycare_logo  from '/assets/Easycare Logo.svg'
import hamburger_icon from '/assets/Hamburger.svg'
import { useState } from 'react';


const  NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return ( 
        <nav>
            <div className="navbar py-4 px-4 md:py-5 md:px-16 flex justify-between text-xs items-center">
                
                {/* LeftMost bar */}
                <div className="logo">
                    <img src={easycare_logo} alt="Easycare Logo" className='md:w-36 w-30'/>
                </div>

                {/* Right Nav */}
                <div className=''>
                    <div className='hidden lg:flex gap-3 justify-center items-center'>
                        <div className="nav-links flex gap-4">
                            <NavLink to='/'>Home</NavLink>
                            <NavLink to='#section3'>Services</NavLink>
                            <NavLink to='#about'>About Us</NavLink>
                            <NavLink to='#contact'>Contact</NavLink>
                        </div>
                        <button className='cta-dark'>Get Started</button>
                    </div>
                    {/* Mobile Nav */}
                    <div className='lg:hidden'>
                        <div onClick={()=>setIsOpen(prev => !prev)}>
                            <img src={hamburger_icon} alt="" />
                        </div>
                        <div className={`bg-white flex rounded-lg flex-col gap-4 absolute right-0 overflow-hidden transition-all duration-500 ease-in-out ${isOpen? 'h-fit p-4' :'h-0'}`}>
                            <NavLink to='/'>Home</NavLink>
                            <NavLink to='#services'>Services</NavLink>
                            <NavLink to='#about'>About Us</NavLink>
                            <NavLink to='#contact'>Contact</NavLink>
                        <button className='cta-dark'>Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
     );
}
 
export default NavBar;