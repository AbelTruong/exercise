import Link from "next/link";
import { auth } from "@/lib/nextauth/auth";
import { NavLinks } from "./NavLinks";

export const Navbar =async () => {
  const session = await auth();
  return (
    <div className="w-full flex justify-between items-center mt-2 z-50">
      <div className="text-2xl font-bold">
        <Link href="/">Hippo</Link>
      </div>
      <NavLinks session={session}/>
    </div>
  );
};
