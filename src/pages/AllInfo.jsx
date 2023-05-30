import React from 'react'
import { Link } from 'react-router-dom'
import './pageStyles/allInfoStyle.css'

const AllInfo = () => {
    return (
        <div className='allInfo__container'>
            <div className='allInfo__whatsapp'>
                <h3>PARA RECIBIR MAS INFORMACION DE NUESTROS EVENTOS ?</h3>
                <p>Haga click  <Link className='allInfo__whatsapp-link' to='https://chat.whatsapp.com/DZAuFi1IjD6BJKg0fW6F0c' target='_blank'>aqui</Link> o en la imgen y podras unirte a nuesto grupo de whatsApp </p>
                <Link to='https://chat.whatsapp.com/DZAuFi1IjD6BJKg0fW6F0c' target='_blank' > <img src="logoPadel.png" alt="" /></Link>
            </div>

            <div className='allInfo__contactus'>
                <h3>CONTACTANOS</h3>
                <ul className='allInfo__contactus-ul'>
                    <li> <i className='bx bx-phone' ></i>  +56987642187</li>
                    <li><i className='bx bx-envelope' ></i> info@ligapadelcurauma.cl </li>
                    <li><Link className='allInfo__contactus-link' to='https://chat.whatsapp.com/DZAuFi1IjD6BJKg0fW6F0c' target='_blank'><i className='bx bxl-whatsapp' ></i> whatsApp</Link></li>
                    <li><Link className='allInfo__contactus-facebook' to='https://www.facebook.com/profile.php?id=100092261211805&mibextid=ZbWKwL' target='_blank'><i className='bx bxl-facebook-circle' ></i> facebook</Link></li>
                </ul>
            </div>
            <div className='allInfo__networks'>
                <h3>SIGUENOS  EN LAS REDES SOCIALES</h3>
                <ul >
                    <li>
                        <Link className='allInfo__networks-link' to='https://www.facebook.com/profile.php?id=100092261211805&mibextid=ZbWKwL' target='_blank'>
                            <div>

                                <img src="../logoPadel.png" alt="" />
                                <i className='bx bxl-facebook-circle' ></i>
                            </div>
                            <span>Liga de Padel Curaum</span>
                        </Link>
                    </li>
                    <li>
                        <Link className='allInfo__networks-link' to='https://www.instagram.com/ligapadelcurauma/'  target='_blank'>
                            <div>
                                <img src="../logoPadel.png" alt="" />
                                <i className='bx bxl-instagram' ></i>
                            </div>
                            <span>Liga de Padel Curaum</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AllInfo