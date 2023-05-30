import React from 'react'

const CardAllRegistered = ({ registered }) => {


    return (
        <div className='registered__container'>
            <div className='registered__names'>
                <h3 className='registered__h3'>{registered.name1} {registered.lastName1}</h3>
                <h3 className='registered__h3'>{registered.name2}{registered.lastName2}</h3>

            </div>
            <section className='registered__scores'>
                <p className='registered__p'>{registered.score1}</p>
                <p className='registered__p'>{registered.score2}</p>
            </section>

            {/* <table class="default">
                <tr>
                    <td>{registered.name1} {registered.lastName1}</td>
                    <td>{registered.score1}</td>
                </tr>
                <tr>
                    <td>{registered.name2}{registered.lastName2}</td>
                    <td>{registered.score2}</td>
                    <td>12°C</td>
                </tr>

            </table> */}
        </div>
    )
}

export default CardAllRegistered