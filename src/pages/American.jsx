import React, { useEffect, useState } from 'react'
import CardAmerican from '../components/Americano/CardAmerican'
import axios from 'axios'

const American = () => {
    const [allAmerican, setallAmerican] = useState()


    useEffect(() => {
        const url = `${import.meta.env.VITE_URL_API}/api/v1/event/americano`

        axios.get(url)
            .then(res => setallAmerican(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='home__container'>
            <div className='home__img'>
                <img src="https://www.primeriti.es/blog/wp-content/uploads/2022/04/tenis.jpg" alt="" />
            </div>
            <div className='cardEvent__container'>
                {
                    allAmerican?.events.map(american => (
                        <CardAmerican
                            key={american.id}
                            american={american}
                        />
                    ))
                }

            </div>
        </div>
    )
}

export default American