import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import CardHome from '../components/home/CardHome';
import CardHomeCalendary from '../components/home/CardHomeCalendary';
import CardHomeGallery from '../components/home/CardHomeGallery';
import CardHomeSponsor from '../components/home/CardHomeSponsor';

const Home = () => {
  const [allEvents, setAllEvents] = useState();
  const [imgSelected, setImgSelected] = useState(0);
  const [homeCalendars, setHomeCalendars] = useState();
  const [homeGalleries, setHomeGalleries] = useState();
  const [imgSelectedSponsor, setImgSelectedSponsor] = useState(0);
  const [homeSponsors, setHomeSponsors] = useState();

  const fetchData = (url, setData) => {
    axios
      .get(url)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const eventUrl = `${import.meta.env.VITE_URL_API}/api/v1/event/`;
    const calendaryUrl = `${import.meta.env.VITE_URL_API}/api/v1/calendary/important`;
    const galleryUrl = `${import.meta.env.VITE_URL_API}/api/v1/gallery/important`;
    const sponsorUrl = `${import.meta.env.VITE_URL_API}/api/v1/sponsor`;

    fetchData(eventUrl, setAllEvents);
    fetchData(calendaryUrl, setHomeCalendars);
    fetchData(galleryUrl, setHomeGalleries);
    fetchData(sponsorUrl, setHomeSponsors);
  }, []);
  const handlePrevius = () => {
    setImgSelected(imgSelected - 1);
    if (imgSelected < 0) {
      setImgSelected(0);
    }
  };

  const handleNext = () => {
    setImgSelected(imgSelected + 1);
    if (imgSelected > allEvents?.results - 4) {
      setImgSelected(0);
    }
  };

  const handlePreviusSponsor = () => {
    setImgSelectedSponsor(imgSelectedSponsor - 1);
    if (imgSelectedSponsor < 0) {
      setImgSelectedSponsor(0);
    }
  };

  const handleNextSponsor = () => {
    setImgSelectedSponsor(imgSelectedSponsor + 1);
    if (imgSelectedSponsor > homeSponsors?.results - 6) {
      setImgSelectedSponsor(0);
    }
  };
  setTimeout(function () {
    setImgSelectedSponsor(imgSelectedSponsor + 1);
    if (imgSelectedSponsor > homeSponsors?.results - 6) {
      setImgSelectedSponsor(0);
    }
  }, 2500);

  const [isCardEventVisible, setIsCardEventVisible] = useState(false);
  const [isHomeCalendaryVisible, setIsHomeCalendaryVisible] = useState(false);
  const [isHomeGalleryVisible, setIsHomeGalleryVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const cardEventElement = document.querySelector('.cardEvent__container');
      const homeCalendaryElement = document.querySelector('.home__cardCalendary-container');
      const homeGalleryElement = document.querySelector('.HomeGalery__container');

      if (cardEventElement) {
        if (isInViewport(cardEventElement)) {
          setIsCardEventVisible(true);
        } else {
          setIsCardEventVisible(false);
        }
      }

      if (homeCalendaryElement) {
        if (isInViewport(homeCalendaryElement)) {
          setIsHomeCalendaryVisible(true);
        } else {
          setIsHomeCalendaryVisible(false);
        }
      }

      if (homeGalleryElement) {
        if (isInViewport(homeGalleryElement)) {
          setIsHomeGalleryVisible(true);
        } else {
          setIsHomeGalleryVisible(false);
        }
      }
    };

    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const topOffset = 30;

      return rect.top + topOffset < windowHeight;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="home__container">
      <div className="home__img">
        <span></span>
        <img src="../cancha.jpeg" alt="" />
        <div className="home__title">
          <div className="home__title-text">
            <h3>LIGA OFICIAL DE PADEL </h3>
            <h1>CURAUMA</h1>
            <h4>BY GREENPRO</h4>
          </div>
        </div>
        {homeSponsors?.results === 0 ? (
          <span></span>
        ) : (
          <div className="homeSponsor__container">
            <div className="homeSponsor__carousel">
              <i
                onClick={handlePreviusSponsor}
                className="bx bx-chevron-left allDiv__btn allDivgbtn__left"
              ></i>
              {homeSponsors?.sponsor.map((homeSponsor) => (
                <CardHomeSponsor
                  key={homeSponsor.id}
                  homeSponsor={homeSponsor}
                  imgSelectedSponsor={imgSelectedSponsor}
                />
              ))}
              <i
                onClick={handleNextSponsor}
                className="bx bx-chevron-right allDiv__btn allDivbtn__right"
              ></i>
            </div>
          </div>
        )}
      </div>
      <div className="cardEven__allContainer">
        <div className={`cardEvent__container ${isCardEventVisible ? 'fade-in' : ''}`}>
          <img className="cardEvent__container-img" src="contacImg.png" alt="" />
          <div className="cardEvent__container2">
            <h2>Eventos Disponibles</h2>
            <div className="cardEvent__carousel">
              <i
                onClick={handlePrevius}
                className="bx bx-chevron-left allDiv__btn allDivgbtn__left"
              ></i>

              {allEvents?.results === 0 ? (
                <span className="cardEvent__span">No hay eventos disponibles</span>
              ) : (
                allEvents?.events[0].map((event) => (
                  <CardHome key={event.id} event={event} imgSelected={imgSelected} />
                ))
              )}
              <i
                onClick={handleNext}
                className="bx bx-chevron-right allDiv__btn allDivbtn__right"
              ></i>
            </div>
          </div>
        </div>
      </div>
      <div className="homeCalendars__allContainer">
        <div className={`home__calendars ${isHomeCalendaryVisible ? 'fade-in' : ''}`}>
          <div className="home__calendars-title">
            <h3>
              HORARIO <span> DE </span> <i className="bx bxs-tennis-ball"></i>{' '}
            </h3>
            <h2>EVENTOS A JUGAR</h2>
          </div>
          <div className="home__cardCalendary-container">
            {homeCalendars?.results === 0 ? (
              <span className="homeCalendary__span">Aun No hay calendarios </span>
            ) : (
              homeCalendars?.calendars[0].map((homeCalendary) => (
                <CardHomeCalendary key={homeCalendary.id} homeCalendary={homeCalendary} />
              ))
            )}
          </div>
        </div>
      </div>
      <div className="HomeGalery__allContainer">
        {homeGalleries?.results === 0 ? (
          <span></span>
        ) : (
          <div className={`HomeGalery__container ${isHomeGalleryVisible ? 'fade-in' : ''}`}>
            {homeGalleries?.galleries[0].map((homeGallery) => (
              <CardHomeGallery
                key={homeGallery.id}
                homeGallery={homeGallery}
                imgSelected={imgSelected}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
