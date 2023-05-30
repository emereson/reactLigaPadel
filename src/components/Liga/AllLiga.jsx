import React, { useEffect, useState } from 'react'
import InscriptionsLiga from './InscriptionsLiga'
import InProgressLiga from './InProgressLiga'
import FinishedLiga from './FinishedLiga'

const AllLiga = () => {
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
            <InProgressLiga />
            <FinishedLiga />
            <div className={`allInscription__Img2 ${imagesLoaded ? 'loaded' : ''}`}>
                <img src="./tenista4.png" alt="" />
            </div>
        </div>
    )
}

export default AllLiga