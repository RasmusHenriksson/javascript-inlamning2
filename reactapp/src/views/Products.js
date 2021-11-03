import React from 'react'
import Navbar from '../components/navbar/Navbar';
import Cards from '../components/cards/Cards';
import Cardgrid from '../components/cards/Cardgrid';


const Products = () => {
    return (
        <>
                <Navbar />
                <div className="container mt-5">
                    <Cardgrid />
                </div>
        </>
        
    )
}

export default Products


