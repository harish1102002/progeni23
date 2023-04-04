import { toast,Toaster } from "react-hot-toast";
import { useState } from "react";
import emailjs from '@emailjs/browser';


const Ad =()=>{

    const site="https://progeni-server.onrender.com/1";

    const sub=()=>{
        let v=document.getElementsByTagName("input")[0]
        if(v.value.trim()=="")
        return;

        fetch(site,{
          method:"POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({id:"#P23"+v.value.trim()})
        }).then((j)=>j.json()).then((j)=>{
            toast.success("Updated Successfully");v.value="";})

        fetch("https://progeni-server.onrender.com/").then((j)=>j.json()).then((j)=>{
        j.forEach((k)=>{
        if(k.id==("#P23"+v.value.trim()))
        {emailjs.send('service_fm95a2p', 'template_e93ol16', {name:k.name,email:k.email}, '0SgbyhRtHDh6zPVpd')
        .then((result) => {}, (error) => {
            toast.error('error in sending mail');
        })}})});
    }

    return(
        <><br/><Toaster/><br/><p>Last 5 digits of progeni id:</p><br/><input/>
        <button onClick={sub}>submit</button><br/></>
    )
}

export default Ad;