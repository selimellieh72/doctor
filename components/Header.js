"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';



export default function Header() {

  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();


  return (
<header className='px-12 py-4 lg:py-6 fixed top-0 w-full bg-secondary z-50'>
      <div className='hidden lg:flex justify-between bg-primary text-secondary py-2 px-4 mb-4'>
      <span >Profesionalios teismo medicinos paslaugos</span> <span className='mx-2'>Tel. <span className='text-secondary'>+370 640 36369</span>
      </span>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between ">
      
      <Link href="/">
        <div className="flex items-center space-x-4">
        <Image src="/heart_pulse.svg" height={35} width={35} alt="Heart pump image" />
      
          <span className=" font-bold text-lg text-primary">Gregoire ABI CHAKER</span>
        </div>
      </Link>
      <span className='text-primary font-bold lg:hidden'>Tel. +370 640 36369</span>
      <ul className={`overflow-hidden transition-all mt-4 lg:mt-0 ${isOpen? 'max-h-[350px]' : 'max-h-0' } lg:max-h-[350px] lg:pt-0 flex-col lg:flex-row lg:flex space-y-10 lg:space-y-0 lg:space-x-8 text-primary font-medium text-center`}>
        
        <li className={`${pathname == "/apie-mane" ? "text-amber-900" : "hover:text-amber-700"} transition-colors`}><Link href="/apie-mane">Apie mane</Link></li>
        <li className="hover:text-amber-700 transition-colors"><Link href="">Gyvų asmenų tyrimai</Link></li>
        <li className="hover:text-amber-700 transition-cobzlors"><Link href="">Mirusių asmenų tyrimai</Link></li>
        <li className="hover:text-amber-700 transition-colors"><Link href="">DUK</Link></li>
        <li className="hover:text-amber-700 transition-colors"><Link href="">Kontaktai</Link></li>
      </ul>

     
  
      </div>
      <div 
        onClick={() => setIsOpen(!isOpen)}
      className="absolute top-[35px] right-4 flex lg:hidden align-center flex-col space-y-2 p-2 transition-opacity hover:cursor-pointer hover:opacity-80"
          
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
   </header>
  )
}
