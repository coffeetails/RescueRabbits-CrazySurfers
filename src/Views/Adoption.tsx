import Header from "../components/Header";
import Footer from "../components/Footer";

import "./adoption.scss";

const Adoption = () =>{
    return(
        <>
        <Header/>
        
        <section className="flex-container">
            <article className="info-adopt">
                <h1>Att adoptera</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum risus consequat imperdiet aliquam, 
                    integer placerat et turpis mi eros nec lobortis taciti, vehicula nisl litora tellus ligula porttitor metus. Vivamus integer non suscipit taciti mus etiam at primis tempor sagittis sit, 
                    euismod libero facilisi aptent elementum felis blandit cursus gravida sociis erat ante, eleifend lectus nullam dapibus netus feugiat curae curabitur est ad. Massa curae fringilla porttitor quam sollicitudin iaculis aptent leo ligula euismod dictumst, orci penatibus mauris eros etiam praesent erat volutpat posuere hac. Metus fringilla nec ullamcorper odio aliquam lacinia conubia mauris tempor, etiam ultricies proin quisque lectus sociis id tristique, integer phasellus taciti pretium adipiscing tortor sagittis ligula. 
                    Mollis pretium lorem primis senectus habitasse lectus scelerisque donec, ultricies tortor suspendisse adipiscing fusce morbi volutpat pellentesque, consectetur mi risus molestie curae malesuada cum. Dignissim lacus convallis massa mauris enim ad mattis magnis senectus montes, mollis taciti phasellus accumsan bibendum semper blandit suspendisse faucibus nibh est, metus lobortis morbi cras magna vivamus per risus fermentum. Dapibus imperdiet praesent magnis ridiculus congue gravida curabitur dictum sagittis, enim et magna sit inceptos sodales parturient pharetra mollis, aenean vel nostra tellus commodo pretium sapien sociosqu.
                </p>
            </article>
            <article className="customer-reviews">
                <h3 className="customer-headline">
                Från andra som har adopterat djur
                </h3>
                <div className="reviews">
                    <p>ANNA</p>
                    <p>2022-08-14</p>
                    <p>Det har varit jättesmidigt att adoptera och det har gått sååå bra med allt. Min nya lilla kanin MrBun trivs sååå bra hemma hos mig och jag har fått hjälp med allt som MrBun kan tänkas behöva! TUSEN TACK!         
                    </p>
                </div>
                <div className="reviews">
                    <p>STEFAN</p>
                    <p>2021-01-04</p>
                    <p>Vi fann varandra vid första blicken sen dess har jag och min nya bästa kompis hunden "Ludde" haft många mysig och roliga stunder i skog och hemma framför TV´n. Tack Rescue Rabbits för er hjälp att få en ny bästa kompis på ålderns höst.        
                    </p>
                </div>
                <div className="reviews">
                    <p></p>
                    <p>2019-12-14</p>
                    <p>
                        Vilken Julklapp dottern fick när vi fann den perfekta kissen, lyckan var total. Lilla "Temla" är så bra med dottern och sonen och lyfter upp livet med lite bus.        
                    </p>
                </div>
            </article>
        </section>

        <Footer />
        </>
    )
}

export default Adoption;