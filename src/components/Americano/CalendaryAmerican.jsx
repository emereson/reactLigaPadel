import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardCalendaryAmerican from './cardAmerican/CardCalendaryAmerican'

const CalendaryAmerican = () => {
    const [calendaryAmericans, setCalendaryAmericans] = useState()

    useEffect(() => {
        const url = `${import.meta.env.VITE_URL_API}/api/v1/calendary/americano`
        axios.get(url)
            .then(res => setCalendaryAmericans(res.data))
            .catch(err => console.log(err))

    }, [])

    return (
        <div className='calendary__container' >
            <div className='calendary__containerH1'>
                <h1>Calendario De Los Americanos <i className='bx bxs-tennis-ball'></i></h1>
            </div>
            {
                calendaryAmericans?.results === 0 ?
                    <span>AUN NO HAY CALENDARIOS</span>
                    :
                    <div className='cardCalendary__container'>
                        {
                            calendaryAmericans?.calendars[0].map(calendaryAmerican => (
                                <CardCalendaryAmerican
                                    key={calendaryAmerican.id}
                                    calendaryAmerican={calendaryAmerican}
                                />
                            ))
                        }
                    </div>
            }
        </div>
    )
}
export default CalendaryAmerican