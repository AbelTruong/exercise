import Image from "next/image"
import Link from "next/link"
type BlogCardProps={
    title:string;
    desc:string;
}
export const BlogCard:React.FC<BlogCardProps> = ({title,desc}) => {
  return (
    <div className="w-full flex flex-col items-center gap-2 border border-gray-800 p-2">
        <div className="relative h-72 w-full">
            <Image src="/contact.png" alt="Blog" fill className="object-cover"/>
        </div>
        <div className="flex flex-col justify-between">
            <h3 className="text-xl font-bold line-clamp-1">{title}</h3>
            <p className="line-clamp-1">{desc}</p>
            <Link href='/blog/123' className="text-blue-600">Read more...</Link>
        </div>
    </div>
  )
}
