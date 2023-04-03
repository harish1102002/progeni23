import "./ContactInfo.css";
import phone from "../../../Images/Contact/ContactInfo/phone.svg";
import email from "../../../Images/Contact/ContactInfo/email.svg";
import location from "../../../Images/Contact/ContactInfo/location.svg";

const ContactInfo = () => {

    const icons = [
        {
            name:"insta",
            link:"https://instagram.com/progenit23"
        },
        {
            name:"mail",
            link:"mailto:gcecseprogeni@gmail.com"
        }
    ];

    return ( 
        <div className="contact_info">
            <div className="info_title_desc">
                <h2>Contact Information</h2>
                <p>Fill up the form and our team will get back to you within 24 hours</p>
            </div>

            <div className="contact_details_container">
                <h2>Student Co-Ordinator</h2>
                <div className="contact_details" style={{margin:"15px 3px"}}>
                    <img src={phone} alt="phone" id="contact_phone_image"/>    
                    <div>9361415123, 9487431671, 6382111690</div>
                </div>
                <div className="contact_details">
                    <img src={email} alt="phone" />
                    <span>gcecseprogeni@gmail.com</span>
                </div>
                <div className="contact_details">
                    <img src={location} alt="phone" />
                    <span>GCE, Salem-11.</span>
                </div>
            </div>

            <div className="social_icons contact_social_icons">
                    {
                        icons.map((icon,index)=>{
                            const image = require(`../../../Images/Contact/Social/${icon.name}.svg`);
                            return(

                                <a href={icon.link} target="_blank" rel="noreferrer" key={index} className="contact_social">
                                <img src={image}  alt={icon.name} />
                                </a>
                                
                            )
                        })
                    }
            </div>

        </div>
     );
}
 
export default ContactInfo;