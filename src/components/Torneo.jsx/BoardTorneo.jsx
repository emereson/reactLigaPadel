import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardBoardTorneo from './cardTorneo/CardBoardTorneo'
import '../componentsStyle/boardAllEventStyle.css'

const BoardTorneo = () => {
    const [boardTorneos, setboardTorneos] = useState()

    useEffect(() => {
        const url = `${import.meta.env.VITE_URL_API}/api/v1/listVersus/torneo`
        axios.get(url)
            .then(res => setboardTorneos(res.data))
            .catch(err => console.log(err))

    }, [])
    console.log(boardTorneos);

    return (
        <div className='board__container' >
            <div className='board__containerH1'>
                <h1>Tablas De Los Torneos <i className='bx bxs-tennis-ball'></i></h1>
            </div>
            {
                boardTorneos?.results === 0 ?
                    <span></span>
                    :
                    <div className='cardBoard__container'>
                        {
                            boardTorneos?.readyVersus[0].map(boardTorneo => (
                                <CardBoardTorneo
                                    key={boardTorneo.id}
                                    boardTorneo={boardTorneo}
                                />
                            ))
                        }
                    </div>
            }
        </div>
    )
}

export default BoardTorneo