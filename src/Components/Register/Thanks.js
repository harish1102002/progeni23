const Thanks = (props) => {

    return (  
        <div className="thanks">
            <h2>Thanks for Registering</h2>
            <p>Your id : <b>PROGENI-{props.studentAbstract.id}</b></p>
            <p>Check your mail {props.studentAbstract.email} for reference of your ID. </p>
            <p style={{fontWeight:"bold"}}>Registration Fee: <span style={{fontFamily: 'FontAwesome'}}>&#x20b9;</span>200</p>      
        </div>
    );
}
 
export default Thanks;