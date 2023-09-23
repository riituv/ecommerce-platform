import React, { useState } from 'react'
import { Link } from "react-router-dom";

const Signup = () => {

  //store form data
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    password: '',
  });

  //set errors
  const [errors, setErrors] = useState({});

  const [isRegistered, setIsRegistered] = useState(false);

  //change in form data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!formData.name) {
      validationErrors.name = 'Name is required';
    }

    const mobilePattern = /^[0-9]{10}$/;
    if (!formData.mobile) {
      validationErrors.mobile = 'Mobile number is required';
    }
    else if (!formData.mobile.match(mobilePattern)) {
      validationErrors.mobile = 'Enter valid mobile number';
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!formData.email.match(emailPattern)) {
      validationErrors.email = 'Enter valid email';
    }

    const passwordPattern = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=])(?=.{6,})/;
    if (!formData.password.match(passwordPattern)) {
      validationErrors.password =
        'Password must be at least 6 characters with at least one uppercase letter, one special character, and one number';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setIsRegistered(true);
    }

    if (isRegistered) {
      return <Link to="/" />;
    }

  };

  return (
    <div>

      <div className='flex border-2 border-gray-300 md:w-1/5 w-2/4 rounded-lg h-auto mx-auto 
    flex-col gap-6 my-20 p-6'>

        <form onsSubmit={handleSubmit}
        className='flex flex-col gap-4'>

          <div className='flex flex-col gap-2 text-sm'>
            <p className='font-semibold'>Your name</p>
            <input
              type="text"
              id='name'
              name='name'
              placeholder='first name and last name'
              required
              value={formData.name}
              onChange={handleChange}
              className={`border-2 border-gray-200 w-full h-8 rounded-md p-2 ${errors.name ? 'border-red-500' : ''
            }`}  />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
          </div>

          <div className='flex flex-col gap-2 text-sm'>
            <p className='font-semibold'>Mobile number</p>
            <input
              type="tel"
              id='mobile'
              name='mobile'
              required
              value={formData.mobile}
              onChange={handleChange}
              className={`border-2 border-gray-200 w-full h-8 rounded-md p-2 ${errors.mobile ? 'border-red-500' : ''
            }`}  />
              {errors.mobile && (
                <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
              )}
          </div>

          <div className='flex flex-col gap-2 text-sm'>
            <p className='font-semibold'>Email</p>
            <input
              type="email"
              id='email'
              name='email'
              required
              value={formData.email}
              onChange={handleChange}
              className={`border-2 border-gray-200 w-full h-8 rounded-md p-2 ${errors.email ? 'border-red-500' : ''
                }`} />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
          </div>

          <div className='flex flex-col gap-2 text-sm'>
            <p className='font-semibold'>Password</p>
            <input
              type="password"
              id='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              required
              className={`border-2 border-gray-200 w-full h-8 rounded-md p-2 ${errors.password ? 'border-red-500' : ''
            }`}  />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <button type="submit" className='bg-yellow-400 h-8 rounded-md flex justify-center items-center 
            text-sm font-semibold w-full '>
            Continue
          </button>
        </form>



        <hr className='flex-grow border-t border-gray-300 mr-2 w-full' />

        <div className='text-sm font-semibold'>
          <p>Already have an account?
            <Link
              className="text-blue-500 ml-1 hover:text-yellow-600" to="/login" >
              SignIn
            </Link>
          </p>
        </div>

      </div>

    </div>
  )
}

export default Signup