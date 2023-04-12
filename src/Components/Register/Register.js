import { useEffect, useRef, useState } from "react";
import "./Register.css";
import { toast,Toaster } from "react-hot-toast";
import Thanks from "./Thanks";
import { PulseLoader } from "react-spinners";
import RegisterPay from "./RegisterPay";
import emailjs from '@emailjs/browser';

const Register = ()=>{

  const form = useRef();
  const [p,setp]  = useState("");
  const [n,setn]  = useState("");
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

    let pp=p.slice(),zz=0,ts="";

    if(transid.trim()=="")
    ts="Not Paid";
    else
    ts="Your Payment is being Verified, we will update you in mail within 24hrs."

    pp.forEach((e)=>{if(e.email==email)zz=1});
    if(zz==1)
    {toast.error("Email Already Registered, Please Login from Account Tab");return}
    
    const uniqueId = 2300000+n*100+Math.floor(Math.random()*100);
    if(n==1)
    uniqueId+=10000;

    setStudentInfo({id:uniqueId,email,transid,name,ts});

    const details = {
        id:"#P"+uniqueId,
        name,
        email,
        phn,
        clg,
        year,
        transid,
        ts
    }

    setLoading(true);

    emailjs.sendForm('service_2qpw1h8', 'template_bmk1ddl', form.current, 'ovDE8AEcF65leEhNr')
      .then((result) => {}, (error) => {
          toast.error('error in sending mail');
      });
    emailjs.send('service_u68kfjs', 'template_bj0uuox', details, 'nXXhvd-z7kWl4fDml')
    .then((result) => {}, (error) => {
        toast.error('error in sending mail');
    });
    

    fetch(site,{
      method:"POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({post:details})
    }).then((j)=>j.json()).then((j)=>{
      toast.success("Registered Successfully");
      window.setTimeout(()=>{
        setThanks(true);
      },3000);
      setLoading(false);})

      setName("");
      setEmail("");setPhn("");
      setyear("");setClg("");
      settransid("");
  }
  useEffect(()=>{
    fetch(site).then((j)=>j.json()).then((j)=>{setp(j);setn(j.length+1);});
  },[])

return(  
    <div className="register_container">
      {
        thanks ? <Thanks studentAbstract={studentInfo}/> :
     <div className="registration_form"> 
     <Toaster/>
    <div className="title">Registration</div>
    
    <div className="content">
      
      <form onSubmit={RegisterFormHandler} ref={form}>
        <div className="user-details">

          <div className="input-box">
            <span className="details">Full Name</span>
            <input type="text" placeholder="Enter your name" value={name} name="n" onChange={nameChangeHandler} required />
          </div>
          
          <div className="input-box">
            <span className="details">Email</span>
            <input type="text" placeholder="Enter your email" value={email} name="e" onChange={emailChangeHandler} required />
          </div>

          <div className="input-box">
            <span className="details">Phone Number</span>
            <input type="tel" placeholder="Enter your number" value={phn} name="p" onChange={phnChangeHandler} required />
          </div>

          <div className="input-box">
            <span className="details">College</span>
            <input type="text" placeholder="Enter your college name" value={clg} name="c" onChange={clgChangeHandler} required />
          </div>

          <div className="input-box">
            <span className="details">Year</span>
            <input type="text" placeholder="pursuing year" value={year} name="y" onChange={yearChangeHandler} required />
          </div>

          <div className="input-box">
            <span className="details">Transaction Id (optional)</span>
            <input type="text" placeholder="transaction_id" value={transid} name="t" onChange={transidChangeHandler}  />
          </div>

        </div>

        <div className="button">
          <button type="submit">{loading ? <PulseLoader loading={loading} margin={2} color="#ffff" size={8}/> : "Register"}</button>
        </div>

      </form>
    </div>
    <div className="blob"></div> 
    </div>}
  </div>
);
}
export default Register;