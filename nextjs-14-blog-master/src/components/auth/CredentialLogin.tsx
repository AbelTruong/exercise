import { loginUsingCredential } from "@/lib/actions/action";

export const CredentialLogin: React.FC = () => {
  return (
    <form action={loginUsingCredential} className="w-full mb-2 ">
      <div>
        <label
          htmlFor="username"
          className="block text-sm font-semibold mb-2"
        >
          Username:
        </label>
        <input
          type="text"
          name="username"
          className="w-full p-2 border border-gray-300 rounded text-gray-800"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-semibold mb-2"
        >
          Password:
        </label>
        <input
          type="password"
          name="password"
          className="w-full p-2 border border-gray-300 rounded text-gray-800"
        />
      </div>
      <div className="flex items-center justify-between mt-4">
        <button
          type="submit"
          className="w-full bg-blue-500 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        >
          Login Using Credential
        </button>
      </div>
    </form>
  );
};
