import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardGaleryLiga from './cardLiga/CardGaleryLiga'

const GaleryLiga = () => {
    const [galeryLiga, setgaleryLiga] = useState()

    useEffect(() => {
        const url = `${import.meta.env.VITE_URL_API}/api/v1/gallery/liga`
        axios.get(url)
            .then(res => setgaleryLiga(res.data))
            .catch(err => console.log(err))

    }, [])
    return (
        <div className='gallery__container' >
            <div className='gallery__containerH1'>
                <h1>Galeria De Las Ligas <i className='bx bxs-tennis-ball'></i></h1>
            </div>
            {
                galeryLiga?.results === 0 ?
                    <span>AUN NO HAY NINGUNA GALERIA</span>
                    :
                    <div className='cardGallery__container'>
                        {
                            galeryLiga?.galleries[0].map(gallery => (
                                <CardGaleryLiga
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

export default GaleryLiga