import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardInscriptionLiga = ({ inscriptionLiga }) => {
    const navigate = useNavigate()


    const clickInformation = () => {
        navigate(`/rulesEvent/${inscriptionLiga.id}`)
    }

    const clickInscription = () => {
        navigate(`/inscription/${inscriptionLiga.id}`)
    }


    return (

        inscriptionLiga.status === 'active' ?
            <header className='cardInscription__header'>
                <div className='cardInscription__headerImg'>
                    <img className='cardEvent__img' src={inscriptionLiga.coverImg} alt="" />
                </div>
                <h3 className='cardEvent__h3'>{inscriptionLiga.name}</h3>
                <article className='cardEvent__article'>
                    <ul className='cardEvent__ul'>
                        <li className='cardEvent__li'>{inscriptionLiga.subTitle}</li>
                        <li className='cardEvent__li'>{inscriptionLiga.category}</li>
                        <li className='cardEvent__li'>{inscriptionLiga.startDateEvent}</li>
                        <li className='cardEvent__li'>{inscriptionLiga.place}</li>
                    </ul>
                    <p className='cardEvent__p' onClick={clickInformation}>saber mas</p>
                    <span className='cardEvent__button' onClick={clickInscription} >inscribirme</span>
                </article>
            </header>
            :
            ''


    )
}

export default CardInscriptionLiga