import React from 'react'

const CardResultsTorneo = ({ resultsTorneo }) => {

    return (
        <div className='cardResults__events'>
            <h2><i className='bx bxs-tennis-ball'></i>{resultsTorneo.title}<i className='bx bxs-tennis-ball'></i></h2>
            <div className='cardResults__imgContainer'>
                {
                    resultsTorneo.resultsEventImgs.map(resultEventImg => (
                        <img key={resultEventImg.id} src={resultEventImg.resultsEventImgUrl} alt="" />
                    ))
                }
            </div>
        </div>
    )
}

export default CardResultsTorneo