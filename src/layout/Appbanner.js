import React from 'react'
import { Link } from 'react-router-dom';
import '../scss/je.scss'

function App() {
    return (
        <section className="app_download position-relative">
       
        <div className="container d-flex align-items-center justify-content-between jeAppbanner">
            <div className="align-items-center">
                <h4 className="d-flex app_come">펫토피아로 와요</h4>
                <h6 className="app_come_first">첫 회원가입시 2000P 적립</h6>
            </div>
            <div>
                <Link to="/download" className="app_down d-flex">어플 다운로드</Link>
            </div>    
        </div> 
    </section>
    )
}

export default App