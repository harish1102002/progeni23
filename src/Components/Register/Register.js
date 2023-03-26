import { useState } from "react";
import "./Register.css";
import { toast,Toaster } from "react-hot-toast";
import {addDoc,collection} from "firebase/firestore";
import { db } from "../../firebase";
import axios from "axios";
import Thanks from "./Thanks";
import { PulseLoader } from "react-spinners";
import RegisterPay from "./RegisterPay";
const Register = ()=>{

  const [name,setName]  = useState("");
  const [email,setEmail] = useState("");
  const [phn,setPhn] = useState("");
  const [clg,setClg] = useState("");
  const [department,setDepartment] = useState("");
  const [year,setyear] = useState("");
  const [event,setEvent] = useState("");
  const [thanks,setThanks] = useState(false);
  const [studentInfo,setStudentInfo] = useState({});
  let [loading, setLoading] = useState(false);

  const nameChangeHandler = (e)=>{
    setName(e.target.value);
  }
  const emailChangeHandler = (e)=>{
    setEmail(e.target.value);
  }
  const phnChangeHandler = (e)=>{
    setPhn(e.target.value);
  }
  const clgChangeHandler = (e)=>{
    setClg(e.target.value);
  }
  const departmentChangeHandler = (e)=>{
    setDepartment(e.target.value);
  }
  const yearChangeHandler = (e)=>{
    setyear(e.target.value);
  }
  const changeEventHandler = (eventType)=>{
    setEvent(eventType);
  }

  const RegisterFormHandler = async(e)=>{

    e.preventDefault();

    const uniqueId = Math.floor(Math.random()*90000) + 10000;

    setStudentInfo({id:uniqueId,email});

    const details = {
        id:"PROGENI-"+uniqueId,
        name,
        email,
        phn,
        clg,
        department,
        year,
        event,
    }

    setLoading(true);

    const mailData = {
        to : email,
        subject:"Registered for Progeni Events",
        text: "PROGENI-"+uniqueId,
        userDetails:details
    }

    const result = await axios.post("https://stark-earth-12970.herokuapp.com/v1/progeni-mail/text-Mail",mailData);

    if(result.status === 200)
    {
          // Add a new document in collection "cities"
          await addDoc(collection(db, "students"), details);
          toast.success("Registered Successfull");
          window.setTimeout(()=>{
            setThanks(true);
          },3000);
          setLoading(false);
    }
    else{
        toast.error("Registeration failed :( please contact our team");
        setLoading(false);
        return;
    }    
  }


return(  
    <div className="register_container">
      {
        thanks ? <Thanks studentAbstract={studentInfo}/> :
     <div className="registration_form"> 
     <Toaster/>
    <div className="title">Registration</div>
    
    <div className="content">
      
      {/* <form onSubmit={RegisterFormHandler}> */}
      <form >
        <div className="user-details">

          <div className="input-box">
            <span className="details">Full Name</span>
            <input type="text" placeholder="Enter your name" value={name} onChange={nameChangeHandler} required />
          </div>
          
          <div className="input-box">
            <span className="details">Email</span>
            <input type="text" placeholder="Enter your email" value={email} onChange={emailChangeHandler} required />
          </div>

          <div className="input-box">
            <span className="details">Phone Number</span>
            <input type="tel" placeholder="Enter your number" value={phn} onChange={phnChangeHandler} required />
          </div>

          <div className="input-box">
            <span className="details">College</span>
            <input type="text" placeholder="Enter your college name" value={clg} onChange={clgChangeHandler} required />
          </div>

          <div className="input-box">
            <span className="details">Department</span>
            <input type="text" placeholder="Enter your Dep name" value={department} onChange={departmentChangeHandler} required />
          </div>

          <div className="input-box">
            <span className="details">Year</span>
            <input type="text" placeholder="Pursuing Year" value={year} onChange={yearChangeHandler}  required />
          </div>

        </div>

        <div className="gender-details">
          <span className="gender-title">Event</span>
          <input type="radio" name="gender" id="dot-1" />
          <input type="radio" name="gender" id="dot-2" />
          <input type="radio" name="gender" id="dot-3" />
          <input type="radio" name="gender" id="dot-4" />
          <input type="radio" name="gender" id="dot-5" />
          <div className="category">
            <label htmlFor="dot-1" onClick={()=>changeEventHandler("Technical")}>
              <span className="dot one"></span>
              <span className="gender">Technical</span>
            </label>
            <label htmlFor="dot-2" onClick={()=>changeEventHandler("Non-Technical")}>
              <span className="dot two"></span>
              <span className="gender">Non technical</span>
            </label>
            <label htmlFor="dot-3" onClick={()=>changeEventHandler("All Events")}>
              <span className="dot three"></span>
              <span className="gender">All Events</span>
            </label>
            <br />                     
          </div>
          <br />
        </div>

        <div className="button">
          <button type="submit">{loading ? <PulseLoader loading={loading} margin={2} color="#ffff" size={8}/> : "Run"}</button>
        </div>

      </form>
    </div>
    <div className="blob"></div> 
    </div>}
    <RegisterPay/>
  </div>
);
}
export default Register;