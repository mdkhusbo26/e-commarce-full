import { Link } from 'react-router-dom';

function Register() {
  let submitRegister = e => {
    e.preventDefault();
  };

  return (
    <div className="h-auto  bg-gray-300 flex">
      <div className="min-h-svh mx-auto w-96 font-serif ">
        <Link
          to="/login"
          className="right-3 absolute bg-pink-200 border-2 mt-3  border-pink-400 p-1 text-cyan-600 rounded-md w-28 self-center text-center"
        >
          Login
        </Link>
        <div className="bg-white mt-20 rounded-lg shadow-xl pb-4">
          <h1 className="text-center text-3xl font-semibold font-serif pt-3 bg-gradient-to-r from-blue-500 to-pink-400 bg-clip-text text-transparent ">
            Register
          </h1>
          <form action="submit" className=" flex flex-col px-4">
            <label className="text-lg font-medium text-cyan-600 pt-1 pl-1">
              Email
            </label>
            <input
              type="email"
              name=""
              className="border-pink-300 border-2 hover:border-rose-300 rounded-md pl-2 text-gray-700 focus:border-green-600 focus:outline-none"
            />

            <label className="text-lg font-medium text-cyan-600 pt-1 pl-1">
              Username
            </label>
            <input
              type="text"
              name=""
              className="border-pink-300 border-2 hover:border-rose-300 rounded-md pl-2 text-gray-700 focus:border-green-600 focus:outline-none"
            />

            <label className="text-lg font-medium text-cyan-600 pt-1 pl-1">
              Password
            </label>
            <input
              type="password"
              name=""
              className="border-pink-300 border-2 hover:border-rose-300 rounded-md pl-2 text-gray-700 focus:border-green-600 focus:outline-none"
            />

            <label className="text-lg font-medium text-cyan-600 pt-1 pl-1">
              Full name
            </label>
            <input
              type="text"
              name=""
              className="border-pink-300 border-2 hover:border-rose-300 rounded-md pl-2 text-gray-700 focus:border-green-600 focus:outline-none"
            />

            <label className="text-lg font-medium text-cyan-600 pt-1 pl-1">
              Avatar
            </label>
            <input type="file" name="" className=" pl-1 text-gray-700" />

            <label className="text-lg font-medium text-cyan-600 pt-1 pl-1 ">
              CoverImage
            </label>
            <input type="file" name="" className=" pl-1 text-gray-700" />

            <button
              className="bg-pink-200 border-2 mt-5 border-pink-400 p-1 text-cyan-600 rounded-md w-40 self-center"
              onClick={e => submitRegister(e)}
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
