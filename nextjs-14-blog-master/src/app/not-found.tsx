import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          404 - Not Found
        </h1>
        <p className="text-lg mb-8">
          Sorry, the page you are looking for might not exist.
        </p>
        <Link className="text-blue-500 hover:underline" href="/">
          Go back to home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
