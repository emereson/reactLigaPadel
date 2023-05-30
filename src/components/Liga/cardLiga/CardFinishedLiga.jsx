import React from 'react'

const CardFinishedLiga = ({ finishedLiga }) => {

    return (

        finishedLiga.status === 'finished' ?
            <header className='cardInscription__header'>
                <div className='cardInscription__headerImg'>
                    <img className='cardEvent__img' src={finishedLiga.coverImg} alt="" />
                </div>
                <h3 className='cardEvent__h3'>{finishedLiga.name}</h3>
                <article className='cardEvent__article'>
                    <ul className='cardEvent__ul'>
                        <li className='cardEvent__li'>{finishedLiga.subTitle}</li>
                        <li className='cardEvent__li'>{finishedLiga.category}</li>
                        <li className='cardEvent__li'>{finishedLiga.startDateEvent}</li>
                        <li className='cardEvent__li'>{finishedLiga.place}</li>
                    </ul>
                    <span className='cardEvent__button' >Finalizado</span>
                </article>
            </header>
            :
            ''


    )
}

export default CardFinishedLiga