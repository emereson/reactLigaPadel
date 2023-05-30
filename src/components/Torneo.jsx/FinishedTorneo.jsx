import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CardFinishedTorneo from './cardTorneo/CardFinishedTorneo'

const FinishedTorneo = () => {
    const [finishedTorneos, setfinishedTorneos] = useState()


    useEffect(() => {
        const url = `${import.meta.env.VITE_URL_API}/api/v1/event/torneo`

        axios.get(url)
            .then(res => setfinishedTorneos(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='CardinsciptionLiga__container'>
            <h2> <i className='bx bxs-tennis-ball'></i>Torneos Finalizados <i className='bx bxs-tennis-ball'></i></h2>
            <div className='CardinsciptionLiga'>
                {
                    finishedTorneos?.events.map(finishedTorneo => (
                        <CardFinishedTorneo
                            key={finishedTorneo.id}
                            finishedTorneo={finishedTorneo}
                        />
                    ))
                }

            </div>
        </div>
    )
}
export default FinishedTorneo