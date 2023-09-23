import React from 'react';
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className='flex flex-col gap-4'>
      {/* sign in box */}
      <div className='flex border-2 border-gray-300 md:w-1/5 w-2/4 rounded-lg h-auto mx-auto 
      flex-col gap-6 mt-20 p-6 font-semibold'>

        <div className='text-2xl justify-items-start flex'>Sign In</div>

        <div className='flex flex-col gap-2 text-sm'>

          <div>
            <p>Enter email</p>
            <input type='email' className='border-2 border-gray-200 w-full h-8 rounded-md ' />
          </div>

          <div>
            <p>Enter password</p>
            <input type='email' className='border-2 border-gray-200 w-full h-8 rounded-md ' />
          </div>

        </div>

        <button className=' bg-yellow-400 h-8 rounded-md '>Sign In</button>

      </div>

      {/* sign up */}

      <div className='flex items-center md:w-1/5 w-2/4 mx-auto'>
        <hr className='flex-grow border-t border-gray-300 mr-2' />
        <div className='text-sm font-semibold'>New?</div>
        <hr className='flex-grow border-t border-gray-300 ml-2' />
      </div>

      <Link to="/signup" className=' flex justify-center items-center mx-auto  border-2 border-gray-300 md:w-1/5 w-2/4 rounded-lg h-8 text-sm
    font-semibold mb-20  hover:bg-gray-100'>Create your account</Link>

    </div>
  )
}

export default Login