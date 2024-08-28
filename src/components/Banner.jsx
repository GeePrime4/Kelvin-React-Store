import React from 'react'
import banner1 from "../img/Banner/banner1.jpg";
import banner2 from "../img/Banner/banner2.jpg";
import banner3 from "../img/Banner/banner3.jpg";
import banner4 from "../img/Banner/banner4.jpg";
import banner5 from "../img/Banner/banner5.jpg";
const style ={width:"895px"}
function Banner() {
    return (
        <div className="rounded-2 shadow-lg">
            <div id="demo2" className="carousel slide mt-2" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo2" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#demo2" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo2" data-bs-slide-to="2"></button>
                    <button type="button" data-bs-target="#demo2" data-bs-slide-to="3"></button>
                    <button type="button" data-bs-target="#demo2" data-bs-slide-to="4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={banner1} id='zoom' alt="banner" className="rounded-2 img-fluid" style={style}  />
                    </div>
                    <div className="carousel-item">
                        <img src={banner2} id='zoom' alt="banner" className="rounded-2 img-fluid" style={style} />
                    </div>
                    <div className="carousel-item">
                        <img src={banner3} id='zoom' alt="banner" className="rounded-2 img-fluid" style={style} />
                    </div>
                    <div className="carousel-item">
                        <img src={banner4} id='zoom' alt="banner" className="rounded-2 img-fluid" style={style} />
                    </div>
                    <div className="carousel-item">
                        <img src={banner5} id='zoom' alt="banner" className="rounded-2 img-fluid" style={style} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>
        </div>
    )
}

export default Banner
