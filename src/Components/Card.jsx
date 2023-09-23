import React from 'react'
import SingleCard from './SingleCard'

const Card = ({products}) => {
  return (
    <div className='grid sm:grid-cols-2 gap-x-4 lg:grid-cols-3 xl:grid-cols-4 gap-y-0 '>
    {products.map((product) => (
        <SingleCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default Card;