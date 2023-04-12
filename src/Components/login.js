import { useState, useEffect } from "react";
import { toast,Toaster } from "react-hot-toast";
import "./Register/Register.css";

const Login = () => {
  const [p, setp] = useState([]);
  const [d, setd] = useState([]);
  const [v, setv] = useState(false);
  const site="";

  useEffect(() => {
    fetch(site)
      .then((j) => j.json())
      .then((j) => setp(j));
  }, []);

  const RegisterFormHandler = async (e) => {
    e.preventDefault();
    let y = document.getElementsByTagName("input")[0].value,x = p.slice(),z=0;
    x.forEach((e)=>{
        if(e.email==y)
        {setd(e);
        setv(true);
        z=1;}
    })
    if(z==0)
    toast.error("Wrong Credentials")
    else
    toast.success("Login Successfull");
  };

  return (
    <div className="register_container">
    <Toaster/>
      {!v && (
        <div className="registration_form">
          <div className="title">Login</div>
          <div className="content">
            <form onSubmit={RegisterFormHandler}>
              <div className="user-details">
                <div className="input-box full">
                  <span className="details">Email</span>
                  <input type="text" placeholder="Enter your email" required />
                </div>
              </div>
              <div className="button">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}
      {v && (
        <div className="registration_form">
          <div className="title">Login Successful</div>
          <div className="content content2">
            <form onSubmit={RegisterFormHandler}>
              <div className="login">
              <span className="user">Hi {d.name}</span>
              <span className="pid">Your Progeni Id</span>
              <span className="user">{d.id}</span>
              <span className="pid">{d.email}</span>
              <span className="user">{d.clg}</span>
              <span className="pid">{d.phn}</span>
              <div className="user">Transaction Status : {(d.ts=="Not Paid")?<span style={{"color":"red"}}>{d.ts}</span>:((d.ts=="Paid")?<span style={{"color":"green"}}>{d.ts}</span>:<span style={{"color":"orange"}}>{d.ts}</span>)}</div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
