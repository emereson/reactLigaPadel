import React from 'react'

const CardInProgressLiga = ({ inProgressLiga }) => {

    return (

        inProgressLiga.status === 'inProgress' ?
            <header className='cardInscription__header'>
                <div className='cardInscription__headerImg'>
                    <img className='cardEvent__img' src={inProgressLiga.coverImg} alt="" />
                </div>
                <h3 className='cardEvent__h3'>{inProgressLiga.name}</h3>
                <article className='cardEvent__article'>
                    <ul className='cardEvent__ul'>
                        <li className='cardEvent__li'>{inProgressLiga.subTitle}</li>
                        <li className='cardEvent__li'>{inProgressLiga.category}</li>
                        <li className='cardEvent__li'>{inProgressLiga.startDateEvent}</li>
                        <li className='cardEvent__li'>{inProgressLiga.place}</li>
                    </ul>
                    <span className='cardEvent__button'  >En Curso</span>
                </article>
            </header>
            :
            ''

    )
}
export default CardInProgressLiga