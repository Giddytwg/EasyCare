import Hero from "../Components/Hero"
import WhoWeAre from "../Sections/WhoWeAre";
import OurServices from "../Sections/OurServices";
import HowItWorks from "../Sections/HowItWorks";
import OurTeam from "../Sections/OurTeam";
import Testimonies from "../Sections/Testimonies";
import Pricing from "../Sections/Pricing";
import FAQs from "../Sections/FAQs.jsx";
import Contact from "../Sections/Contact.jsx";
import Footer from "../Sections/Footer.jsx";
import Gsap from "../Components/GSAP.jsx";


const Home = () => {
   return ( 
      <div className="home">
         <Hero />
         {/* Who are we */}
         <WhoWeAre />

         {/* Our Services */}
         <OurServices />

         {/* How it works */}
         <HowItWorks />

         {/* Our Team */}
         <OurTeam />

         {/* Testimonies */}
         {/* <Testimonies /> */}

         {/* Pricing*/}
         <Pricing />

         {/* FAQs */}
         <FAQs />


         {/* Contact */}
         <Contact />

         {/* Footer */}
         <Footer />
      </div>
    );
}
 
export default Home;