import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CardInProgressLiga from './cardLiga/CardInProgressLiga'


const InProgressLiga = () => {

    const [inProgressLigas, setinProgressLigas] = useState()

    useEffect(() => {
        const url = `${import.meta.env.VITE_URL_API}/api/v1/event/liga`

        axios.get(url)
            .then(res => setinProgressLigas(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='CardinsciptionLiga__container'>
            <h2> <i className='bx bxs-tennis-ball'></i>Ligas En Curso <i className='bx bxs-tennis-ball'></i></h2>
            <div className='CardinsciptionLiga'>
                {
                    inProgressLigas?.events.map(inProgressLiga => (
                        <CardInProgressLiga
                            key={inProgressLiga.id}
                            inProgressLiga={inProgressLiga}
                        />
                    ))
                }

            </div>
        </div>
    )
}
export default InProgressLiga