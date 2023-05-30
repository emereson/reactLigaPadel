import React from 'react'

const CardResultsAmerican = ({ resultsAmerican }) => {

    return (
        <div className='cardResults__events'>
            <h2><i className='bx bxs-tennis-ball'></i>{resultsAmerican.title}<i className='bx bxs-tennis-ball'></i></h2>
            <div className='cardResults__imgContainer'>
                {
                    resultsAmerican.resultsEventImgs.map(resultEventImg => (
                        <img key={resultEventImg.id} src={resultEventImg.resultsEventImgUrl} alt="" />
                    ))
                }
            </div>
        </div>
    )
}

export default CardResultsAmerican