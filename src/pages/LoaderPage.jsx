import React, { useState } from 'react'
import './pageStyles/loaderPage.css'

const LoaderPage = () => {

    const [closeloader, setcloseloader] = useState(true)


    const timer = setTimeout(() => {
        setcloseloader(false)

    }, 3000);


    return (
        <div className={closeloader ? 'loaderPage__container' : 'close__loader'}>
            <div className='loaderPage__img'>
                <img src="../logoPadel.png" alt="" />
            </div>
        </div>
    )
}

export default LoaderPage