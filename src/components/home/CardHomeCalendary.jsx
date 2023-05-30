import React from 'react'

const CardHomeCalendary = ({ homeCalendary }) => {


    return (

        homeCalendary.important === 'yes' ?
            <div className='cardHomecalendary__container'>
                <h1>{homeCalendary.title}</h1>
                <div className='CardHomecalendary__DivImg'>
                    {
                        homeCalendary.calendaryImgs?.map(calendaryImg => (

                            <img key={calendaryImg.id} src={calendaryImg.calendaryImgUrl} alt="" />
                        ))

                    }
                </div>
            </div>
            :
            <span></span>

    )
}

export default CardHomeCalendary