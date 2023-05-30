import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardResultsAmerican from './cardAmerican/CardResultsAmerican'

const ResultsAmerican = () => {

    const [resultsAmericans, setresultsAmericans] = useState()

    useEffect(() => {
        const url = `${import.meta.env.VITE_URL_API}/api/v1/resultsEvent/liga`
        axios.get(url)
            .then(res => setresultsAmericans(res.data))
            .catch(err => console.log(err))

    }, [])

    return (
        <div className='results__container' >
            <div className='results__containerH1'>
                <h1>Resultado De Los Americanos <i className='bx bxs-tennis-ball'></i></h1>
            </div>
            {
                resultsAmericans?.results === 0 ?
                    <span></span>
                    :
                    <div className='carResults__container'>
                        {
                            resultsAmericans?.resultsEvent[0].map(resultsAmerican => (
                                <CardResultsAmerican
                                    key={resultsAmerican.id}
                                    resultsAmerican={resultsAmerican}
                                />
                            ))
                        }
                    </div>
            }
        </div>
    )
}

export default ResultsAmerican