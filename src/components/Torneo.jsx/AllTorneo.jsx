import React, { useEffect, useState } from 'react'
import InscriptionsTorneo from './InscriptionsTorneo'
import InProgressTorneo from './InProgressTorneo'
import FinishedTorneo from './FinishedTorneo'

const AllTorneo = () => {
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
            <InscriptionsTorneo />
            <InProgressTorneo />
            <FinishedTorneo />
            <div className={`allInscription__Img2 ${imagesLoaded ? 'loaded' : ''}`}>
                <img src="./tenista4.png" alt="" />
            </div>
        </div>
    )
}

export default AllTorneo