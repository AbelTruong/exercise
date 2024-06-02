import Image from "next/image";

export const metadata = {
  title: "About Page",
  description: "About description",
};

const About = () => {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="w-full flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-blue-600">About Agency</h2>
        <h1 className="text-4xl">
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className="text-lg font-light">
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precision. We’re world’s Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.
        </p>
        <div className="flex gap-10">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold text-blue-600">15K+</h1>
            <p>Year of experience</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold text-blue-600">100K+</h1>
            <p>Active users per day</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold text-blue-600">13K+</h1>
            <p>Year of marketing</p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="relative w-2/3 h-96 m-auto">
          <Image src="/about.png" alt="About" fill/>
        </div>
      </div>
    </div>
  );
};

export default About;
