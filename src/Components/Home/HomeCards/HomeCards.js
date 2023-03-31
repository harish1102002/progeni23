import "./HomeCards.css";
import { Link } from "react-router-dom";
import items from "./eventsDetails"
// import web from "../../../Images/Home/web.svg"
const HomeCards = () => {

    const techEvents = [
        {
            name:"Poppins",
            icon:"fas fa-file-powerpoint"
        },
        {
            name:"Code++",
            icon:"fas fa-solid fa-file-code"
        },
        {
            name:"StyleStack",
            icon:"fas fa-code"
        },
        {
            name:"Gnidoc",
            icon:"fas fa-terminal"
        }
    ]

    const nonTechEvents = [
        {
            name:"MindFest",
            icon:"fas fa-brain"
        },
        {
            name:"Mystery Chase",
            icon:"fas fa-gem"
        },
        {
            name:"MemeBuzz",
            icon:"fas fa-photo-video"
        },
        {
            name:"GameScape",
            icon:"fas fa-gamepad"
        },
    ]


    return ( 
        <>
        {/* technical */}
        <h2 className="home_header">Technical</h2>
        <div className="home_card_container">
            {
                techEvents.map((techEvent,index)=>(
                    <div className="home_card" key={index}>
                        <div className="face face1">
                            <div className="content">
                            <i className={techEvent.icon}></i>
                            {/* <img src={web} alt="web" /> */}
                            <h3>{techEvent.name}</h3>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="content">
                            <button className="events_readmore"><Link to={`/event/${index+1}`} state={items}>Read More</Link></button> 
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>

        {/* non-techinical */}
        <h2 className="home_header">Non Technical</h2>
        <div className="home_card_container">
            {
                nonTechEvents.map((nonTechEvent,index)=>(
                    <div className="home_card" key={index}>
                        <div className="face face1">
                            <div className="content">
                            <i className={nonTechEvent.icon}></i>            
                            <h3>{nonTechEvent.name}</h3>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="content">
                            <p>{nonTechEvent.short}</p>
                            <button className="events_readmore"><Link to={`/event/${index+5}`} state={items}>Read More</Link></button> 
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
        </>
     );
}
 
export default HomeCards;