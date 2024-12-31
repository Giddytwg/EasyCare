import Heading from "../Components/Heading";
// import doctor_on_call from '/assets/doctor-on-call.png'
import doctor_on_call_2 from '/assets/doctor_on_call_2.png'
import doctor_on_call_1 from '/assets/doctor_on_call_1.png'
import StepCard from "../Components/StepCard";

const HowItWorks = () => {
    return ( 
        <section className="services p-6 md:p-14" id="section3">
            <div className=" bg-bgsoftblue p-5 md:p-14 rounded-[30px] md:rounded-[50px]">

                <div className=" text-center">
                    <Heading title='How it works' bg='white' msg='Connect with certified healthcare specialists in just a few simple steps.' />
                </div>

                <div className="content flex flex-col gap-7 lg:flex-row mt-10">
                    <div className="left basis-1/2">
                        <div className="lg:pl-32">
                            {/* <div>
                                <img src={doctor_on_call} alt="" />
                            </div> */}
                            <div className="transform -rotate-12 hover:translate-y-2 transition-all">
                                <img src={doctor_on_call_2}/>
                            </div>
                            <div className="transform rotate-12 px-24 hover:translate-y-2 transition-all">
                                <img src={doctor_on_call_1} className="w-56" />
                            </div>
                        </div>
                    </div>

                    <div className="right basis-1/2 flex flex-col gap-1">
                        <StepCard step={1} title='Sign Up or Log In' msg='Create an account or log in to start your journey with EasyCare. Your account helps us provide you with personalized services.'/>

                        <StepCard step={2} title='Choose a Service' msg='Select the service you need, whether it’s a virtual consultation, wellness checkup, or home healthcare support.'rot={3}/>

                        <StepCard step={3} title='Book a Consultation' msg='Schedule a time that’s convenient for you. Our specialists are available around the clock to provide professional care.'/>

                        <StepCard step={4} title='Get Quality Care from Home' msg='Join your session from the comfort of your home. Our specialists will guide you through each step, ensuring a smooth experience.'/>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default HowItWorks;