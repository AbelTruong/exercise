import { BlogCard } from "@/components/blog/BlogCard";

const blogs = [
  {
    id: 1,
    title: "First Blog",
    desc: "This is the desc of the first blog post.",
  },
  {
    id: 2,
    title: "Second Blog",
    desc: "This is the desc of the second blog post.",
  },
  {
    id: 3,
    title: "Third Blog",
    desc: "This is the desc of the third blog post.",
  },
  {
    id: 4,
    title: "First Blog",
    desc: "This is the desc of the first blog post.",
  },
  {
    id: 5,
    title: "Second Blog",
    desc: "This is the desc of the second blog post.",
  },
  {
    id: 6,
    title: "Third Blog",
    desc: "This is the desc of the third blog post.",
  },
];

const Blog = () => {
  return (
    <div className="grid grid-cols-4 gap-4 my-4">
      {blogs.map((blog, i) => {
        return <BlogCard key={i} title={blog.title} desc={blog.desc} />;
      })}
    </div>
  );
};
export default Blog;
