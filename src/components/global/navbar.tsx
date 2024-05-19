import React from 'react'
import ShoppingCart from '../cart/shopping-cart'
import { ModeToggle } from './mode-toggle'
import Link from 'next/link'
import NavLinks from './nav-links'
import Image from 'next/image'
import { Search } from 'lucide-react'

const Navbar = () => {
    return (
        <div className="fixed top-0 right-0 left-0 p-4 flex items-center justify-between z-30 dark:bg-black/40 bg-white/30 backdrop-blur-lg">
          <aside className="flex items-center gap-2 group cursor-pointer">
            <Image
              src={'/assets/letter-b.png'}
              width={40}
              height={40}
              alt=" logo"
              className='rounded-xl'
            />
            <span className="text-xl font-bold group-hover:text-primary">Ecom Store</span>
          </aside>
          
          <NavLinks/>
          <aside className="flex gap-2 items-center">
          <form className='hidden md:flex items-center bg-white rounded-full w-full flex-1 border border-gray-200'>
                <input type="text" placeholder="Search Products" className='flex-1 px-4 rounded-l-full rounded-r-full outline-none placeholder:text-sm'/>
                <button>
                    <Search className='rounded-full h-10 px-2 w-10 bg-primary-foreground cursor-pointer'/>
                </button>
          </form>
            <Link href="/dashboard" className='flex text-primary font-bold items-center space-x-2 text-sm'>

            </Link>
            <Link
              href="/dashboard"
              className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#EFF0D1_0%,#3057A8_50%,#EFF0D1_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full dark:bg-slate-950 px-3 py-1 text-sm font-medium text-black bg-white hover:bg-gradient-to-tl from-[#091E3A] via-[#2F80ED] via-30% to-[#2D9EE0] to-40% dark:text-white backdrop-blur-3xl">
                Sign In
                {/* {user ? 'Dashboard' : 'Get Started'} */}
              </span>
            </Link>
            <ShoppingCart />
            {/* <UserButton /> */}
            <ModeToggle />
          </aside>
        </div>
      )
}

export default Navbar