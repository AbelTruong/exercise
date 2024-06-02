import { CredentialLogin } from "@/components/auth/CredentialLogin";
import { GithubLogin } from "@/components/auth/GithubLogin";
import Link from "next/link";

const Login:React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-1/3 px-4 py-6 flex flex-col justify-center items-center bg-gray-900 rounded shadow-md">
        <CredentialLogin />
        <hr  className="my-2 w-full"/>
        <GithubLogin />
        <Link href="/register" className="text-white mt-4">
          {"Don't have an account?"} <b>Register</b>
        </Link>
      </div>
    </div>
  );
};
export default Login;
