import im from "../../Images/prqr.png";
import im2 from "../../Images/prqr.jpg";

const RegisterPay = () => {
    return ( 
        <div className="register_pay">
            <h2 className="payment_details">
                Payment Details
            </h2>
            <div className="fl2">
            <div className="fl4"><div className="fl3"><img src={im2} className="im"></img>
            <span>Prakash</span></div><div className="fl3">
            <img src={im} className="im"></img><span>Javid</span></div></div>
            <div className="note"><span>Note:</span>
            <ul>
                <li>Scan this Qr and make payment of  <b>&#8377;200</b> to confirm your registration <b>online</b>.</li>
                <li>Last date for <b>online registration</b> is 10th of April.</li>
                <li>Lunch and refreshments will be available for all the <b>contestants</b>.</li>
                <li>Once you make payment you can verify it with <b>Prakash-9361415123</b> or <b>Javid-8300527035</b></li>
                <li>For the ease of participants on the spot payment option is also available, since each event has limited seats so kindly ensure to arrive a bit earlier on day of Progeni and you have to pay <b>&#8377;250</b> for <b>onspot</b> registration</li>
                <li>By Registering, you can participate in all events.</li>
                <li>MemeBuzz is an online event.</li>
                <li>To consider your work for MemeBuzz and Poppins making payment on or before the event specific <b>deadlines</b> is a requisite.</li>
            </ul></div>
            </div>
        </div>
     );
}
 
export default RegisterPay;