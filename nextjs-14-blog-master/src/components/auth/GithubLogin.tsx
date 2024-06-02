import { loginUsingGithub } from "@/lib/actions/action";
import {GitHubLogoIcon} from "@radix-ui/react-icons"
export const GithubLogin = () => {
  return (
    <form action={loginUsingGithub} className="w-full max-w-sm">
      <button
        type="submit"
        className="w-full flex justify-center items-center gap-2 bg-white text-blue-600 p-2 rounded hover:bg-blue-100 focus:outline-none focus:shadow-outline-blue"
      >
       <GitHubLogoIcon className="w-6 h-6"/> <span>Login Using Github</span>
      </button>
    </form>
  );
};
