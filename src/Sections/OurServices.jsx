import ServicesCard from "../Components/ServicesCard";
import Heading from "../Components/Heading";



import heart_icon from '/assets/heart.svg'
import kid_icon from '/assets/kid.svg'
import brain_icon from '/assets/brain-01.svg'
import face_icon from '/assets/skull.svg'
import female_icon from '/assets/female-02.svg'
import bone_icon from '/assets/bone-02.svg'

const OurServices = () => {
    return ( 
        <section className="services p-6 md:p-14">
            <div className="flex flex-col gap-4 justify-center items-center">
               <Heading title='Our services' bg='white' msg='Explore our personalized healthcare services tailored to your needs.'/>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
               <ServicesCard icon={heart_icon} title='Cardiology' text='Expert care for heart health, including prevention, diagnosis, and management of cardiovascular conditions.' link='Book a Cardiologist' />
               <ServicesCard icon={kid_icon} title='Pediatrics' text='Comprehensive healthcare services for children, from infancy through adolescence.' link='Find a Pediatrician' />
               <ServicesCard icon={bone_icon} title='Orthopedics' text='Specialized care for bone, joint, and muscle health, including injury treatment and rehabilitation.' link='Consult an Orthopedist' />
               <ServicesCard icon={face_icon} title='Neurology' text='Skin care treatments and management for a variety of conditions, from acne to eczema.' link='See a Dermatologist' />
               <ServicesCard icon={brain_icon} title='Neurology' text='Diagnosis and treatment of neurological disorders, including headaches, seizures, and nerve issues.' link='Book a Neurologist' />
               <ServicesCard icon={female_icon} title='Gynecology' text="Women's health services, including reproductive health, preventive screenings, and pregnancy care." link='Find a Gynecologist' />
            </div>
         </section>

     );
}
 
export default OurServices;