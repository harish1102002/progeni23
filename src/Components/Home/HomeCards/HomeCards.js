import "./HomeCards.css";
import { Link } from "react-router-dom";
import items from "./eventsDetails"
// import web from "../../../Images/Home/web.svg"
const HomeCards = () => {

    const techEvents = [
        {
            name:"Poppins",
            icon:"fas fa-file-powerpoint",
            short:"A classic Paper Presentation Event"
        },
        {
            name:"Code++",
            icon:"fas fa-solid fa-file-code",
            short:"A tiny scrutiny to your problem-solving skills"
        },
        {
            name:"StyleStack",
            icon:"fas fa-code",
            short:"A simple event to screen your web designing skills"
        },
        {
            name:"Gnidoc",
            icon:"fas fa-terminal",
            short:"An event to analyze your reverse coding skills"
        }
    ]

    const nonTechEvents = [
        {
            name:"MindFest",
            icon:"fas fa-brain",
            short:"A brainstorming quiz event"
        },
        {
            name:"Mystery Chase",
            icon:"fas fa-gem",
            short:"An event to dwell into the sea of clues in the hunt of treasure"
        },
        {
            name:"MemeBuzz",
            icon:"fas fa-photo-video",
            short:"An event to depict your humour skills through memes"
        },
        {
            name:"GameScape",
            icon:"fas fa-gamepad",
            short:"Gaming Event!!!"
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
                            <h3>{techEvent.name}</h3>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="content">
                                <p>{techEvent.short}</p><br/>
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
                            <h3>{nonTechEvent.name}</h3><br/>
                            </div>
                        </div>
                        <div className="face face2">
                            <div className="content">
                            <p>{nonTechEvent.short}</p><br/>
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