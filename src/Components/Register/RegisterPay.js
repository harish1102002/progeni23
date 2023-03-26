const RegisterPay = () => {
    return ( 
        <div className="register_pay">
            <h2 className="payment_details">
                Payment Details
            </h2>
            <div className="upi_id">
                <p>Registration Fee: <b><span style={{fontFamily:"sans-serif"}}>₹</span>200</b></p>
               <span> UPI ID : <b>6379115344@ibl / 9789784979@axl </b></span>
            </div>
            <span>Note:</span>
            <ul> 
                <li>Once you make the payment confirm your registration with <b>Chandru-90470 67413</b> or <b>Surya-6379115344</b></li>
                <li>By Registering you can participate in all events.</li>
                <li>For the ease of participants on the spot payment option is also available.</li>
                <li>Photography and Connection are online events</li>
            </ul>
        </div>
     );
}
 
export default RegisterPay;