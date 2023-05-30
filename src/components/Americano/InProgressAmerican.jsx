import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardInProgressAmerican from './cardAmerican/CardInProgressAmerican'

const InProgressAmerican = () => {

    const [inProgressAmericans, setinProgressAmericans] = useState()

    useEffect(() => {
        const url = `${import.meta.env.VITE_URL_API}/api/v1/event/americano`

        axios.get(url)
            .then(res => setinProgressAmericans(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='CardinsciptionLiga__container'>
            <h2> <i className='bx bxs-tennis-ball'></i>Americanos En Curso <i className='bx bxs-tennis-ball'></i></h2>
            <div className='CardinsciptionLiga'>
                {
                    inProgressAmericans?.events.map(inProgressAmerican => (
                        <CardInProgressAmerican
                            key={inProgressAmerican.id}
                            inProgressAmerican={inProgressAmerican}
                        />
                    ))
                }

            </div>
        </div>
    )
}

export default InProgressAmerican