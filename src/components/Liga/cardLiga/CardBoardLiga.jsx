import React from 'react'

const CardBoardLiga = ({ boardLiga }) => {

    return (
        <div className='cardBoard__events'>
            <h2><i className='bx bxs-tennis-ball'></i>{boardLiga.title}<i className='bx bxs-tennis-ball'></i></h2>
            <div className='cardBoard__imgContainer'>
                {
                    boardLiga.listVersusImgs.map(listVersusImg => (
                        <img key={listVersusImg.id} src={listVersusImg.listVersusImgUrl} alt="" />
                    ))
                }
            </div>
        </div>
    )
}
export default CardBoardLiga