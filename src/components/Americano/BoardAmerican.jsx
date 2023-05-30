import React, { useEffect, useState } from 'react'
import CardBoardAmerican from './cardAmerican/CardBoardAmerican'
import axios from 'axios'

const BoardAmerican = () => {
    const [boardAmericans, setboardAmericans] = useState()

    useEffect(() => {
        const url = `${import.meta.env.VITE_URL_API}/api/v1/listVersus/americano`
        axios.get(url)
            .then(res => setboardAmericans(res.data))
            .catch(err => console.log(err))

    }, [])

    return (
        <div className='board__container' >
            <div className='board__containerH1'>
                <h1>Tablas De Los Americanos <i className='bx bxs-tennis-ball'></i></h1>
            </div>
            {
                boardAmericans?.results === 0 ?
                    <span></span>
                    :
                    <div className='cardBoard__container'>
                        {
                            boardAmericans?.readyVersus[0].map(boardAmerican => (
                                <CardBoardAmerican
                                    key={boardAmerican.id}
                                    boardAmerican={boardAmerican}
                                />
                            ))
                        }
                    </div>
            }
        </div>
    )
}

export default BoardAmerican