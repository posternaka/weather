import { useNavigate } from 'react-router-dom';

// FontAwasomeIcon import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import Information from './Information';
import Languages from './Languages';
import Footer from './Footer';
import HeaderInformation from './HeaderInformation';


function Main( {city, lang} ) {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    return (
        <div className="wrapper__flex">

            <div className="goBack">
                <FontAwesomeIcon icon={faChevronLeft} className='fa-icons goBack__icons' onClick={() => goBack()}/>
            </div>

            <Languages />
                
            {/* Main title */}
            <h1 className="wrapper__title">{city.name}</h1>
            
            {/* Main card with information about temp now and img weather */}
            <HeaderInformation city={city} />

            {/* Informative about weather */}
            <Information city={city} lang={lang} />

            {/* Information about sunrise and sunset */}
            <Footer city={city} lang={lang} />

        </div> 
    )
}

export default Main