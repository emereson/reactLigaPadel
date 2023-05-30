import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardCalendaryTorneo from './cardTorneo/CardCalendaryTorneo'
import '../componentsStyle/calendaryAllEvents.css'

const CalendaryTorneo = () => {
    const [calendaryTorneos, setcalendaryTorneos] = useState()

    useEffect(() => {
        const url = `${import.meta.env.VITE_URL_API}/api/v1/calendary/torneo`
        axios.get(url)
            .then(res => setcalendaryTorneos(res.data))
            .catch(err => console.log(err))

    }, [])

    return (
        <div className='calendary__container' >
            <div className='calendary__containerH1'>
                <h1>Calendario De Los Torneos <i className='bx bxs-tennis-ball'></i></h1>
            </div>
            {
                calendaryTorneos?.results === 0 ?
                    <span></span>
                    :
                    <div className='cardCalendary__container'>
                        {
                            calendaryTorneos?.calendars[0].map(calendaryTorneo => (
                                <CardCalendaryTorneo
                                    key={calendaryTorneo.id}
                                    calendaryTorneo={calendaryTorneo}
                                />
                            ))

                        }
                    </div>
            }
        </div>
    )
}
export default CalendaryTorneo