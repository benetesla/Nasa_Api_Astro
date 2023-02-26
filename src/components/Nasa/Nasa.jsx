import React, { useEffect, useState } from 'react'
import './Nasa.scss'
const Nasa = () => {
    const [nasa, setNasa] = useState(null)

    useEffect(() => {
        getNasa()
        async function getNasa() {
            const res = await fetch('https://api.nasa.gov/planetary/apod?api_key=a2Szsr8EIoCS091sCRc2ztF5DT2R14EDu9gbLPha')
            const data = await res.json()
            setNasa(data)
        }
    }, [])
    if (!nasa) return <div>Loading...</div>
    return (
        <div className='container'>
            <div className='card'>
                <img
                    src={nasa.url}
                    alt={nasa.title}
                    className='img-fluid'
                />
                <div className='card-body'>
                    <h2 className='card-title'>{nasa.title}</h2>
                    <p className='card-text'>{nasa.explanation}</p>
                    <p className='card-text'>{nasa.date}</p>
                    <p className='card-text'>{nasa.media_type}</p>
                    <p className='card-text'>{nasa.service_version}</p>
                </div>

            </div>
    
        </div>
    )
}

export default Nasa