import React, { useState, useEffect } from 'react';
import Card from '../Components/Card';
import axios from 'axios';

const Home = ({selectedCategory}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get('https://dummyjson.com/products')
            .then((response) => {
                setProducts(response.data.products);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;
    return (
        <div className='mx-12 my-4'>
            <Card products={filteredProducts} />
        </div>
    )
}

export default Home