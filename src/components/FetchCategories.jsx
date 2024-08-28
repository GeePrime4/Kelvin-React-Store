import React from 'react'
import electronics from "../img/electronics.jpg";
import jeweleries from "../img/jeweleries.jpg";
import menscloths from "../img/menscloths.jpg";
import womensclothes from "../img/womensclothes.jpg";
import "./style.css"
import { Link, NavLink } from 'react-router-dom';
function FetchCategories() {
    const categories = ["Electronics", "Jewelery", "Men's Clothing", "Women's Clothing"]
    return (
        <div className='mb-2'>
            <h2 className='text-center border-bottom border-3 w-25 mx-auto'>Categories</h2>
            <div className=" mt-2 rounded-4 shadow-lg p-3 border border-2 ">
                <div className=" d-flex p-3">
                    <div className="h5">
                        <Link to={"/electronics"} className='link'>
                            <img src={electronics} alt="Electronics" className="rounded-5 img-fluid ms-1" style={{ width: '160px', height: "203px" }} id='zoom' /> <br />
                            <p className='mt-1 mb-0'> {categories[0]}</p>
                        </Link>
                    </div>
                    <div className="h5">
                    <Link to={"/jewelery"} className='link'>
                        <img src={jeweleries} alt='Jeweleries' className="rounded-5 img-fluid ms-3" style={{ width: '160px', height: "203px" }} id='zoom' />
                        <p className='mt-1 mb-0'> {categories[1]}</p>
                        </Link> 
                    </div>
                    <div className="h5">
                        <Link to={"/menscloth"} className='link'>
                        <img src={menscloths} alt='Jeweleries' className="rounded-5 img-fluid mx-3" style={{ width: '160px', height: "200px" }} id='zoom' />
                        <p className='mt-2 mb-0'> {categories[2]}</p>
                        </Link>
                    </div>
                    <div className="h5">
                        <Link to={"/womenscloth"} className='link'>
                        <img src={womensclothes} alt='Jeweleries' className="rounded-5 img-fluid ms-2" style={{ width: '160px', height: "200px" }} id='zoom' />
                        <p className='mt-2 mb-0'> {categories[3]}</p>
                        </Link >
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FetchCategories
