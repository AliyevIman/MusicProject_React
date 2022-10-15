import React from 'react'
import LiveShow from '../components/liveShows/LiveShow'
import "../App.scss"
const LiveShowPage = () => {
    return (
        <section id='LiveShow'>
            <section id="pager-section">
                <div className="album-bg"></div>
                <div className="container">
                    <div className="pager-content text-center">
                        <h2>Live Shows</h2>
                    </div>
                </div>
            </section>
            <section id='background-clr'>
                {/* <div className="section-title text-center wow slideInUp" >
                    <h2>New Album Tour 2021</h2>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, debitis?</span>
                </div> */}
                <LiveShow />
            </section>
        </section>

    )
}

export default LiveShowPage