import React, { useEffect, useState } from 'react'
import InscriptionsAmerican from '../components/Americano/inscriptionsAmerican'
import InscriptionsLiga from '../components/Liga/InscriptionsLiga'
import InscriptionsTorneo from '../components/Torneo.jsx/InscriptionsTorneo'

const AllInscriptions = () => {

    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setImagesLoaded(true);
        }, 500);

        return () => clearTimeout(timer);
    }, []);


    return (
        <div className='allInscription__container'>
            <div className={`allInscription__Img1 ${imagesLoaded ? 'loaded' : ''}`}>
                <img src="./tenista3.png" alt="" />
            </div>
            <InscriptionsLiga />
            <InscriptionsAmerican />
            <InscriptionsTorneo />
            <div className={`allInscription__Img2 ${imagesLoaded ? 'loaded' : ''}`}>
                <img src="./tenista4.png" alt="" />
            </div>
        </div>
    )
}

export default AllInscriptions