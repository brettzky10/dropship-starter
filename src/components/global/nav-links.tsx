"use client"

import { Grid2X2 } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavLinks = () => {
  return (
    <nav className="hidden md:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
        <ul className="flex items-center gap-4 list-none text-black dark:text-white">
          
          <li>
            <Link href="/explore" className={`hover:text-primary ${
              usePathname() === "/explore" ? "text-primary" : ""
            } duration-300 ease-linear`}>
              {/* <Grid2X2 size={20}/> */}
              Explore
            </Link>
          </li>
          <li>
            <Link href="/pricing" className={`hover:text-primary ${
              usePathname() === "/pricing" ? "text-primary" : ""
            } duration-300 ease-linear`}>Pricing</Link>
          </li>
          <li>
            <Link
                href="/about"
                className={`hover:text-primary ${
                usePathname() === "/about" ? "text-primary" : ""
                } duration-300 ease-linear`}
            >
                About
            </Link>
          </li>
        </ul>
      </nav>
  )
}

export default NavLinks