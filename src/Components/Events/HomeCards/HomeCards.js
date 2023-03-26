import "./HomeCards.css";
// import web from "../../../Images/Home/web.svg"
import { Link } from "react-router-dom";
import items from "../../Home/HomeCards/eventsDetails"
const HomeCards = () => {

    const techEvents = [
        {
            name:"Mr.Engineer",
            short:"Project your skills extend your knowledge break the limits and design the unimaginable🤟",
            icon:"fas fa-cogs"
        },
        {
            name:"Code Debugging",
            short:"Bugs are the best fuel for a true coder they shape you into the inevitable🤙",
            icon:"fas fa-bug"
        },
        {
            name:"Web Designing",
            short:"Lets design the most magnificient pages to induce traffic and provide services🙌",
            icon:"fas fa-code"
        },
        {
            name:"PPT",
            short:"Everything begins with an idea express your marvelous ideas and lets work it out together👊",
            icon:"fas fa-file-powerpoint"
        }
    ]

    const nonTechEvents = [
        {
            name:"Googling",
            short:"Google is something more than a search engine show off your googling skills and find modern solutions🤘",
            icon:"fab fa-google"
        },
        {
            name:"Marketing",
            short:"The world is full of ads reveal your new marketing strategies to eliminate these exasperating strategies👊",
            icon:"fas fa-chart-bar"
        },
        {
            name:"Photography",
            short:"Photographs capture those exciting moments that are gone forever, impossible to recreate🤙",
            icon:"fas fa-photo-video"
        },
        {
            name:"Connection",
            short:"Show case your logical connecting skills and resurge your memory to find solutions for this amazing event🙌",
            icon:"fas fa-network-wired"
        },
    ]

    return ( 
        <>
        {/* technical */}
        <h2 className="home_headers">Technical</h2>
        <div className="home_card_containers">
            {
                techEvents.map((techEvent,index)=>(
                    <div className="home_cards" key={index}>
                        <div className="faces face1s">
                            <div className="contents">
                            <i className={techEvent.icon}></i>
                            {/* <img src={web} alt="web" /> */}
                            <h3>{techEvent.name}</h3>
                            </div>
                        </div>
                        <div className="faces face2s">
                            <div className="contents">
                            <p>{techEvent.short}</p>
                            <button className="events_readmore"><Link to={`/event/${index+1}`} state={items}>Read More</Link></button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>

        {/* non-techinical */}
        <h2 className="home_headers">Non Technical</h2>
        <div className="home_card_containers">
            {
                nonTechEvents.map((nonTechEvent,index)=>(
                    <div className="home_cards" key={index}>
                        <div className="faces face1s">
                            <div className="contents">
                            <i className={nonTechEvent.icon}></i>            
                            <h3>{nonTechEvent.name}</h3>
                            </div>
                        </div>
                        <div className="faces face2s">
                            <div className="contents">
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