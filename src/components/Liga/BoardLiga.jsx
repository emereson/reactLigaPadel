import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardBoardLiga from './cardLiga/CardBoardLiga'


const BoardLiga = () => {
    const [boardLigas, setboardLigas] = useState()

    useEffect(() => {
        const url = `${import.meta.env.VITE_URL_API}/api/v1/listVersus/liga`
        axios.get(url)
            .then(res => setboardLigas(res.data))
            .catch(err => console.log(err))

    }, [])

    return (
        <div className='board__container' >
            <div className='board__containerH1'>
                <h1>Tablas De Las Ligas <i className='bx bxs-tennis-ball'></i></h1>
            </div>
            {
                boardLigas?.results === 0 ?
                    <span></span>
                    :
                    <div className='cardBoard__container'>
                        {
                            boardLigas?.readyVersus[0].map(boardLiga => (
                                <CardBoardLiga
                                    key={boardLiga.id}
                                    boardLiga={boardLiga}
                                />
                            ))
                        }
                    </div>
            }
        </div>
    )
}

export default BoardLiga