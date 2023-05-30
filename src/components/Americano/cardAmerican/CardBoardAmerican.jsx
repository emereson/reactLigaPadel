import React from 'react'

const CardBoardAmerican = ({ boardAmerican }) => {

    return (
        <div className='cardBoard__events'>
            <h2><i className='bx bxs-tennis-ball'></i>{boardAmerican.title}<i className='bx bxs-tennis-ball'></i></h2>
            <div className='cardBoard__imgContainer'>
                {
                    boardAmerican.listVersusImgs.map(listVersusImg => (
                        <img key={listVersusImg.id} src={listVersusImg.listVersusImgUrl} alt="" />
                    ))
                }
            </div>
        </div>
    )
}

export default CardBoardAmerican