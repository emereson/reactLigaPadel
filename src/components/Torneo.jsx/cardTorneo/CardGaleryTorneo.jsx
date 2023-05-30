import React from 'react'

const CardGaleryTorneo = ({ gallery }) => {

    return (
        <div className='cardGallery__events'>
            <h2><i className='bx bxs-tennis-ball'></i>{gallery.name}<i className='bx bxs-tennis-ball'></i></h2>
            <div className='cardGallery__imgContainer'>
                {
                    gallery.galleryImgs.map(galleryImg => (
                        <img key={galleryImg.id} src={galleryImg.galleryImgUrl} alt="" />
                    ))
                }
            </div>
        </div>
    )
}
export default CardGaleryTorneo