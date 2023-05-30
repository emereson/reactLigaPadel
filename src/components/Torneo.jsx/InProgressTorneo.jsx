import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CardInProgressTorneo from './cardTorneo/CardInProgressTorneo'

const InProgressTorneo = () => {

    const [inProgressTorneos, setinProgressTorneos] = useState()

    useEffect(() => {
        const url = `${import.meta.env.VITE_URL_API}/api/v1/event/torneo`

        axios.get(url)
            .then(res => setinProgressTorneos(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='CardinsciptionLiga__container'>
            <h2> <i className='bx bxs-tennis-ball'></i>Torneos En Curso <i className='bx bxs-tennis-ball'></i></h2>
            <div className='CardinsciptionLiga'>
                {
                    inProgressTorneos?.events.map(inProgressTorneo => (
                        <CardInProgressTorneo
                            key={inProgressTorneo.id}
                            inProgressTorneo={inProgressTorneo}
                        />
                    ))
                }

            </div>
        </div>
    )
}

export default InProgressTorneo