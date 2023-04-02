const Thanks = (props) => {

    return (  
        <div className="thanks">
            <h2>Thanks for Registering</h2>
            <p>Your id : <b>#P{props.studentAbstract.id}</b></p>
            <p>Your EmailId : {props.studentAbstract.email}</p>
            <p>Your TransactionId : {(props.studentAbstract.transid.trim()=="")?"Not paid":props.studentAbstract.transid}</p>
            <p>Check Your Mail For Further details</p>
            <p>Transaction Status : {props.studentAbstract.ts}</p>
            <p style={{fontWeight:"bold"}}>Registration Fee: <span style={{fontFamily: 'FontAwesome'}}>&#x20b9;</span>200</p>      
        </div>
    );
}
 
export default Thanks;