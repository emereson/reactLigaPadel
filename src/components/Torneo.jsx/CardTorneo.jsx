import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardTorneo = ({ torneo }) => {
    const navigate = useNavigate()


    const clickInscription = () => {
        navigate(`/inscription/${torneo.id}`)
    }


    return (
        <div className='cardEvent__div'>
            <div className='cadEvent__imgContainer'>
                <img className='cardEvent__img' src={torneo.coverImg} alt="" />
            </div>
            <h3 className='cardEvent__h3'>{torneo.name}</h3>
            <article className='cardEvent__article'>
                <ul className='cardEvent__ul'>
                    <li className='cardEvent__li'>{torneo.subTitle}</li>
                    <li className='cardEvent__li'>{torneo.category}</li>
                    <li className='cardEvent__li'>{torneo.startDateEvent}</li>
                    <li className='cardEvent__li'>{torneo.place}</li>
                </ul>
                <p className='cardEvent__p'>saber mas</p>
                <span className='cardEvent__button' onClick={clickInscription} >inscribirme</span>
            </article>
        </div>
    )
}


export default CardTorneo