import { useState } from "react";
import "./Register.css";
import { toast,Toaster } from "react-hot-toast";
import axios from "axios";
import Thanks from "./Thanks";
import { PulseLoader } from "react-spinners";
import RegisterPay from "./RegisterPay";

const Register = ()=>{

  const [name,setName]  = useState("");
  const [email,setEmail] = useState("");
  const [phn,setPhn] = useState("");
  const [clg,setClg] = useState("");
  const [year,setyear] = useState("");
  const [transid,settransid] = useState("");
  const [thanks,setThanks] = useState(false);
  const [studentInfo,setStudentInfo] = useState({});
  let [loading, setLoading] = useState(false);
  const site="https://progeni-server.onrender.com/";

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
  const yearChangeHandler = (e)=>{
    setyear(e.target.value);
  }
  const transidChangeHandler = (e)=>{
    settransid(e.target.value);
  }

  const RegisterFormHandler = async(e)=>{

    e.preventDefault();

    const uniqueId = Math.floor(Math.random()*90000) + 10000;

    setStudentInfo({id:uniqueId,email});

    const event=[]
    let y=document.getElementsByClassName("check")

    for(let i=0;i<y.length;i++)
      event.push(y[i].checked);

    const details = {
        id:"PROGENI-"+uniqueId,
        name,
        email,
        phn,
        clg,
        year,
        transid,
        event,
    }

    setLoading(true);

    const mailData = {
        to : email,
        subject:"Registered for Progeni Events",
        text: "PROGENI-"+uniqueId,
        userDetails:details
    }

    fetch(site,{
      method:"POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({post:details})
    }).then((j)=>{
      toast.success("Registered Successfull");
      window.setTimeout(()=>{
        setThanks(true);
      },3000);
      setLoading(false);})
  }


return(  
    <div className="register_container">
      {
        thanks ? <Thanks studentAbstract={studentInfo}/> :
     <div className="registration_form"> 
     <Toaster/>
    <div className="title">Registration</div>
    
    <div className="content">
      
      <form onSubmit={RegisterFormHandler}>
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
            <span className="details">Year</span>
            <input type="text" placeholder="pursuing year" value={year} onChange={yearChangeHandler} required />
          </div>

          <div className="input-box">
            <span className="details">Transaction Id (optional)</span>
            <input type="text" placeholder="transaction_id" value={transid} onChange={transidChangeHandler}  />
          </div>

        </div>

        <div className="gender-details">
          <span className="gender-title">Select Event</span>
          <input type="checkbox" name="gender" id="dot-1" className="check"/>
          <input type="radio" name="gender" id="dot-2" className="check"/>
          <input type="radio" name="gender" id="dot-3" className="check"/>
          <input type="checkbox" name="gender" id="dot-4" className="check"/>
          <input type="checkbox" name="gender" id="dot-5" className="check"/>
          <input type="checkbox" name="gender" id="dot-6" className="check"/>
          <input type="checkbox" name="gender" id="dot-7" className="check"/>
          <input type="checkbox" name="gender" id="dot-8" className="check"/>
          <div className="category">
            <div className="fl">
            <label htmlFor="dot-1" >
              <span className="dot one"></span>
              <span className="gender">Hack Shop</span>
            </label>
            <label htmlFor="dot-2" >
              <span className="dot two"></span>
              <span className="gender">Code++</span>
            </label>
            <label htmlFor="dot-3" >
              <span className="dot three"></span>
              <span className="gender">StyleStack</span>
            </label>               
            <label htmlFor="dot-4" >
              <span className="dot four"></span>
              <span className="gender">Gnidoc</span>
            </label></div>
            <br /><br/><div className="fl">  
            <label htmlFor="dot-5" >
              <span className="dot five"></span>
              <span className="gender">MindFest</span>
            </label>
            <label htmlFor="dot-6" >
              <span className="dot six"></span>
              <span className="gender">Mystery Chase</span>
            </label>            
            <label htmlFor="dot-7" >
              <span className="dot seven"></span>
              <span className="gender">GameScape</span>
            </label>
            <label htmlFor="dot-8" >
              <span className="dot eight"></span>
              <span className="gender">MemeBuzz</span>
            </label></div>               
          </div>
          <br />
        </div>

        <div className="button">
          <button type="submit">{loading ? <PulseLoader loading={loading} margin={2} color="#ffff" size={8}/> : "Register"}</button>
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