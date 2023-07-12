import React, { useEffect, useState } from "react"
import { useLocale } from "next-intl"
import Link from "next-intl/link"
import { usePathname } from "next/navigation"

export default function LocaleDropdown({ className }) {
  const [dropdownEnabled, setDropdownEnabled] = useState(false)
  useEffect(() => {
    window.onclick = (e) => {
      if (e.target.id !== "dropdownBtn") setDropdownEnabled(false)
    }
  }, [])

  const locale = useLocale()
  const pathname = usePathname()

  return (
    <div
      className={className}
      onClick={() => setDropdownEnabled(!dropdownEnabled)}
    >
      <button
        id="dropdownBtn"
        className="inline-flex items-center rounded-lg  bg-secondary px-5 py-2.5 text-center text-sm font-medium text-primary focus:outline-none  "
        type="button"
      >
        {locale.toUpperCase()}

        <svg
          id="dropdownBtn"
          className="ml-2.5 h-2.5 w-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      <div
        id="dropdownHover"
        className={`absolute z-10 ${
          !dropdownEnabled ? "hidden" : ""
        }  w-20 divide-y divide-gray-100 rounded-lg bg-primary shadow`}
      >
        <ul
          className="py-2 text-sm text-secondary"
          aria-labelledby="dropdownHoverButton"
        >
          <Link
            href={
              "/" +
              pathname
                .replace("/en/", "")
                .replace("/lt/", "")
                .replace("/en", "")
                .replace("/lt", "")
            }
            className=" cursor-pointer"
            locale={locale == "en" ? "lt" : "en"}
          >
            <li className="block  px-4 py-2 text-center hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
              {locale == "en" ? "LT" : "EN"}
            </li>
          </Link>
        </ul>
      </div>
    </div>
  )
}
