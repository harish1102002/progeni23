import "./ContactForm.css";
import {useState} from "react";
import axios from "axios";
import { PulseLoader } from "react-spinners";
import toast, { Toaster } from 'react-hot-toast';

const ContactForm = () => {

    const [fname,setFname] = useState("");
    const [lname,setLname] = useState("");
    const [mail,setMail] = useState("");
    const [phn,setPhn] = useState("");
    const [msg,setMsg] = useState("");
    let [loading, setLoading] = useState(false);

    const fnameChangeHandler = (e)=>{
        setFname(e.target.value);
    }

    const lnameChangeHandler = (e)=>{
        setLname(e.target.value);
    }

    const mailChangeHandler = (e)=>{
        setMail(e.target.value);
    }

    const phnChangeHandler = (e)=>{
        setPhn(e.target.value);
    }

    const msgChangeHandler = (e)=>{
        setMsg(e.target.value);
    }

    const contactFormHandler = async(e)=>{
        e.preventDefault();
        const userQuery = {
            fname,
            lname,
            from:mail,
            subject : "User Query",
            phn,
            text:msg
        }

        setLoading(true);

        const result = await axios.post("https://stark-earth-12970.herokuapp.com/v1/progeni-mail/contact-team",userQuery);

        if(result.status === 200){
            toast.success("mail send to team");
            setLoading(false);
            reset();
        }
        else{
            toast.error('error in sending mail');
            setLoading(false);
            reset();
            return
        }
    }

    const reset = ()=>{
        setFname('');
        setLname('');
        setMail('');
        setMsg('');
        setPhn('');
    }

    return (  
       <form className="contact_form_element" onSubmit={contactFormHandler}>
           <Toaster />
            <div className="contact_form">
                <div className="input_container">
                    <label className="contact_user">FirstName</label>
                    <input type="text" value={fname} onChange={fnameChangeHandler} required/>
                </div>
                <div className="input_container">
                    <label className="contact_user">LastName</label>
                    <input type="text" value={lname} onChange={lnameChangeHandler} required/>
                </div>
                <div className="input_container">
                    <label className="contact_user">Mail id</label>
                    <input type="email" value={mail} onChange={mailChangeHandler} required/>
                </div>
                <div className="input_container">
                    <label className="contact_user">Phone</label>
                    <input type="tel" value={phn} onChange={phnChangeHandler} required/>
                </div>
                <div className="input_container">
                    <label className="contact_user">Message</label>
                    <textarea  rows="6" placeholder="Write your message..." value={msg} onChange={msgChangeHandler} required></textarea>
                </div>
            </div>
            <div className="contact_submit">
                <button type="submit">{loading ? <PulseLoader loading={loading} margin={2} color="#ffff" size={8}/> : "Send Message"}</button>
            </div>
       </form>
    );
}
 
export default ContactForm;