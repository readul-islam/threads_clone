
"use client"
import { sidebarLinks } from "@/constants";
import { SignOutButton, SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import logoOut from "../../assets/logout.svg";

const BottomBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <section className="bottombar">
<div className="bottombar_container">
{sidebarLinks.map((link, index) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;
          return (
            <Link className={`bottombar_link ${
              isActive && 'bg-primary-500'
            }` } href={link.route} key={index}>
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
              />
              <p className="text-subtle-medium text-light-1 max-sm:hidden">{link.label.split(/\s+/)[0]}</p>
            </Link>
          );
        })}
</div>

    </section>
  )
}

export default BottomBar