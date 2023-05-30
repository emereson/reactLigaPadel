import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CardFinishedLiga from './cardLiga/CardFinishedLiga'

const FinishedLiga = () => {
    const [finishedLigas, setfinishedLigas] = useState()


    useEffect(() => {
        const url = `${import.meta.env.VITE_URL_API}/api/v1/event/liga`

        axios.get(url)
            .then(res => setfinishedLigas(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='CardinsciptionLiga__container'>
            <h2> <i className='bx bxs-tennis-ball'></i>Ligas Finalizadas <i className='bx bxs-tennis-ball'></i></h2>
            <div className='CardinsciptionLiga'>
                {
                    finishedLigas?.events.map(finishedLiga => (
                        <CardFinishedLiga
                            key={finishedLiga.id}
                            finishedLiga={finishedLiga}
                        />
                    ))
                }

            </div>
        </div>
    )
}

export default FinishedLiga