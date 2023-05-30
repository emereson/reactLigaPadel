import React from 'react'

const CardCalendaryLiga = ({ calendaryLiga }) => {

    return (
        <div className='cardCalendary__events'>
            <h2><i className='bx bxs-tennis-ball'></i>{calendaryLiga.title}<i className='bx bxs-tennis-ball'></i></h2>
            <div className='cardCalendary__imgContainer'>
                {
                    calendaryLiga.calendaryImgs.map(calendaryImg => (
                        <img key={calendaryImg.id} src={calendaryImg.calendaryImgUrl} alt="" />
                    ))
                }
            </div>
        </div>
    )
}
export default CardCalendaryLiga