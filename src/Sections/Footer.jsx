import FooterDetails from "../Components/FooterDetails";
import Newsletter from "../Components/Newsletter";

const Footer = () => {
    return ( 
        <footer className="p-6 md:p-14">
            <Newsletter />

            <FooterDetails />
        </footer>
     );
}
 
export default Footer;