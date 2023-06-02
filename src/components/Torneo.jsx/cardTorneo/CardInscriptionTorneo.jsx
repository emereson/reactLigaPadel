import React from 'react'
import { useNavigate } from 'react-router-dom'

const CardInscriptionTorneo = ({ inscriptionTorneo }) => {
    const navigate = useNavigate()

    const clickInformation = () => {
        navigate(`/rulesEvent/${inscriptionTorneo.id}`)
    }


    const clickInscription = () => {
        navigate(`/inscription/${inscriptionTorneo.id}`)
    }

    return (

        inscriptionTorneo.status === 'active' ?
            <header className='cardInscription__header'>
                <div className='cardInscription__headerImg'>
                    <img className='cardEvent__img' src={inscriptionTorneo.coverImg} alt="" />
                </div>
                <h3 className='cardEvent__h3'>{inscriptionTorneo.name}</h3>
                <article className='cardEvent__article'>
                    <ul className='cardEvent__ul'>
                        <li className='cardEvent__li'>{inscriptionTorneo.subTitle}</li>
                        <li className='cardEvent__li'>{inscriptionTorneo.category}</li>
                        <li className='cardEvent__li'>{inscriptionTorneo.startDateEvent}</li>
                        <li className='cardEvent__li'>{inscriptionTorneo.place}</li>
                    </ul>
                    <p className='cardEvent__p' onClick={clickInformation}>saber mas</p>
                    <span className='cardEvent__button' onClick={clickInscription} >inscribirme</span>
                </article>
            </header>
            :
            ''
    )
}
export default CardInscriptionTorneo