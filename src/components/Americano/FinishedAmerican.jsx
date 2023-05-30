import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardFinishedAmerican from './cardAmerican/CardFinishedAmerican'

const FinishedAmerican = () => {
    const [finishedAmericans, setfinishedAmericans] = useState()


    useEffect(() => {
        const url = `${import.meta.env.VITE_URL_API}/api/v1/event/americano`

        axios.get(url)
            .then(res => setfinishedAmericans(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='CardinsciptionLiga__container'>
            <h2> <i className='bx bxs-tennis-ball'></i>Americanos Finalizados <i className='bx bxs-tennis-ball'></i></h2>
            <div className='CardinsciptionLiga'>
                {
                    finishedAmericans?.events.map(finishedAmerican => (
                        <CardFinishedAmerican
                            key={finishedAmerican.id}
                            finishedAmerican={finishedAmerican}
                        />
                    ))
                }

            </div>
        </div>
    )
}


export default FinishedAmerican