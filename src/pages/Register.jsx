import { Link } from 'react-router-dom';
import { useState } from 'react';
import { registerUser } from '../api/auth';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    fullName: '',
    email: '',
    password: '',
    avatar: null,
    coverImage: null,
  });
  const [status, setStatus] = useState('');

  let navigate = useNavigate();

  const handleChange = e => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const data = new FormData();
    data.append('username', formData.username);
    data.append('fullName', formData.fullName);
    data.append('email', formData.email);
    data.append('password', formData.password);
    data.append('avatar', formData.avatar);
    data.append('coverImage', formData.coverImage);

    try {
      const result = await registerUser(data);
      setStatus('Registration successful!');
      console.log(result);
      navigate('/login');
    } catch (err) {
      setStatus(err.message || 'Registration failed');
      alert('Registation failed');
    }
  };

  return (
    <div className="h-auto  bg-gray-300 flex">
      <div className="min-h-svh mx-auto w-96 font-serif ">
        <div className="right-3 absolute mt-3 flex gap-3">
          <Link
            to="/dashboard"
            className=" bg-pink-200 border-2 border-pink-400 p-1 text-cyan-600 rounded-md w-28 self-center text-center hover:text-slate-600"
          >
            Dashboard
          </Link>
          <Link
            to="/login"
            className=" bg-pink-200 border-2 border-pink-400 p-1 text-cyan-600 rounded-md w-28 self-center text-center hover:text-slate-600"
          >
            Login
          </Link>
        </div>
        <div className="bg-white mt-20 rounded-lg shadow-xl pb-4">
          <h1 className="text-center text-3xl font-semibold font-serif pt-3 bg-gradient-to-r from-blue-500 to-pink-400 bg-clip-text text-transparent ">
            Register
          </h1>
          <form onSubmit={handleSubmit} className=" flex flex-col px-4">
            <label className="text-lg font-medium text-cyan-600 pt-1 pl-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="border-pink-300 border-2 hover:border-rose-300 rounded-md pl-2 text-gray-700 focus:border-green-600 focus:outline-none"
            />

            <label className="text-lg font-medium text-cyan-600 pt-1 pl-1">
              Username
            </label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="border-pink-300 border-2 hover:border-rose-300 rounded-md pl-2 text-gray-700 focus:border-green-600 focus:outline-none"
            />

            <label className="text-lg font-medium text-cyan-600 pt-1 pl-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="border-pink-300 border-2 hover:border-rose-300 rounded-md pl-2 text-gray-700 focus:border-green-600 focus:outline-none"
            />

            <label className="text-lg font-medium text-cyan-600 pt-1 pl-1">
              Full name
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="border-pink-300 border-2 hover:border-rose-300 rounded-md pl-2 text-gray-700 focus:border-green-600 focus:outline-none"
            />

            <label className="text-lg font-medium text-cyan-600 pt-1 pl-1">
              Avatar
            </label>
            <input
              type="file"
              name="avatar"
              accept="image/*"
              onChange={handleChange}
              className=" pl-1 text-gray-700"
            />

            <label className="text-lg font-medium text-cyan-600 pt-1 pl-1 ">
              Cover Image
            </label>
            <input
              type="file"
              name="coverImage"
              accept="image/*"
              onChange={handleChange}
              className=" pl-1 text-gray-700"
            />

            <button
              type="submit"
              className="bg-pink-200 border-2 mt-5 border-pink-400 p-1 text-cyan-600 rounded-md w-40 self-center"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
