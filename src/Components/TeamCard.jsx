import PropTypes from "prop-types";

import { Link } from "react-router-dom"
import arrow_right from '/assets/arrow-right.svg'

const TeamCard = ({ image, name, role, desc }) => {  
        return ( 
            <div className="sm:basis-full md:basis-1/2 lg:basis-1/4 rounded-3xl flex flex-col gap-3 w-full bg-bglightBlue p-3 max-h-screen hover:bg-bgsoftblue">
                <div className="w-50 rounded-2xl overflow-hidden">
                    <img src={image} alt={name} className="w-full"/>
                </div>
                <h3 className="text-balance font-semibold text-lg">{name}</h3>
                <p className="text-base">{role}</p>
                <p className="text-base">{desc}</p>
                <Link className="text-sm text-darkblue font-semibold">Learn More<img src={arrow_right} alt="arrow right" className="inline w-5 animate-pulse"/></Link>
            </div>
         );
    }
     
export default TeamCard;

TeamCard.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    role: PropTypes.string,
    desc: PropTypes.string
}