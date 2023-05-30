import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardResultsLiga from './cardLiga/CardResultsLiga'


const ResultsLiga = () => {

    const [resultsLiga, setresultsLiga] = useState()

    useEffect(() => {
        const url = `${import.meta.env.VITE_URL_API}/api/v1/resultsEvent/liga`
        axios.get(url)
            .then(res => setresultsLiga(res.data))
            .catch(err => console.log(err))

    }, [])

    return (
        <div className='results__container' >
            <div className='results__containerH1'>
                <h1>Resultado De Las Ligas <i className='bx bxs-tennis-ball'></i></h1>
            </div>
            {
                resultsLiga?.results === 0 ?
                    <span ></span>
                    :
                    <div className='carResults__container'>
                        {
                            resultsLiga?.resultsEvent[0].map(resultLiga => (
                                <CardResultsLiga
                                    key={resultLiga.id}
                                    resultLiga={resultLiga}
                                />
                            ))
                        }
                    </div>
            }
        </div>
    )
}
export default ResultsLiga