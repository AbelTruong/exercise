import Image from "next/image";
const Home = () => {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="w-full h-full flex flex-col justify-between gap-2">
        <h1 className="w-full text-center text-5xl font-extrabold break-words leading-tight">
          Creative Thoughts Agency.
        </h1>
        <p className="text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.
        </p>
        <div className="flex justify-center items-center gap-4">
          <button className="bg-blue-600 p-2 rounded-md">Learn More</button>
          <button className="bg-white text-blue-600 py-2 px-6 rounded-md">
            Contact
          </button>
        </div>
        <div className="relative w-1/2 h-8 mx-auto">
          <Image src="/brands.png" alt="Brands" fill  className="object-cover grayscale"/>
        </div>
      </div>
      <div className="w-full">
        <div className="relative w-2/3 h-96 m-auto">
          <Image src="/hero.gif" alt="Hero" fill />
        </div>
      </div>
    </div>
  );
};

export default Home;
