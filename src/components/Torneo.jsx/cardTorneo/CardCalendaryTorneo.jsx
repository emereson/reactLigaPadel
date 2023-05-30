import React from 'react'

const CardCalendaryTorneo = ({ calendaryTorneo }) => {

    return (
        <div className='cardCalendary__events'>
            <h2><i className='bx bxs-tennis-ball'></i>{calendaryTorneo.title}<i className='bx bxs-tennis-ball'></i></h2>
            <div className='cardCalendary__imgContainer'>
                {
                    calendaryTorneo.calendaryImgs.map(calendaryImg => (
                        <img key={calendaryImg.id} src={calendaryImg.calendaryImgUrl} alt="" />
                    ))
                }
            </div>
        </div>
    )
}
export default CardCalendaryTorneo