import React from 'react'

const CardFinishedTorneo = ({ finishedTorneo }) => {

    return (

        finishedTorneo.status === 'finished' ?
            <header className='cardInscription__header'>
                <div className='cardInscription__headerImg'>
                    <img className='cardEvent__img' src={finishedTorneo.coverImg} alt="" />
                </div>
                <h3 className='cardEvent__h3'>{finishedTorneo.name}</h3>
                <article className='cardEvent__article'>
                    <ul className='cardEvent__ul'>
                        <li className='cardEvent__li'>{finishedTorneo.subTitle}</li>
                        <li className='cardEvent__li'>{finishedTorneo.category}</li>
                        <li className='cardEvent__li'>{finishedTorneo.startDateEvent}</li>
                        <li className='cardEvent__li'>{finishedTorneo.place}</li>
                    </ul>
                    <span className='cardEvent__button' >Finalizado</span>
                </article>
            </header>
            :
            ''


    )
}

export default CardFinishedTorneo