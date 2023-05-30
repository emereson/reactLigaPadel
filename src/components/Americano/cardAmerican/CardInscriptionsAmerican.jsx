import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardInscriptionsAmerican = ({ inscriptionAmerican }) => {
    const navigate = useNavigate()


    const clickInformation = () => {
        navigate(`/eventInformation/${inscriptionAmerican.id}`)
    }

    const clickInscription = () => {
        navigate(`/inscription/${inscriptionAmerican.id}`)
    }

    return (

        inscriptionAmerican.status === 'active' ?
            <header className='cardInscription__header'>
                <div className='cardInscription__headerImg'>
                    <img className='cardEvent__img' src={inscriptionAmerican.coverImg} alt="" />
                </div>
                <h3 className='cardEvent__h3'>{inscriptionAmerican.name}</h3>
                <article className='cardEvent__article'>
                    <ul className='cardEvent__ul'>
                        <li className='cardEvent__li'>{inscriptionAmerican.subTitle}</li>
                        <li className='cardEvent__li'>{inscriptionAmerican.category}</li>
                        <li className='cardEvent__li'>{inscriptionAmerican.startDateEvent}</li>
                        <li className='cardEvent__li'>{inscriptionAmerican.place}</li>
                    </ul>
                    <p className='cardEvent__p' onClick={clickInformation}>saber mas</p>
                    <span className='cardEvent__button' onClick={clickInscription} >inscribirme</span>
                </article>
            </header>
            :
            ''
    )
}

export default CardInscriptionsAmerican