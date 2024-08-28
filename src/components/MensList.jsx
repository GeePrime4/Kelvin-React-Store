import React, { useEffect, useState } from 'react'
import Banner from './Banner';

function MensList() {
    const [mensClothes, setMenClothes] = useState([]);
    const fetchMensClothes = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products/category/men's%20clothing")
            const resJson = await response.json();
            console.log(resJson);

            setMenClothes(resJson)
        } catch (error) {
            console.log(error);

        }
    }
    useEffect(() => { fetchMensClothes() }, [])
    return (
       <div className="container-fluid">
         <div className='row'>
            <div className="col-sm-8">
                <Banner />
            </div>
            <div className="col-sm-4">
                <div className="mt-2 ">
                    {
                        mensClothes.reverse().map(({ title, id }) => (
                            <div className='card mb-2' key={id}>
                                <div class="card-header">
                                    <div class="text-start d-flex justify-content-between p-1 ">
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

export default MensList
