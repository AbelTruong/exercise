import Image from "next/image";

export const metadata = {
  title: "Contact Page",
  description: "Contact description",
};

const Contact = () => {
  return (
    <div className="w-full flex justify-between items-center gap-2">
      <div className="w-full h-96">
        <div className="relative w-2/3 h-full m-auto">
          <Image src="/contact.png" alt="Contact" fill />
        </div>
      </div>
      <div className="w-full">
        <form action="" className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name and Surname"
            className="p-2 rounded border border-gray-800 bg-primary focus:border-gray-800"
          />
          <input
            type="text"
            placeholder="Email Address"
            className="p-2 rounded border border-gray-800 bg-primary focus:border-gray-800"
          />
          <input
            type="text"
            placeholder="Phone Number (Optional)"
            className="p-2 rounded border border-gray-800 bg-primary focus:border-gray-800"
          />
          <textarea
            name=""
            id=""
            cols={30}
            rows={4}
            placeholder="Message"
            className="p-2 rounded border border-gray-800 bg-primary focus:border-gray-800"
          ></textarea>
          <input type="submit" value="Send"  className="p-2 text-white bg-blue-600 rounded cursor-pointer"/>
        </form>
      </div>
    </div>
  );
};

export default Contact;
