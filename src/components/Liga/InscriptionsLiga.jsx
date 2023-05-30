import React, { useEffect, useState } from 'react'
import CardInscriptionLiga from './cardLiga/CardInscriptionLiga'
import axios from 'axios'

const InscriptionsLiga = () => {
    const [inscriptionsLiga, setinscriptionsLiga] = useState()


    useEffect(() => {
        const url = `${import.meta.env.VITE_URL_API}/api/v1/event/liga`

        axios.get(url)
            .then(res => setinscriptionsLiga(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='CardinsciptionLiga__container'>
            <h2> <i className='bx bxs-tennis-ball'></i>Ligas Disponibles <i className='bx bxs-tennis-ball'></i></h2>
            <div className='CardinsciptionLiga'>
                {
                    inscriptionsLiga?.events.map(inscriptionLiga => (
                        <CardInscriptionLiga
                            key={inscriptionLiga.id}
                            inscriptionLiga={inscriptionLiga}
                        />
                    ))
                }

            </div>
        </div>
    )
}


export default InscriptionsLiga