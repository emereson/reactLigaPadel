import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardCalendaryLiga from './cardLiga/CardCalendaryLiga'

const CalendaryLiga = () => {
    const [calendaryLigas, setcalendaryLigas] = useState()

    useEffect(() => {
        const url = `${import.meta.env.VITE_URL_API}/api/v1/calendary/liga`
        axios.get(url)
            .then(res => setcalendaryLigas(res.data))
            .catch(err => console.log(err))

    }, [])

    return (
        <div className='calendary__container' >
            <div className='calendary__containerH1'>
                <h1>Calendario De Las Ligas <i className='bx bxs-tennis-ball'></i></h1>
            </div>
            {
                calendaryLigas?.results === 0 ?
                    <span>AUN NO HAY CALENDARIOS</span>
                    :
                    <div className='cardCalendary__container'>
                        {
                            calendaryLigas?.calendars[0].map(calendaryLiga => (
                                <CardCalendaryLiga
                                    key={calendaryLiga.id}
                                    calendaryLiga={calendaryLiga}
                                />
                            ))
                        }
                    </div>
            }
        </div>
    )
}

export default CalendaryLiga