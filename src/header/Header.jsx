import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './headerStyle.css'

function Header() {
    const location = useLocation();
    const [deployLiga, setDeployLiga] = useState(false);
    const [deployTorneo, setDeployTorneo] = useState(false);
    const [deployAmericano, setDeployAmericano] = useState(false);
    const [closeMain, setcloseMain] = useState(true)

    const styleEvents = { display: 'block' };
    const styleNone = { display: 'none' };

    const handleMain = () => {
        setcloseMain(false)
    }

    const onMouserDeployLiga = () => {
        setDeployLiga(true);
        if (!setDeployLiga(true)) {
            setDeployTorneo(false)
            setDeployAmericano(false);
        }
    };

    const onMouserDeployTorneo = () => {
        setDeployTorneo(true)
        if (!setDeployTorneo(true)) {
            setDeployLiga(false)
            setDeployAmericano(false);
        }

    };

    const onMouserDeployAmericano = () => {
        setDeployAmericano(true);
        if (!setDeployAmericano(true)) {
            setDeployTorneo(false)
            setDeployLiga(false);
        }
    };

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    return (
        <header className="header">
            <div className="header__imgContainer">
                <Link className="header__link" to="/">
                    <img className="header__img" src="../logoPadel.png" alt="" />
                </Link>
            </div>
            <nav className={closeMain ? 'header__nav' : 'header__navMobil'}>
                <ul className="header__ul">
                    <li className="header__li">
                        <Link className={`header__link ${isActive('/')}`} to="/" href="#inicio">
                            INICIO
                        </Link>
                    </li>
                    <li className="header__li">
                        <Link className={`header__link ${isActive('/allInscriptions')}`} to="/allInscriptions">
                            INSCRIPCIONES
                        </Link>
                    </li>
                    <li className="header__li-events ">
                        <p>EVENTOS</p>
                        <ul className="header__ul-events">
                            <li className={`headerEvents ${deployLiga ? 'active' : ''}`}>
                                {!deployLiga ? (
                                    <p onClick={onMouserDeployLiga} className={`${!deployLiga ? '' : 'active2'} `} >Liga</p>
                                ) : (
                                    <p onClick={() => setDeployLiga(false)} className={`${!deployLiga ? '' : 'active2'} `} >
                                        Liga
                                    </p>
                                )}
                                <ul style={deployLiga ? styleEvents : styleNone}>
                                    <li className="header__liga">
                                        <Link className={`header__link ${isActive('/liga/allLigas')}`} to="/liga/allLigas">
                                            Todas las ligas
                                        </Link>
                                    </li>
                                    <li className="header__liga">
                                        <Link className={`header__link ${isActive('/liga/galeryLiga')}`} to="/liga/galeryLiga">
                                            Galeria
                                        </Link>
                                    </li>
                                    <li className="header__liga">
                                        <Link className={`header__link ${isActive('/liga/boardLiga')}`} to="/liga/boardLiga">
                                            Tabla de ligas
                                        </Link>
                                    </li>
                                    <li className="header__liga">
                                        <Link className={`header__link ${isActive('/liga/calendaryLiga')}`} to="/liga/calendaryLiga">
                                            Calendario
                                        </Link>
                                    </li>
                                    <li className="header__liga">
                                        <Link className={`header__link ${isActive('/liga/resultsLiga')}`} to="/liga/resultsLiga">
                                            Resultados
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className={`headerEvents ${deployTorneo ? 'active' : ''}`}>
                                {!deployTorneo ? (
                                    <p onClick={onMouserDeployTorneo} className={`${!deployTorneo ? '' : 'active2'} `} >Torneo</p>
                                ) : (
                                    <p onClick={() => setDeployTorneo(false)} className={`${!deployTorneo ? '' : 'active2'} `} >
                                        Torneo
                                    </p>
                                )}
                                <ul style={deployTorneo ? styleEvents : styleNone}>
                                    <li className="header__liga">
                                        <Link className={`header__link ${isActive('/torneo/allTorneos')}`} to="/torneo/allTorneos">
                                            Todas los Torneos
                                        </Link>
                                    </li>
                                    <li className="header__liga">
                                        <Link className={`header__link ${isActive('/torneo/galeryTorneo')}`} to="/torneo/galeryTorneo">
                                            Galeria
                                        </Link>
                                    </li>
                                    <li className="header__liga">
                                        <Link className={`header__link ${isActive('/torneo/boardTorneo')}`} to="/torneo/boardTorneo">
                                            Tabla de Torneo
                                        </Link>
                                    </li>
                                    <li className="header__liga">
                                        <Link className={`header__link ${isActive('/torneo/calendaryTorneo')}`} to="/torneo/calendaryTorneo">
                                            Calendario
                                        </Link>
                                    </li>
                                    <li className="header__liga">
                                        <Link className={`header__link ${isActive('/torneo/resultsTorneo')}`} to="/torneo/resultsTorneo">
                                            Resultados
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className={`headerEvents headerEvents__american ${deployAmericano ? 'active' : ''}`}>
                                {!deployAmericano ? (
                                    <p onClick={onMouserDeployAmericano} className={`${!deployAmericano ? '' : 'active2'} `}>Americano</p>
                                ) : (
                                    <p onClick={() => setDeployAmericano(false)} className={`${!deployAmericano ? '' : 'active2'} `}>
                                        Americano
                                    </p>
                                )}
                                <ul style={deployAmericano ? styleEvents : styleNone}>
                                    <li className="header__liga">
                                        <Link className={`header__link ${isActive('/americano/allAmericanos')}`} to="/americano/allAmericanos">
                                            Todas los Americanos
                                        </Link>
                                    </li>
                                    <li className="header__liga">
                                        <Link className={`header__link ${isActive('/americano/galeryAmericano')}`} to="/americano/galeryAmericano">
                                            Galeria
                                        </Link>
                                    </li>
                                    <li className="header__liga">
                                        <Link className={`header__link ${isActive('/americano/boardAmericano')}`} to="/americano/boardAmericano">
                                            Tabla de Americano
                                        </Link>
                                    </li>
                                    <li className="header__liga">
                                        <Link className={`header__link ${isActive('/americano/calendaryAmericano')}`} to="/americano/calendaryAmericano">
                                            Calendario
                                        </Link>
                                    </li>
                                    <li className="header__liga">
                                        <Link className={`header__link ${isActive('/americano/resultsAmericano')}`} to="/americano/resultsAmericano">
                                            Resultados
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="header__li">
                        <Link className={`header__link ${isActive('/aboutus')}`} to="/aboutus">
                            SOBRE NOSOTROS
                        </Link>
                    </li>
                    <li className="header__li">
                        <Link className={`header__link ${isActive('/sponsors')}`} to="/sponsors">
                            AUSPICIADORES
                        </Link>
                    </li>
                    <li className="header__li">
                        <Link className={`header__link ${isActive('/contactus')}`} to="/contactus">
                            CONTACTANOS
                        </Link>
                    </li>
                    <div className="header_icons">
                        <Link to='https://www.facebook.com/profile.php?id=100092261211805&mibextid=ZbWKwL' target='_blank'><i className='bx bxl-facebook-circle' ></i> </Link>
                        <Link to='https://www.instagram.com/ligapadelcurauma/' target='_blank'><i className='bx bxl-instagram' ></i></Link>
                        <Link to='https://chat.whatsapp.com/DZAuFi1IjD6BJKg0fW6F0c' target='_blank'><i className='bx bxl-whatsapp' ></i> </Link>
                    </div>

                </ul>
            </nav>
            <div className='header__iconMain'>
                {
                    closeMain ?
                        <i className='bx bx-menu' onClick={handleMain}></i>
                        :
                        <i className='bx bxs-x-circle' onClick={() => { setcloseMain(true) }} ></i>
                }

            </div>
        </header >
    );
}

export default Header;
