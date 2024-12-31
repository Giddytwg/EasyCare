import Heading from "../Components/Heading";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import NewSlider from "../Components/Slider";
const Section5 = () => {

   
    return ( 
        <section className="services p-14 flex flex-col gap-4">
            <div className=" text-center">
                <Heading title='Testimonial' bg='white' msg='Care That Patients Trust, Stories That Inspire' />
            </div>

        {/* Team Row*/}
        <div className="flex gap-5 border-4 border-rose-400">
           <NewSlider />
        </div>
   
</section>
     );
}
 
export default Section5;