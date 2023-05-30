import React from 'react'
import '../../pages/pageStyles/homeStyle.css'
import { useNavigate } from 'react-router-dom';

const CardHome = ({ event, imgSelected }) => {

    const navigate = useNavigate()


    const clickInscription = () => {
        navigate(`/inscription/${event.id}`)
    }

    const clickInformation = () => {
        navigate(`/eventInformation/${event.id}`)
    }

    const styleMovent = {
        transform: `translateX(calc(-${imgSelected}/1* 110%))`,
        transition: `0.7s`,
    }


    return (
        <div className='cardEvent__div' style={styleMovent}>
            <div className='cadEvent__imgContainer'>
                <img className='cardEvent__img' src={event.coverImg} alt="" />
            </div>
            <h3 className='cardEvent__h3'>{event.name}</h3>
            <article className='cardEvent__article'>
                <ul className='cardEvent__ul'>
                    <li className='cardEvent__li'>{event.subTitle}</li>
                    <li className='cardEvent__li'>{event.category}</li>
                    <li className='cardEvent__li'>{event.startDateEvent}</li>
                    <li className='cardEvent__li'>{event.place}</li>
                </ul>
                <p className='cardEvent__p' onClick={clickInformation}>saber mas</p>
                <span className='cardEvent__button' onClick={clickInscription} >inscribirme</span>
            </article>
        </div>
    )
}

export default CardHome