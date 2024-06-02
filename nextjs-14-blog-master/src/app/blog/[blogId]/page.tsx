import Image from "next/image";
const blog = {
  id: 6,
  title: "Third Blog",
  desc: "This is the desc of the third blog post.",
};
const SingleBlog = () => {
  return (
    <div className="w-full flex justify-between items-start my-4">
      <div className="w-1/3 h-96">
        <div className="relative w-full h-full m-auto">
          <Image src="/contact.png" alt="Contact" fill />
        </div>
      </div>
      <div className="w-2/3 flex flex-col gap-4 border border-gray-900 min-h-[70vh] px-4 py-2">
        <div className="">
          <div className="flex justify-start items-center gap-2">
            <div className="relative w-12 h-12">
              <Image
                src="/noavatar.png"
                alt="noavatar"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <div>
              <h3 className="text-blue-600">{"prakash_raj"}</h3>
              <p>01.01.2023</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl text-blue-600 font-bold">{blog.title}</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi cum consectetur optio eaque, voluptas nihil ab soluta facilis dolore distinctio, dignissimos inventore, hic fugit aspernatur ipsum! Labore eveniet eum fugiat.
            Natus quos aspernatur id quas assumenda quo. Tempore cupiditate nemo assumenda adipisci iusto velit provident! Id esse dolorem est accusamus voluptate laboriosam enim harum soluta distinctio facere ratione, eveniet iste.
            Labore veniam possimus debitis amet enim nobis tempore assumenda dolore similique, ratione corporis fugit minima magni, cum atque dicta laboriosam nulla ab earum? Odio accusantium dolorum harum nam dolores deleniti!
            Magni quod optio facilis saepe laboriosam explicabo? Tempore minima voluptas voluptatem molestias saepe harum magni suscipit nisi dignissimos reiciendis laudantium magnam ipsa repellendus enim, eos doloremque quas sit perspiciatis fugiat?
          </p>
        </div>
      </div>
    </div>
  );
};
export default SingleBlog;
