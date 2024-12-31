import { Link } from "react-router-dom"

import arrow_right from '/assets/arrow-right.svg'

const ServicesCard = ({icon, title, text, link}) => {
    return ( 
        <div className="bg-bglightBlue w-full p-7 rounded-3xl flex flex-col gap-5 hover:bg-bgsoftblue">
            <div className=" border-[.01rem] border-darkblue p-3 rounded-xl w-fit">
                 <img src={icon} alt={title} className="w-5"/>
            </div>
            <h3 className="text-balance font-semibold text-lg">{title}</h3>
            <p className="text-[1rem]">{text}</p>
            <Link className="text-[1rem] text-darkblue font-semibold">{link} <img src={arrow_right} alt="arrow right" className="inline w-5 animate-pulse"/></Link>
        </div>
     );
}
 
export default ServicesCard;