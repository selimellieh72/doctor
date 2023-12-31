"use client"
import Link from "next-intl/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { useMediaQuery } from "react-responsive"
import { useLocale, useTranslations } from "next-intl"

import { useRouter } from "next/navigation"
import LocaleDropdown from "./LocaleDropdown"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" })
  const router = useRouter()
  const [transitionActive, setTransitionActive] = useState(false)
  const t = useTranslations("Header")
  const pathname = usePathname()

  const locale = useLocale()

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
      <div className="align-item mb-4 hidden items-center justify-between bg-primary px-4 py-2 text-secondary lg:flex">
        <span>{t("head_left_text")}</span>{" "}
        <span className="font-sem mx-2 flex items-center gap-4">
          Tel. <span className="text-secondary">+370 640 36369</span>
          <LocaleDropdown />
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

            <div className="flex flex-col">
              <span className=" text-lg font-bold text-primary">
                {t("brand_title")}
              </span>
              <span className=" font-medium text-primary lg:hidden">
                Tel. +370 640 36369
              </span>
            </div>
          </div>
        </Link>

        <ul
          className={`mt-4 overflow-hidden lg:mt-0  ${
            transitionActive ? "transition-all" : ""
          } lg:transition-none  ${
            isOpen ? "max-h-[350px]" : "!m-0 max-h-0 !p-0"
          } flex-col space-y-10 text-center font-medium text-primary lg:flex lg:max-h-[350px] lg:flex-row lg:space-x-8 lg:space-y-0 lg:pt-0`}
        >
          <li
            className={`${
              pathname.includes("/apie-mane")
                ? "text-amber-900"
                : "hover:text-amber-700"
            } transition-colors`}
          >
            <Link href="/apie-mane">{t("link1")}</Link>
          </li>
          <li
            className={`${
              pathname.includes("/gyvu-asmenu-tyrimai")
                ? "text-amber-900"
                : "hover:text-amber-700"
            } transition-colors`}
          >
            <Link href="/gyvu-asmenu-tyrimai">{t("link2")}</Link>
          </li>
          <li
            className={`${
              pathname.includes("/mirusiu-asmenu-tyrimai")
                ? "text-amber-900"
                : "hover:text-amber-700"
            } transition-colors`}
          >
            <Link href="/mirusiu-asmenu-tyrimai">{t("link3")}</Link>
          </li>
          <li
            className={`${
              pathname.includes("/duk")
                ? "text-amber-900"
                : "hover:text-amber-700"
            } transition-colors`}
          >
            <Link href="/duk">{t("link4")}</Link>
          </li>
          <li
            className={`${
              pathname.includes("/kontaktai")
                ? "text-amber-900"
                : "hover:text-amber-700"
            } transition-colors`}
          >
            <Link href="/kontaktai">{t("link5")}</Link>
          </li>
        </ul>
      </div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="align-center absolute right-4 top-7 flex flex-col space-y-2 p-2 transition-opacity hover:cursor-pointer hover:opacity-80 lg:hidden"
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

      <div className="absolute left-3 top-7 flex items-center gap-2">
        <Link
          href={
            "/" +
            pathname
              .replace("/en/", "")
              .replace("/lt/", "")
              .replace("/en", "")
              .replace("/lt", "")
          }
          locale={"lt"}
          className={` block  text-sm ${
            locale == "lt"
              ? "font-bold underline underline-offset-4"
              : "font-medium"
          } text-primary lg:hidden`}
        >
          LT
        </Link>
        <Link
          href={
            "/" +
            pathname
              .replace("/en/", "")
              .replace("/lt/", "")
              .replace("/en", "")
              .replace("/lt", "")
          }
          locale={"en"}
          className={` block border-l-2 border-primary p-2  text-sm ${
            locale == "en"
              ? "font-bold underline underline-offset-4"
              : "font-medium"
          } text-primary lg:hidden`}
        >
          EN
        </Link>
      </div>
    </header>
  )
}
