import React, { useEffect, useState } from 'react';
import apiClient from '../../../services/api-client';
import CategoryItem from './CategoryItem';

const Category = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        apiClient.get("/category")
        .then(res => setCategories(res.data.results))
    }, [])

    return (
        <div>
            <div className='flex justify-between px-5 md:px-8 items-center mb-5'>
                <h1 className='font-bold text-xl md:text-4xl'>View Categories</h1>
                <a >View All</a>
            </div> 

            <div className='flex flex-wrap w-full px-5 justify-around items-center'>
            {
                categories.map((category, index) => (
                    <CategoryItem key={category.id} index={index} category={category}/>
                ))
            }
            </div>                           
        </div>
    );
};

export default Category;