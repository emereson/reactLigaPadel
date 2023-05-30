import React from 'react'

const CardBoardTorneo = ({ boardTorneo }) => {
    return (
        <div className='cardBoard__events'>
            <h2><i className='bx bxs-tennis-ball'></i>{boardTorneo.title}<i className='bx bxs-tennis-ball'></i></h2>
            <div className='cardBoard__imgContainer'>
                {
                    boardTorneo.listVersusImgs.map(listVersusImg => (
                        <img key={listVersusImg.id} src={listVersusImg.listVersusImgUrl} alt="" />
                    ))
                }
            </div>
        </div>
    )
}

export default CardBoardTorneo