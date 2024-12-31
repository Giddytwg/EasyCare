import { Link } from 'react-router-dom';

import logo from '/assets/Easycare Logo.svg'
import mail_icon from '/assets/mail-open.svg'
import phone_icon from '/assets/call-02.svg'
import location_icon from '/assets/location-05.svg'


const FooterDetails = () => {
    return ( 
            <aside>
                <div className='flex justify-around flex-col md:flex-row gap-3'>
                    {/* Logo */}
                    <div className='flex flex-col text-xs'>
                        <img src={logo} alt="" className='w-24' />
                        <p>Caring for you wherever you are.</p>
                    </div>

                    {/* Footer Links */}
                    <div className=' footer-links flex flex-col gap-3 text-xs md:text-sm'>
                        <p className="font-semibold">Quick Links</p>
                        <Link>Home</Link>
                        <Link>Services</Link>
                        <Link>FAQs</Link>
                        <Link>About Us</Link>
                        <Link>Contact Us</Link>
                    </div>
                    {/* Contact Links */}
                    <div className='footer-contact text-xs flex flex-col gap-3 md:text-sm'>
                    <p className="font-semibold">Our Contacts</p>
                        <Link className='flex gap-2 w-4'>
                            <img src={mail_icon} alt="" />
                            <p>support@easyCare.com</p>
                        </Link>
                        <Link className='flex gap-2'>
                            <img src={phone_icon} alt="" className='w-4'/>
                            <p>+1 (556) 123 - 4567</p>
                        </Link>
                        <span className='flex gap-2'>
                            <img src={location_icon} alt="" className='w-4'/>
                            <p>123 Healthcare Ave, City, Country</p>
                        </span>
                    </div>
                </div>
                    {/* copyright */}
                <div className='flex flex-col justify-between md:flex-row text-[.6rem] mt-7 items-center gap-3'>
                        <p>© 2024 EasyCare. All rights reserved.</p>
                        <span className='flex flex-row justify-between gap-4'>
                            <Link className='text-[.6rem]'>Privacy Policy</Link>
                            <Link className='text-[.6rem]'>Terms of Service</Link>
                        </span>
                    </div>
            </aside>
     );
}
 
export default FooterDetails;