"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';



export default function Header() {

  const [isOpen, setIsOpen] = useState(false);


  return (
<>
      <header className="flex flex-col lg:flex-row items-center justify-between px-12 py-6 bg-secondary">
      
      <div className="flex items-center space-x-4">
      <Image src="/heart_pulse.svg" height={35} width={35} alt="Heart pump image" />
    
        <Link href="/" className=" font-bold text-lg text-primary">Gregoire ABI CHAKER</Link>
      </div>
     
      <ul className={`pt-5 lg:pt-0 flex-col lg:flex-row ${isOpen? "flex": "hidden"} lg:flex space-y-10 lg:space-y-0 lg:space-x-8 text-primary font-medium text-center`}>
        <li className="hover:text-amber-700 transition-colors "><Link href="">Apie mane</Link></li>
        <li className="hover:text-amber-700 transition-colors"><Link href="">Gyvų asmenų tyrimai</Link></li>
        <li className="hover:text-amber-700 transition-colors"><Link href="">Mirusių asmenų tyrimai</Link></li>
        <li className="hover:text-amber-700 transition-colors"><Link href="">DUK</Link></li>
        <li className="hover:text-amber-700 transition-colors"><Link href="">Kontaktai</Link></li>
      </ul>

     
  
      </header>
      <div 
        onClick={() => setIsOpen(!isOpen)}
      className="absolute top-5 right-4 flex lg:hidden align-center flex-col space-y-2 p-2 transition-opacity hover:cursor-pointer hover:opacity-80"
          
      >
       <span
    className={`h-0.5 w-7 bg-primary transform ${isOpen ? 'rotate-45 translate-y-2.5' : ''} transition`}
  ></span>
    <span
        className={`h-0.5 w-7 bg-primary ${
        isOpen ? 'opacity-0' : 'opacity-100'
        } transition`}
    ></span>
    <span
        className={`h-0.5 w-7 bg-primary transform ${
        isOpen ? '-rotate-45 -translate-y-2.5' : ''
        } transition`}
    ></span>
      </div>
   </>
  )
}
