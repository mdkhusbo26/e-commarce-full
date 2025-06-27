import { Link } from 'react-router-dom';
import { useState } from 'react';
import { loginUser } from '../api/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { isLogedIn } from '../features/products/productsSlice';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  let submitLogin = async e => {
    e.preventDefault();
    try {
      await loginUser(email, password);
      setSuccess('login Successful');
      dispatch(isLogedIn(true));
      navigate('/dashbord');
    } catch (error) {
      setError(error.messege || 'Something went wrong');
    }
  };

  return (
    <div className="h-auto  bg-gray-300 flex">
      <div className="min-h-svh mx-auto w-96 font-serif ">
        <Link
          to="/register"
          className="right-3 absolute bg-pink-200 border-2 mt-3  border-pink-400 p-1 text-cyan-600 rounded-md w-28 text-center"
        >
          Register
        </Link>
        <div className="bg-white mt-20 rounded-lg shadow-xl pb-4">
          <h1 className="text-center text-3xl font-semibold font-serif pt-3 bg-gradient-to-r from-blue-500 to-pink-400 bg-clip-text text-transparent ">
            Login
          </h1>
          <form action="submitLogin" className=" flex flex-col px-4">
            <label className="text-lg font-medium text-cyan-600 pt-1 pl-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="border-pink-300 border-2 hover:border-rose-300 rounded-md pl-2 text-gray-700 focus:border-green-600 focus:outline-none"
            />

            <label className="text-lg font-medium text-cyan-600 pt-1 pl-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="border-pink-300 border-2 hover:border-rose-300 rounded-md pl-2 text-gray-700 focus:border-green-600 focus:outline-none"
            />

            <button
              className="bg-pink-200 border-2 mt-5 border-pink-400 p-1 text-cyan-600 rounded-md w-40 self-center"
              onClick={e => submitLogin(e)}
            >
              Submit
            </button>
            {success && <p>{success}</p>}
            {error && <p>{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
