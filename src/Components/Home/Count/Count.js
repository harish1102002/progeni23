import { useEffect, useState } from 'react';
import {db} from "../../../firebase";
import CountUp from 'react-countup';
import {getDocs, collection} from "firebase/firestore";
import "./Count.css";
const Count = ()=>{

    const [pCount,setPCount] = useState("");

    useEffect(()=>{
        async function fetchData(){
            const snapshot = await getDocs(collection(db,"students"));
            setPCount(snapshot.size);
        }
        fetchData();
    },[])


    return(
        <div className="Counter">
           <CountUp start={0} end={pCount} delay={0} duration={1}>
            {({ countUpRef }) => (
                <div className="participants_count">
                <span>Registered : </span>
                <span ref={countUpRef} />
                </div>
            )}
            </CountUp>
        </div>
    )
}
export default Count;