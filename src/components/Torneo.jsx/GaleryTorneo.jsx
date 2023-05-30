import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardGaleryTorneo from './cardTorneo/CardGaleryTorneo'
import '../componentsStyle/galleryAllEventStyle.css'

const GaleryTorneo = () => {
    const [galeryTorneo, setgaleryTorneo] = useState()

    useEffect(() => {
        const url = `${import.meta.env.VITE_URL_API}/api/v1/gallery/torneo`
        axios.get(url)
            .then(res => setgaleryTorneo(res.data))
            .catch(err => console.log(err))

    }, [])
    return (
        <div className='gallery__container' >
            <div className='gallery__containerH1'>
                <h1>Galeria De Los Torneos <i className='bx bxs-tennis-ball'></i></h1>
            </div>
            {
                galeryTorneo?.results === 0 ?
                    <span>AUN NO HAY NINGUNA GALERIA</span>
                    :
                    <div className='cardGallery__container'>
                        {
                            galeryTorneo?.galleries[0].map(gallery => (
                                <CardGaleryTorneo
                                    key={gallery.id}
                                    gallery={gallery}
                                />
                            ))
                        }
                    </div>
            }
        </div>
    )
}
export default GaleryTorneo