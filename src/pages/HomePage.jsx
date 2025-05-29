import Banner from '../components/Banner'
import Footer from '../components/Footer'
import HumanAI from '../components/HumanAI'
import Services from '../components/Services'


function HomePage() {
    return (
        <div>
            <Banner/>
            <Services/>
            <HumanAI/>
            <Footer/>
        </div>
    )
}

export default HomePage