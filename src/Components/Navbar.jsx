import React, { useState, useEffect } from 'react'
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { MdArrowDropDown, MdOutlineShoppingCart } from 'react-icons/md';
import { Link } from "react-router-dom";
import axios from 'axios';


const Navbar = ({onSelectCategory}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');


    const handleCategoryChange = (event) => {
        const newCategory = event.target.value;
        setSelectedCategory(newCategory);
        onSelectCategory(newCategory);
      };

    useEffect(() => {
        axios
            .get('https://dummyjson.com/products')
            .then((response) => {
                const uniqueCategories = [...new Set(response.data.products.map((product) => product.category))];
                setCategories(uniqueCategories);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const menuItems = [
        {
            id: 1,
            name: 'your account'
        },
        {
            id: 2,
            name: 'your order'
        },
        {
            id: 3,
            name: 'your wishlist'
        },
        {
            id: 4,
            name: 'your returns'
        },
    ];


    return (
        <div className='w-full flex flex-row gap-2 justify-between items-center px-4
         h-20 text-white fixed top-0 left-0 right-0 z-10 bg-black mt-0'>

            {/*App name */}
            <div className='font-semibold text-xl'>
                <Link to="/" className='sm:text-2xl md:text-3xl lg:text-4xl'>Amazon</Link>
            </div>

            {/*select your address */}
            <div className='flex flex-col hidden md:block text-left '>

                <div className='lg:ml-6 md:ml-5 md:text-l text-sm font-semibold'>
                    <p>Hello</p>
                </div>

                <div className='flex flex-row md:text-l text-sm gap-1 font-bold'>
                    <HiOutlineLocationMarker size={20} />
                    <p>Select your address </p>
                </div>

            </div>

            {/*search bar */}
            <div className='lg:w-2/4 flex flex-row md:w-3/4'>
                <div className='flex flex-row hover:border-gray-500 inline-block'>
                    <select
                        className="block appearance-none bg-gray-300 h-10 border border-gray-300 
                     md:px-4 py-2 rounded-l focus:outline-none md:w-auto w-5/6 px-2 truncate
                    focus:shadow-outline text-black"
                        id="category"
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                    >
                        <option value="" className='disabled hidden'>Categories</option>
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                    <MdArrowDropDown size={25} color='gray' className='bg-gray-300 h-10' />
                </div>
                <input
                    className='bg-white h-10 md:px-5 px-2 pr-16 rounded-r text-sm w-full'
                    type="text"
                    placeholder="Search Amazon.in"
                />
            </div>

            {/*language option */}
            <div className='hidden lg:block'>
                <div className='flex flex-row gap-1 font-bold'>
                    <p>EN </p>
                    <MdArrowDropDown size={25} color='gray' />
                </div>
            </div>

            {/*sign in and signup */}

            <div
                className="relative inline-block text-left"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="font-semibold">
                    <p className='md:text-l text-sm'>Hello, sign in</p>
                </div>
                <div className="flex items-center gap-1 font-bold md:text-l text-sm cursor-pointer">
                    <Link to="/login">Accounts & Lists</Link>
                    <MdArrowDropDown size={25} color="gray" />
                </div>

                {isHovered && (
                    <div className="origin-top-right p-6 absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        {/* Menu Content */}
                        <div className="py-1 flex flex-col gap-4">
                            <Link to="/login" className="bg-orange-300 hover:bg-orange-400 text-white font-bold py-2 
                            px-4 rounded flex items-center justify-center">
                                Sign In
                            </Link>
                            <ul>
                                {menuItems.map(({ id, name }) => (
                                    <li key={id}
                                        className='text-gray-100'>
                                        <a href='#' className='text-gray-700'>{name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </div>

            {/*returns and order */}
            <div className='flex flex-col hidden xl:block md:text-l text-sm'>

                <div className='ml-6 font-semibold'>
                    <p>Returns</p>
                </div>

                <div className='flex flex-row gap-1 font-bold'>
                    <HiOutlineLocationMarker size={20} /> <p>& Orders </p>
                </div>

            </div>

            {/*shopping cart */}
            <div className='hidden xl:block'>
                <div className='flex flex-row font-bold'>
                    <MdOutlineShoppingCart size={35} />
                    <p>Cart</p>
                </div>
            </div>

        </div>
    )
}

export default Navbar