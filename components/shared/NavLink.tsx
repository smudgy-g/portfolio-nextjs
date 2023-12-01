import Link from "next/link";

export default function NavLink({ pathName, href, title }: { pathName: string, href: string, title: string }) {
  return(
    
      <Link
        href={href}
        prefetch
        className={`${pathName === href
        ? 'text-white h-full items-center px-1 pt-1 text-base font-medium '
        : 'text-cream items-center px-1 pt-1 text-base font-medium hover:text-red-medium before:block before:content-[""] before:h-[3px] before:-z-1 before:absolute before:bottom-0 before:bg-salmon before:w-0 hover:before:w-full transition-all ease-in-out duration-250'}`}
      >
        {title}
      </Link>
  )
}

// 