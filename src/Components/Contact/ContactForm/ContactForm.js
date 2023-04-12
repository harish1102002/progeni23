import "./ContactForm.css";
import React,{useState,useRef} from "react";
import { PulseLoader } from "react-spinners";
import toast, { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';

const ContactForm = () => {

    const form = useRef();
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

        setLoading(true);

        // emailjs.sendForm('service_2qpw1h8', 'template_0d4fybv', form.current, 'ovDE8AEcF65leEhNr')
        // .then((result) => {
        //     console.log(result.text);
        //     toast.success("mail send to team");
        //     setLoading(false);
        //     reset();
        // }, (error) => {
        //     console.log(error.text);
        //     toast.error('error in sending mail');
        //     setLoading(false);
        // });
        
            return
        }

    const reset = ()=>{
        setFname('');
        setLname('');
        setMail('');
        setMsg('');
        setPhn('');
    }

    return (  
       <form className="contact_form_element" ref={form} onSubmit={contactFormHandler}>
           <Toaster />
            <div className="contact_form">
                <div className="input_container">
                    <label className="contact_user">FirstName</label>
                    <input type="text" name="f_name" value={fname} onChange={fnameChangeHandler} required/>
                </div>
                <div className="input_container">
                    <label className="contact_user">LastName</label>
                    <input type="text" name="f_lname" value={lname} onChange={lnameChangeHandler} required/>
                </div>
                <div className="input_container">
                    <label className="contact_user">Mail id</label>
                    <input type="email" name="f_mail" value={mail} onChange={mailChangeHandler} required/>
                </div>
                <div className="input_container">
                    <label className="contact_user">Phone</label>
                    <input type="tel" name="f_phn" value={phn} onChange={phnChangeHandler} required/>
                </div>
                <div className="input_container">
                    <label className="contact_user">Message</label>
                    <textarea  name="f_msg" rows="6" placeholder="Write your message..." value={msg} onChange={msgChangeHandler} required></textarea>
                </div>
            </div>
            <div className="contact_submit">
                <button type="submit">{loading ? <PulseLoader loading={loading} margin={2} color="#ffff" size={8}/> : "Send Message"}</button>
            </div>
       </form>
    );
}
 
export default ContactForm;