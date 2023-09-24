import React, {useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  //store form data
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  //set errors
  const [errors, setErrors] = useState({});

  const [isValid, setIsValid] = useState(false);

  //change in form data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: '' }); 
  };

  //submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!formData.email.match(emailPattern)) {
      validationErrors.email = 'Enter valid email';
    }

    const passwordPattern = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=])(?=.{6,})/;
    if (!formData.password.match(passwordPattern)) {
      validationErrors.password =
        'Password must be at least 6 characters with at least one uppercase letter, one special character, and one number';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsValid(true);
      navigate('/') 
    }
    
    console.log(errors);

  };

  return (
    <div className='flex flex-col gap-4'>

      {/* sign in box */}
      <form onSubmit={handleSubmit}>
      <div className='flex border-2 border-gray-300 w-72 md:w-80 rounded-lg h-auto mx-auto 
      flex-col gap-6 mt-20 p-6 font-semibold'>

        <div className='text-2xl justify-items-start flex'>Sign In</div>

        <div className='flex flex-col gap-2 text-sm'>

          <div>
            <p>Enter email</p>
            <input type='email' 
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

          <div>
            <p>Enter password</p>
            <input type='password' 
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

        </div>

        <button className=' bg-yellow-400 h-8 rounded-md '>Sign In</button>

      </div>
      </form>
      

      {/* sign up */}

      <div className='flex items-center w-72 md:w-80 mx-auto'>
        <hr className='flex-grow border-t border-gray-300 mr-2' />
        <div className='text-sm font-semibold'>New?</div>
        <hr className='flex-grow border-t border-gray-300 ml-2' />
      </div>

      <Link to="/signup" className=' flex justify-center items-center mx-auto  border-2
       border-gray-300 w-72 md:w-80 rounded-lg h-8 text-sm
    font-semibold mb-20  hover:bg-gray-100'>Create your account</Link>

    </div>
  )
}

export default Login