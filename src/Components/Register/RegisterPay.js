import im from "../../Images/prqr.png";

const RegisterPay = () => {
    return ( 
        <div className="register_pay">
            <h2 className="payment_details">
                Payment Details
            </h2>
            <div className="fl2">
            <div className="fl4"><div className="fl3"><img src={im} className="im"></img>
            <span>Prakash</span></div><div className="fl3">
            <img src={im} className="im"></img><span>Javid</span></div></div>
            <div className="note"><span>Note:</span>
            <ul>
                <li>Scan this Qr and make payment then proceed with registration</li>
                <li>Once you make payment verify it with Prakash-9361415123 or Javid-8300527035</li>
                <li>By Registering you can participate in all events.</li>
                <li>For the ease of participants on the spot payment option is also available (Rs.250)</li>
                <li>MemeBuzz is an online event</li>
            </ul></div>
            </div>
        </div>
     );
}
 
export default RegisterPay;