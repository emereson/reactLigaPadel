import React from 'react'

const CardInProgressAmerican = ({ inProgressAmerican }) => {
    console.log(inProgressAmerican);

    return (

        inProgressAmerican.status === 'inProgress' ?
            <header className='cardInscription__header'>
                <div className='cardInscription__headerImg'>
                    <img className='cardEvent__img' src={inProgressAmerican.coverImg} alt="" />
                </div>
                <h3 className='cardEvent__h3'>{inProgressAmerican.name}</h3>
                <article className='cardEvent__article'>
                    <ul className='cardEvent__ul'>
                        <li className='cardEvent__li'>{inProgressAmerican.subTitle}</li>
                        <li className='cardEvent__li'>{inProgressAmerican.category}</li>
                        <li className='cardEvent__li'>{inProgressAmerican.startDateEvent}</li>
                        <li className='cardEvent__li'>{inProgressAmerican.place}</li>
                    </ul>
                    <span className='cardEvent__button' >En cuso</span>
                </article>
            </header>
            :
            ''


    )
}

export default CardInProgressAmerican