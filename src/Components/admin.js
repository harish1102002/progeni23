import { toast,Toaster } from "react-hot-toast";
import { useState } from "react";


const Ad =()=>{

    const site="https://progeni-server.onrender.com/1";

    const sub=()=>{
        let v=document.getElementsByTagName("input")[0]
        if(v.value.trim()=="")
        return;

        fetch(site,{
          method:"POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({id:v.value.trim()})
        }).then((j)=>j.json()).then((j)=>{
            toast.success("Updated Successfully");v.value="";})
    }

    return(
        <><br/><Toaster/><br/><br/><input/>
        <button onClick={sub}>submit</button><br/></>
    )
}

export default Ad;