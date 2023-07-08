"use client"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { useMediaQuery } from "react-responsive"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" })
  const pathname = usePathname()
  const [transitionActive, setTransitionActive] = useState(false)

  useEffect(() => {
    setIsOpen(false)
    document.querySelector("ul").classList.remove("transition-all")
  }, [pathname])

  useEffect(() => {
    if (!isMobile) setTransitionActive(false)
    if (isMobile && isOpen) {
      setTransitionActive(true)
    }
  }, [isMobile, isOpen])

  return (
    <header className="fixed top-0 z-50 w-full bg-secondary px-12 py-4 lg:py-6">
      <div className="mb-4 hidden justify-between bg-primary px-4 py-2 text-secondary lg:flex">
        <span>Profesionalios teismo medicinos paslaugos</span>{" "}
        <span className="mx-2">
          Tel. <span className="text-secondary">+370 640 36369</span>
        </span>
      </div>
      <div className="flex flex-col items-center justify-between lg:flex-row ">
        <Link href="/">
          <div className="flex items-center space-x-4">
            <Image
              src="/heart_pulse.svg"
              height={35}
              width={35}
              alt="Heart pump image"
            />

            <span className=" text-lg font-bold text-primary">
              Gregoire ABI CHAKER
            </span>
          </div>
        </Link>
        <span className="font-bold text-primary lg:hidden">
          Tel. +370 640 36369
        </span>
        <ul
          className={`mt-4 overflow-hidden lg:mt-0  ${
            transitionActive ? "transition-all" : ""
          } lg:transition-none  ${
            isOpen ? "max-h-[350px]" : "max-h-0"
          } flex-col space-y-10 text-center font-medium text-primary lg:flex lg:max-h-[350px] lg:flex-row lg:space-x-8 lg:space-y-0 lg:pt-0`}
        >
          <li
            className={`${
              pathname == "/apie-mane"
                ? "text-amber-900"
                : "hover:text-amber-700"
            } transition-colors`}
          >
            <Link href="/apie-mane">Apie mane</Link>
          </li>
          <li
            className={`${
              pathname == "/gyvu-asmenu-tyrimai"
                ? "text-amber-900"
                : "hover:text-amber-700"
            } transition-colors`}
          >
            <Link href="/gyvu-asmenu-tyrimai">Gyvų asmenų tyrimai</Link>
          </li>
          <li
            className={`${
              pathname == "/mirusiu-asmenu-tyrimai"
                ? "text-amber-900"
                : "hover:text-amber-700"
            } transition-colors`}
          >
            <Link href="/mirusiu-asmenu-tyrimai">Mirusių asmenų tyrimai</Link>
          </li>
          <li
            className={`${
              pathname == "/duk" ? "text-amber-900" : "hover:text-amber-700"
            } transition-colors`}
          >
            <Link href="/duk">DUK</Link>
          </li>
          <li
            className={`${
              pathname == "/kontaktai"
                ? "text-amber-900"
                : "hover:text-amber-700"
            } transition-colors`}
          >
            <Link href="/kontaktai">Kontaktai</Link>
          </li>
        </ul>
      </div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="align-center absolute right-4 top-[35px] flex flex-col space-y-2 p-2 transition-opacity hover:cursor-pointer hover:opacity-80 lg:hidden"
      >
        <span
          className={`h-0.5 w-7 transform bg-primary ${
            isOpen ? "translate-y-2.5 rotate-45" : ""
          } transition`}
        ></span>
        <span
          className={`h-0.5 w-7 bg-primary ${
            isOpen ? "opacity-0" : "opacity-100"
          } transition`}
        ></span>
        <span
          className={`h-0.5 w-7 transform bg-primary ${
            isOpen ? "-translate-y-2.5 -rotate-45" : ""
          } transition`}
        ></span>
      </div>
    </header>
  )
}
