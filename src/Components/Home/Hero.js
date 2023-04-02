import "./Home.css";
import {Link} from "react-router-dom";
import CountDown from "./CountDown/CountDown";
import Typewriter from 'typewriter-effect'
const HeroHome = () => {
    return ( 
        <div className="hero_home">
            <section className="hero">
                <div className="content">
                    <h2>GOVERNMENT COLLEGE OF ENGINEERING , SALEM-11</h2>
                    <h3 className="dept_name">DEPARTMENT OF COMPUTER SCIENCE ENGINEERING.</h3>
                    <h3 className="progeni motion-text"><Typewriter  options={{autoStart : true,loop :true,delay :50,strings:["Progen'i  23.0"," Progen'i  23.0"," Progen'i  23.0"]}}/></h3>
                    <p><b>April 12 2023</b></p><br/>
                    <p>A National Level Technical Symposium conducted by Society for Advancement of Computer Science and Engineering (SACSE) in order to nurture and encourage young talents and innovations through different events.</p>
                    <CountDown/>
                </div>
                <Link to="/register"><button className="btn-hover color-5">Register Now</button></Link>
                <div className="waves"></div>
            </section>
        </div>
     );
}
 
export default HeroHome;