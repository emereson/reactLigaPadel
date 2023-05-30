import React from 'react'

const CardCalendaryAmerican = ({ calendaryAmerican }) => {

    return (
        <div className='cardCalendary__events'>
            <h2><i className='bx bxs-tennis-ball'></i>{calendaryAmerican.title}<i className='bx bxs-tennis-ball'></i></h2>
            <div className='cardCalendary__imgContainer'>
                {
                    calendaryAmerican.calendaryImgs.map(calendaryImg => (
                        <img key={calendaryImg.id} src={calendaryImg.calendaryImgUrl} alt="" />
                    ))
                }
            </div>
        </div>
    )
}

export default CardCalendaryAmerican