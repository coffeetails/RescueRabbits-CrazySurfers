import Footer from "../components/Footer";
import Header from "../components/Header";
import aboutpic from '../images/categories/aboutuspic.jpg'
import './about.scss'

const About = () =>{
    return(
        <>
        <Header/>
            <section className="about-flex-container">
                <article className="big-info">
                    <img src={aboutpic} alt="dogcatpic" />
                    <div>
                        <p className="title-p">Rescue Rabbits</p>
                        <h1 className="title-h1">“Det bästa sättet att hitta en ny kompis”</h1>
                    </div>
                </article>
                <article className="small-info">
                    <div className="info-left">
                        <h3 className="info-h3">
                        På plats och online sen 2010
                        </h3>
                        <p>
                        Vi startade vår verksamhet i våra lokaler på Herrhagen och lanserade vår webstjänst samtidigt. Vi har efter det flyttat till våra nya lokaler placerade i Natursköna Marieberg där djuren får en lugn och harmonisk miljö runt knutarna i väntan på att finna sitt nya hem.
                        </p>
                    </div>
                    <div className="info-right">
                        <h3 className="info-h3">
                        Vi sätter djuren främst!
                        </h3>
                        <p>
                        Sen starten har vi drivits av en stark motivation att föra talan för dom som inte kan prata med vanligt tal och se till att dom förtjänar det absolut bästa. Detta flödar igenom hela vår adoptions process från start till att dom små liven har hittat ett nytt och kärleksfullt liv.
                        </p>
                    </div>
                </article>
            </section>


        <Footer />
        </>
    )
}

export default About;