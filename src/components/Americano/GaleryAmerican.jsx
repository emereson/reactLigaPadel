import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardGaleryAmerican from './cardAmerican/CardGaleryAmerican'

const GaleryAmerican = () => {
    const [galeryAmericans, setgaleryAmericans] = useState()

    useEffect(() => {
        const url = `${import.meta.env.VITE_URL_API}/api/v1/gallery/americano`
        axios.get(url)
            .then(res => setgaleryAmericans(res.data))
            .catch(err => console.log(err))

    }, [])
    return (
        <div className='gallery__container' >
            <div className='gallery__containerH1'>
                <h1>Galeria De Los Americanos <i className='bx bxs-tennis-ball'></i></h1>
            </div>
            {
                galeryAmericans?.results === 0 ?
                    <span>AUN NO HAY NINGUNA GALERIA</span>
                    :
                    <div className='cardGallery__container'>
                        {
                            galeryAmericans?.galleries[0].map(gallery => (
                                <CardGaleryAmerican
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

export default GaleryAmerican