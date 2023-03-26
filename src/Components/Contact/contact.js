import "./contact.css";
import ContactForm from "./ContactForm/ContactForm";
import ContactInfo from "./ContactInfo/ContactInfo";
const Contact = () => {
    
    return (
            <div className="contact">
                <div className="contact_title">
                    <h2>Contact Us</h2>
                    <p>Any questions or remarks? Just write us a message!</p>
                </div>
                <div className="contact_form_container">
                    <ContactInfo/>
                    <ContactForm/>
                </div>
            </div>
     );
}
 
export default Contact;