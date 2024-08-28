import React from 'react'
import adidas from "../img/adidas.png";
import dior from "../img/dior.png";
import gucci from "../img/gucci.png";
import hermes from "../img/hermes.png";
import louisvuitton from "../img/louisvuitton.png";
import nike from "../img/nike.png";
import prada from "../img/prada.png";
import "./style.css"
function Brands() {
    return (
        <div className='container-fluid mt-2'>
                <h4 className='text-center' style={{textDecoration:"underline"}}>Brands</h4>
            <div className="border shadow d-flex my-2 p-3">  
                <div className="card w-25 m-1">
                    <img src={adidas} alt="" className='card-img-top img-fluid h-100 zoom' id='zoom'/>
                </div>
                <div className="card w-25 m-1">
                    <img src={dior} alt="" className='card-img-top img-fluid h-100 zoom' id='zoom'/>
                </div>
                <div className="card w-25 m-1">
                    <img src={gucci} alt="" className='card-img-top img-fluid h-100 zoom' id='zoom'/>
                </div>
                <div className="card w-25 m-1">
                    <img src={hermes} alt="" className='card-img-top img-fluid h-100 zoom' id='zoom'/>
                </div>
                <div className="card w-25 m-1">
                    <img src={louisvuitton} alt="" className='card-img-top img-fluid h-100 zoom' id='zoom'/>
                </div>
                <div className="card w-25 m-1">
                    <img src={nike} alt="" className='card-img-top img-fluid h-100 zoom' id='zoom'/>
                </div>
                <div className="card w-25 m-1">
                    <img src={prada} alt="" className='card-img-top img-fluid h-100 zoom' id='zoom'/>
                </div>
            </div>
        </div>    
  )
}

export default Brands
