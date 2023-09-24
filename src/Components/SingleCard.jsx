import React from 'react'

const SingleCard = ({ product }) => {
    return (
        <div className='border-2 border-gray-300 rounded-md px-4 py-4
         h-96'>

            <div className='h-2/3'>
                <img src={product.thumbnail} alt={product.title} 
                className='w-full h-full' />
            </div>
            <div className='flex flex-col mt-2'>
                <h2 className='font-bold'>{product.title}</h2>
                <p className='text-sm'>{product.description}</p>
                <p className='font-semibold'>Price: ${product.price}</p>
            </div>

        </div>
    )
}

export default SingleCard