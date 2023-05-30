import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardSponsor from '../components/sponsor/CardSponsor'
import './pageStyles/sponsorStyle.css'


const Sponsors = () => {
    const [sponsors, setsponsors] = useState()

    useEffect(() => {

        const url = `${import.meta.env.VITE_URL_API}/api/v1/sponsor`

        axios.get(url)
            .then(res => setsponsors(res.data))
            .catch(err => console.log(err))

    }, [])

    return (
        <div className='sponsor__container'>
            <div className='sponsor__h1'>
                <h1>Nuestros Auspiciadores</h1>
            </div>
            <div className='sponsor__cardContainer'>
                {
                    sponsors?.sponsor.map(sponsor => (
                        <CardSponsor
                            key={sponsor.id}
                            sponsor={sponsor}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Sponsors