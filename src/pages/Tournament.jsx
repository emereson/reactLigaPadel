import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardTorneo from '../components/Torneo.jsx/CardTorneo'

const Tournament = () => {
    const [allTorneos, setallTorneos] = useState()


    useEffect(() => {
        const url = `${import.meta.env.VITE_URL_API}/api/v1/event/torneo`

        axios.get(url)
            .then(res => setallTorneos(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='home__container'>
            <div className='home__img'>
                <img src="https://www.primeriti.es/blog/wp-content/uploads/2022/04/tenis.jpg" alt="" />
            </div>
            <div className='cardEvent__container'>
                {
                    allTorneos?.events.map(torneo => (
                        <CardTorneo
                            key={torneo.id}
                            torneo={torneo}
                        />
                    ))
                }

            </div>
        </div>
    )
}

export default Tournament