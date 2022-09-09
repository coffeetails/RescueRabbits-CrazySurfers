

import Animal from "../components/Animal";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Search from "../components/Search";


const LandingPage = () => {
    return(
        <>
            <Header/>
            <h1>Landing Page</h1>
            <Animal />
            <Footer />
        </>
    )
}

export default LandingPage;