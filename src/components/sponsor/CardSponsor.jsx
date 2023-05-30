import React from 'react'

const CardSponsor = ({ sponsor }) => {

    return (
        <div className='cardSponsor__container'>
            <section className='cardSponsor__section'>
                <h2 className='cardSponsor__h2'>{sponsor.name}</h2>
                <p className='cardSponsor__p'>{sponsor.description}</p>
                <img className='cardSponsor__img' src={sponsor.sponsorImg} alt="" />
            </section>
        </div>
    )
}

export default CardSponsor