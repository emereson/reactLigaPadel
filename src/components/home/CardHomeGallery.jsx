import React, { useState } from 'react'

const CardHomeGallery = ({ homeGallery }) => {

    const [imgSelected, setimgSelected] = useState(0)

    const styleMovent = {
        transform: `translateX(calc(-${imgSelected}/1* 100%))`,
        transition: `0.7s`,
    }

    const handlePrevius = () => {
        setimgSelected(imgSelected - 1)
        if (imgSelected < homeGallery.galleryImgs.length) {
            setimgSelected(0)

        }
    }
    const handleNext = () => {
        setimgSelected(imgSelected + 1)
        if (imgSelected > homeGallery.galleryImgs.length) {
            setimgSelected(0)
        }
    }

    return (
        <div className='cardHomeGalery__container' >
            <h2>{homeGallery.name}</h2>
            <i onClick={handlePrevius} className='bx bx-chevron-left allDiv__btn allDivgbtn__left' ></i>
            <div className='cardHomeGalery__containerImg'  >
                <div className='cardHomeGalery__carrusel'>
                    {
                        homeGallery.galleryImgs.map(gallery => (

                            <div className='cardHomeGalery__Img' style={styleMovent} key={gallery.id}>
                                <img src={gallery.galleryImgUrl} alt="" />
                            </div>
                        ))
                    }
                </div>
            </div>
            <i onClick={handleNext} className='bx bx-chevron-right allDiv__btn allDivbtn__right' ></i>
        </div>
    )
}

export default CardHomeGallery