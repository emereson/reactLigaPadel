import React from 'react'

const CardResultsLiga = ({ resultLiga }) => {

    return (
        <div className='cardResults__events'>
            <h2><i className='bx bxs-tennis-ball'></i>{resultLiga.title}<i className='bx bxs-tennis-ball'></i></h2>
            <div className='cardResults__imgContainer'>
                {
                    resultLiga.resultsEventImgs.map(resultEventImg => (
                        <img key={resultEventImg.id} src={resultEventImg.resultsEventImgUrl} alt="" />
                    ))
                }
            </div>
        </div>
    )
}

export default CardResultsLiga