import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardAmerican = ({ american }) => {
    const navigate = useNavigate()


    const clickInscription = () => {
        navigate(`/inscription/${american.id}`)
    }


    return (
        <div className='cardEvent__div'>
            <div className='cadEvent__imgContainer'>
                <img className='cardEvent__img' src={american.coverImg} alt="" />
            </div>
            <h3 className='cardEvent__h3'>{american.name}</h3>
            <article className='cardEvent__article'>
                <ul className='cardEvent__ul'>
                    <li className='cardEvent__li'>{american.subTitle}</li>
                    <li className='cardEvent__li'>{american.category}</li>
                    <li className='cardEvent__li'>{american.startDateEvent}</li>
                    <li className='cardEvent__li'>{american.place}</li>
                </ul>
                <p className='cardEvent__p'>saber mas</p>
                <span className='cardEvent__button' onClick={clickInscription} >inscribirme</span>
            </article>
        </div>
    )
}

export default CardAmerican