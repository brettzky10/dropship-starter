 /* 'use client'
import React from 'react'
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
 import { Avatar } from "@nextui-org/react";
import {
  NavbarItem,
} from "@nextui-org/navbar"; 


export default function NavAvatar() {


  return (
    
      <SignedIn>
        
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton>
          <button className='flex items-center justify-center'>
            <Avatar showFallback src='https://images.unsplash.com/broken' className="w-9 h-9 text-tiny" />
          </button>
        </SignInButton>
      </SignedOut>

  )
}  */