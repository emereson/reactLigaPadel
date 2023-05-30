import React from 'react'

const CardFinishedAmerican = ({ finishedAmerican }) => {

    return (

        finishedAmerican.status === 'finished' ?
            <header className='cardInscription__header'>
                <div className='cardInscription__headerImg'>
                    <img className='cardEvent__img' src={finishedAmerican.coverImg} alt="" />
                </div>
                <h3 className='cardEvent__h3'>{finishedAmerican.name}</h3>
                <article className='cardEvent__article'>
                    <ul className='cardEvent__ul'>
                        <li className='cardEvent__li'>{finishedAmerican.subTitle}</li>
                        <li className='cardEvent__li'>{finishedAmerican.category}</li>
                        <li className='cardEvent__li'>{finishedAmerican.startDateEvent}</li>
                        <li className='cardEvent__li'>{finishedAmerican.place}</li>
                    </ul>
                    <span className='cardEvent__button' >Finalizado</span>
                </article>
            </header>
            :
            ''


    )
}

export default CardFinishedAmerican