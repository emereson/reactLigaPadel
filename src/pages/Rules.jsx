import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './pageStyles/rulesStyle.css'

const Rules = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const [rulesEvent, setrulesEvent] = useState()



    useEffect(() => {
        const url = `${import.meta.env.VITE_URL_API}/api/v1/event/${id}`

        axios.get(url)
            .then(res => setrulesEvent(res.data))
            .catch(err => console.log(err))
    }, [])

    const clickInscription = () => {
        navigate(`/inscription/${rulesEvent?.event.id}`)
    }

    return (
        <div className='eventRules__container'>
            <div className="inscription__imgcontainer">
                <img src={rulesEvent?.event.coverImg} alt="" />
                <div>
                    <h2>{rulesEvent?.event.name}</h2>
                    <h3>{rulesEvent?.event.subTitle}</h3>
                    <ul className="inscription__imgUl">
                        <li className="inscription__imgLi">
                            LUGAR: <p>{rulesEvent?.event.place}</p>
                        </li>
                        <li className="inscription__imgLi">
                            FECHA DE INICIO : <p>{rulesEvent?.event.endDateEvent}</p>
                        </li>
                        <li className='link__reglas' onClick={clickInscription}>inscribirme</li>
                    </ul>
                </div>
            </div>
            <div className='eventRules_containerText'>
                <div className='eventRules__Text'>
                    <h1>{
                        rulesEvent?.event.typeEvent === 'Liga' ? 'REGLAMENTO DE LA LIGA' : ' REGLAMENTO DEL TORNEO'

                    }
                    </h1>
                    <kbd>{
                        rulesEvent?.event.rules}
                    </kbd>
                </div>
                <div className='eventRules__Text'>
                    <h1>
                        Consideraciones Generales
                    </h1>

                    <kbd>{
                        rulesEvent?.event.generalConditions}
                    </kbd>


                </div>
                <div className='eventRules__Text'>
                    <h1>
                        Requisitos e implementos para partidos
                    </h1>
                    <kbd>{
                        rulesEvent?.event.requirements}
                    </kbd>
                </div>
                <div className='eventRules__Text'>
                    <h1>
                        CAMBIOS Y CANCELACIONES
                    </h1>
                    <kbd>{
                        rulesEvent?.event.changesCancellations}
                    </kbd>
                </div>

            </div>
            <div className='eventRules__inscription'>
                <span className='cardEvent__button' onClick={clickInscription} >inscribirme</span>
            </div>
        </div>
    )
}

export default Rules