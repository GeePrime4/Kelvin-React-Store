import React, { useEffect, useState } from 'react'
import { BsChevronDown } from 'react-icons/bs';
import { FaCloudRain, } from 'react-icons/fa';
import FetchCategories from './FetchCategories';
import "./style.css"

function Fetchproducts() {
  const [products, setProducts] = useState([])
  const myStyle = { height: '62vh', width: '100%' }
  const [id, setid] = useState(0)
  function controlAddId() {
    if (id !== 4){setid(id + 1)}else{setid(0)}
  }
  function controlSubtractId() {
    if (id !== 0){setid(id - 1)}else{setid(4)}
  }
  const handleNext = () => { controlAddId() }
  const handlePrevious = () => {controlSubtractId() }
  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products?limit=5")
      const resJson = await response.json();      
      setProducts(resJson)

    } catch (error) {
      console.log(error);

    }
  }
  useEffect(() => { fetchProducts() }, [])
  return (
    <div className="container-fluid">
      {products.length == 0 ?
        <div className="d-flex justify-content-evenly align-items-center"
          style={{ height: "62vh" }}><h1 className="spinner-grow text-danger mx-auto"><FaCloudRain /></h1></div>
        :
        <div>
          <div className="row ">
            <div className="col-sm-7">
              <div className=" mt-2 rounded-4 shadow-lg p-3 border border-2 ">
                <div id="demo" className="carousel slide mt-2" data-bs-ride="carousel">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>                    
                  </div>
                  <div className="carousel-inner bg-secondary">
                    <div className="carousel-item active">
                      <img src={products[0].image} id='zoom' alt={products[0].description} className="rounded-5 img-fluid" style={myStyle} />
                    </div>
                    <div className="carousel-item">
                      <img src={products[1].image} id='zoom' alt={products[1].description} className="rounded-5 img-fluid" style={myStyle} />
                    </div>
                    <div className="carousel-item">
                      <img src={products[2].image} id='zoom' alt={products[2].description} className="rounded-5 img-fluid" style={myStyle} />
                    </div>
                    <div className="carousel-item">
                      <img src={products[3].image} id='zoom' alt={products[3].description} className="rounded-5 img-fluid" style={myStyle} />
                    </div>
                    <div className="carousel-item">
                      <img src={products[4].image} id='zoom' alt={products[4].description} className="rounded-5 img-fluid" style={myStyle} />
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev" onClick={handlePrevious}>
                    <span className="carousel-control-prev-icon"></span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next" onClick={handleNext}>
                    <span className="carousel-control-next-icon"></span>
                  </button>
                </div>
              </div>
              <div class="container-fluid mt-3 text-dark border-bottom border-3 mb-2 ">
                <p className=' h3'>{products[id].title}</p>
              </div>
              <FetchCategories/>
            </div>
            <div className="col-sm-5">
              <div className="mt-2">
                {
                  products.reverse().map(({ title, description, id }) => (
                    <div className='accordion card bg-dark mb-1 text-light' key={id}>
                      <div class="card-header">
                        <a class="btn text-start d-flex justify-content-between" data-bs-toggle="collapse" href="#collapseOne">
                          <h6 style={{color:"white"}}>  {title}</h6> <span>{<BsChevronDown />}</span>
                        </a>
                      </div>
                      <div id="collapseOne" class="collapse show" data-bs-parent="#accordion">
                        <div class="card-body">
                          {description}
                        </div></div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      }
    </div >
  )
}

export default Fetchproducts
