import React from 'react'
import { FaBars} from 'react-icons/fa';

const NavBottom = () => {

    const links=[
        {
            id: 1,
            link:'Prime'
        },
        {
            id: 2,
            link:'Amazon miniTV'
        },
        {
            id: 3,
            link:'Sell'
        },
        {
            id: 4,
            link:'Best Sellers'
        },
        {
            id: 5,
            link:'Mobiles'
        },
        {
            id: 6,
            link:'New Releases'
        },
        {
            id: 7,
            link:'Customer Service'
        },
        {
            id: 8,
            link:'Electronics'
        },
        {
            id: 9,
            link:'Fashion'
        },
        {
            id: 10,
            link:'Amazon Pay'
        },
        {
            id: 11,
            link:'Computers'
        },
        {
            id: 12,
            link:'Books'
        },
        {
            id: 13,
            link:'Coupons'
        },
        
    ];

  return (
    <div className='w-full flex justify-between items-center px-4
         h-12 mt-20 gap-8 text-white bg-gray-800 flex-row'>

         {/* all with icon*/}
        <div className=' text-xl flex flex-row gap-1 min-w-min'>
            <FaBars size={26}/>
            <p className='font-bold'>All</p>
        </div>

        <div className='w-full'>
        <ul className='flex flex-row text-l font-semibold justify-between'>
            {links.map(({id, link})=>(
                <li key={id}
                className='text-gray-100'>
                <p>{link}</p>
                </li>
                ))}
        </ul>
        </div>

    </div>
  )
}

export default NavBottom