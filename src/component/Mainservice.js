import React from 'react'
import { Link } from 'react-router-dom'
import { Msimg, Msspan } from './style'

function Ms(props) {
    return (
        <>
        <section id={props.keyid} className="margin">
        <div className="container position-relative ">
        <h2>주요 서비스</h2>
            <ul className="row px-0">
                {
                    props.msdata.map((v, i)=>{
                        return(
                            <li className="col-lg-3 col-6 mb-3">
                                <Link to="#" className="d-block">
                                    <Msimg src={v.src} alt={v.alt} ></Msimg>
                                    <Msspan>{v.text}</Msspan>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </section>
        </>
    )
}

export default Ms
