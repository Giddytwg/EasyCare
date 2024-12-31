import { useState } from "react";
import Heading from "../Components/Heading";
import TeamCard from "../Components/TeamCard";
import Doctors from "../Data/Doctors.jsx";


const OurTeam = () => {
    const [view, setView] = useState(false);
    const doctors = Doctors;
    return ( 
        <section className="services p-6 md:p-14 flex flex-col gap-4 items-center">
                <div className=" text-center">
                    <Heading title='Our Team' bg='white' msg='Dedicated experts with years of experience to provide personalized healthcare just for you' />
                </div>

                {/* Team Row*/}
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
                    {doctors.map((doc)=>(
                    <div key={doc.id} className="basis-1/4">
                        <TeamCard image={doc.image} name={doc.name} role={doc.role} desc={doc.desc}/>
                    </div>
                    ))}
            </div>
            <div className="flex items-center justify-center mt-4">
                <button className="cta-dark px-9"
                onClick={()=>{setView((true))}}>Veiw full team</button>
            </div>
        </section>
     );
}
 
export default OurTeam;