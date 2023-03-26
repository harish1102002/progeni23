import "./Home.css"
import Hero from "./Hero"
import HomeCards from "./HomeCards/HomeCards";
import HomeIntro from "./HomeIntro";
const Home = () => {
    return ( 
        <div className="home">
            <Hero/>
            <HomeIntro/>
            <HomeCards/>
        </div>
     );
}
 
export default Home;