import React, { useEffect, useState } from 'react'
// import { BsChevronDown } from 'react-icons/bs';
import Banner from './Banner';

function ElectronicsList() {
    const [electronics, setElectronics] = useState([]);
    const fetchElectronics = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products/category/electronics")
            const resJson = await response.json();
            console.log(resJson);

            setElectronics(resJson)
        } catch (error) {
            console.log(error);

        }
    }
    useEffect(() => { fetchElectronics() }, [])
    return (
        <div className="container-fluid">
            <div className='row'>
                <div className="col-sm-8">
                    <Banner />
                </div>
                <div className="col-sm-4">
                    <div className="mt-2 ">
                        {
                            electronics.reverse().map(({ title, id }) => (
                                <div className='card mb-1' key={id}>
                                    <div class="card-header">
                                        <div class="text-start d-flex justify-content-between p-1">
                                            <h6>  {title}</h6> <span></span>
                                        </div >
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ElectronicsList
