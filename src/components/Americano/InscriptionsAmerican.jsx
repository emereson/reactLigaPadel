import React, { useEffect, useState } from 'react'
import CardInscriptionsAmerican from './cardAmerican/CardInscriptionsAmerican'
import axios from 'axios'
import '../componentsStyle/cardAllInscriptionStyle.css'

const InscriptionsAmerican = () => {
    const [inscriptionsAmerican, setinscriptionsAmerican] = useState()


    useEffect(() => {
        const url = `${import.meta.env.VITE_URL_API}/api/v1/event/americano`

        axios.get(url)
            .then(res => setinscriptionsAmerican(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='CardinsciptionLiga__container'>
            <h2> <i className='bx bxs-tennis-ball'></i>Americanos Disponibles <i className='bx bxs-tennis-ball'></i></h2>
            <div className='CardinsciptionLiga'>
                {
                    inscriptionsAmerican?.events.map(inscriptionAmerican => (
                        <CardInscriptionsAmerican
                            key={inscriptionAmerican.id}
                            inscriptionAmerican={inscriptionAmerican}
                        />
                    ))
                }

            </div>
        </div>
    )
}

export default InscriptionsAmerican