import ContactForm from "../Components/ContactForm";
import Heading from "../Components/Heading";
import Map from "../Components/Map";



const Contact = () => {
    return ( 
        <section className="services p-6 md:p-14 flex flex-col gap-4">
        <div className=" text-center">
            <Heading title='Contact' bg='white' msg='We’re Here to Help!' />
        </div>
        <div>
            {/* <Map /> */}
        </div>

        <div>
            <ContactForm />
        </div>
       
</section>
     );
}
 
export default Contact;