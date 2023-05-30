import React from 'react'

const CardHomeSponsor = ({ homeSponsor, imgSelectedSponsor }) => {

    const styleMovent = {
        transform: `translateX(calc(-${imgSelectedSponsor}/1* 100%))`,
        transition: `0.7s`,
    }
    return (
        <div className='cardHomeSponsor__containerImg' style={styleMovent}>
            <img src={homeSponsor.sponsorImg} alt="" />
        </div>
    )
}

export default CardHomeSponsor