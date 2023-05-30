import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CardAllRegistered from '../components/eventInformation/CardAllRegistered'
import './pageStyles/eventInformation.css'

const EventInformation = () => {

    const { id } = useParams()

    const [eventInformation, seteventInformation] = useState()

    useEffect(() => {
        const url = `${import.meta.env.VITE_URL_API}/api/v1/event/${id}`

        axios.get(url)
            .then(res => seteventInformation(res.data))
            .catch(err => console.log(err))
    }, [])


    return (
        <div className='information__container' >
            <h1>hola</h1>
            {
                eventInformation?.event.inscriptions.map(registered => (
                    <CardAllRegistered
                        key={registered.id}
                        registered={registered}
                    />
                ))
            }
        </div>
    )
}

export default EventInformation