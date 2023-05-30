import React, { useEffect, useState } from 'react'
import CardInscriptionTorneo from './cardTorneo/CardInscriptionTorneo'
import axios from 'axios'

const InscriptionsTorneo = () => {
    const [inscriptionsTorneo, setinscriptionsTorneo] = useState()


    useEffect(() => {
        const url = `${import.meta.env.VITE_URL_API}/api/v1/event/torneo`

        axios.get(url)
            .then(res => setinscriptionsTorneo(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='CardinsciptionLiga__container'>
            <h2> <i className='bx bxs-tennis-ball'></i>Torneos Disponibles <i className='bx bxs-tennis-ball'></i></h2>
            <div className='CardinsciptionLiga'>
                {
                    inscriptionsTorneo?.events.map(inscriptionTorneo => (
                        <CardInscriptionTorneo
                            key={inscriptionTorneo.id}
                            inscriptionTorneo={inscriptionTorneo}
                        />
                    ))
                }

            </div>
        </div>
    )
}


export default InscriptionsTorneo