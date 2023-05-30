import React from 'react'

const CardInProgressTorneo = ({ inProgressTorneo }) => {

    return (

        inProgressTorneo.status === 'inProgress' ?
            <header className='cardInscription__header'>
                <div className='cardInscription__headerImg'>
                    <img className='cardEvent__img' src={inProgressTorneo.coverImg} alt="" />
                </div>
                <h3 className='cardEvent__h3'>{inProgressTorneo.name}</h3>
                <article className='cardEvent__article'>
                    <ul className='cardEvent__ul'>
                        <li className='cardEvent__li'>{inProgressTorneo.subTitle}</li>
                        <li className='cardEvent__li'>{inProgressTorneo.category}</li>
                        <li className='cardEvent__li'>{inProgressTorneo.startDateEvent}</li>
                        <li className='cardEvent__li'>{inProgressTorneo.place}</li>
                    </ul>
                    <span className='cardEvent__button'  >En Curso</span>
                </article>
            </header>
            :
            ''


    )
}

export default CardInProgressTorneo