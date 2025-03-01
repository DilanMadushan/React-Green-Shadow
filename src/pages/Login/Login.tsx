import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from 'js-cookie';
const Login = () => {

  const api = axios.create({
    baseURL : "http://localhost:3000/"
})

  const [emil,setEmail] = useState("");
  const [password,setPassword] = useState("");

    const navigate = useNavigate();
    const onSubmit = async(e)=>{
      e.preventDefault();

      const user = {
        username:emil,
        password:password
      }

      const resualt = await api.post("auth/login",user);
      const token = resualt.data.refreshToken;
      Cookies.set('token', token, { expires: 7, secure: true });

        navigate('/dashboard');
    }
    const register = ()=>{
        navigate('/signup');
    }

  return (
    <div className='flex items-center justify-center h-screen bg-gradient-to-r from-green-900 to-emerald-500'>
      <div className='bg-white p-8 rounded-2xl shadow-lg w-full max-w-md'>
        <h2 className='text-2xl font-bold text-center text-emerald-600 mb-6'>Login</h2>
        <form>
          <div className='mb-4'>
            <label className='block text-gray-700 font-semibold'>Email</label>
            <input 
              type='email' 
              className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500' 
              placeholder='Enter your email' 
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className='mb-6'>
            <label className='block text-gray-700 font-semibold'>Password</label>
            <input 
              type='password' 
              className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500' 
              placeholder='Enter your password' 
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <button 
            type='submit' 
            className='w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition duration-300'
            onClick={onSubmit}
          >
            Login
          </button>
        </form>
        <span className='mt-4 text-center text-gray-600'>Don't have an account? <span className='text-emerald-600 font-semibold cursor-pointer'
        onClick={register}
        >Sign Up</span></span>
      </div>
    </div>
  );
};

export default Login;