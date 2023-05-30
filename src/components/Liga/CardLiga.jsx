import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardLiga = ({ liga }) => {
    const navigate = useNavigate()


    const clickInscription = () => {
        navigate(`/inscription/${liga.id}`)
    }


    return (
        <div className='cardEvent__div'>
            <div className='cadEvent__imgContainer'>
                <img className='cardEvent__img' src={liga.coverImg} alt="" />
            </div>
            <h3 className='cardEvent__h3'>{liga.name}</h3>
            <article className='cardEvent__article'>
                <ul className='cardEvent__ul'>
                    <li className='cardEvent__li'>{liga.subTitle}</li>
                    <li className='cardEvent__li'>{liga.category}</li>
                    <li className='cardEvent__li'>{liga.startDateEvent}</li>
                    <li className='cardEvent__li'>{liga.place}</li>
                </ul>
                <p className='cardEvent__p'>saber mas</p>
                <span className='cardEvent__button' onClick={clickInscription} >inscribirme</span>
            </article>
        </div>
    )
}

export default CardLiga