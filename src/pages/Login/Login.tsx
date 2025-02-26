import { useNavigate } from "react-router-dom";
const Login = () => {

    const navigate = useNavigate();
    const onSubmit = ()=>{
        navigate('/dashboard');
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
            />
          </div>
          <div className='mb-6'>
            <label className='block text-gray-700 font-semibold'>Password</label>
            <input 
              type='password' 
              className='w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500' 
              placeholder='Enter your password' 
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
        <p className='mt-4 text-center text-gray-600'>Don't have an account? <a href='#' className='text-emerald-600 font-semibold'>Sign Up</a></p>
      </div>
    </div>
  );
};

export default Login;