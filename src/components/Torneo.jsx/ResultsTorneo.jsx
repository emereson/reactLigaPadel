import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardResultsTorneo from './cardTorneo/CardResultsTorneo'
import '../componentsStyle/resultsAllEventStyle.css'

const ResultsTorneo = () => {

    const [resultsTorneos, setresultsTorneos] = useState()

    useEffect(() => {
        const url = `${import.meta.env.VITE_URL_API}/api/v1/resultsEvent/torneo`
        axios.get(url)
            .then(res => setresultsTorneos(res.data))
            .catch(err => console.log(err))

    }, [])

    return (
        <div className='results__container' >
            <div className='results__containerH1'>
                <h1>Resultado De Los Torneos <i className='bx bxs-tennis-ball'></i></h1>
            </div>
            {
                resultsTorneos?.results === 0 ?
                    <span></span>
                    :
                    <div className='carResults__container'>
                        {
                            resultsTorneos?.resultsEvent[0].map(resultsTorneo => (
                                <CardResultsTorneo
                                    key={resultsTorneo.id}
                                    resultsTorneo={resultsTorneo}
                                />
                            ))
                        }
                    </div>
            }
        </div>
    )
}
export default ResultsTorneo