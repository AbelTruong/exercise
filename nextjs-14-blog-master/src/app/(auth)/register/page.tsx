import { register } from "@/lib/actions/action";

const Register = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-1/3 px-4 py-6 flex flex-col justify-center items-center bg-gray-900 rounded shadow-md">
        <form action={register} className="w-full max-w-sm">
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-white text-sm font-semibold mb-2"
            >
              Username:
            </label>
            <input
              type="text"
              name="username"
              className="w-full p-2 border border-gray-300 rounded text-gray-800"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-white text-sm font-semibold mb-2"
            >
              Email:
            </label>
            <input
              type="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded text-gray-800"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-white text-sm font-semibold mb-2"
            >
              Password:
            </label>
            <input
              type="password"
              name="password"
              className="w-full p-2 border border-gray-300 rounded text-gray-800"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
