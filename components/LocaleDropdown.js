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
    <div className=" flex items-center gap-2">
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
        } text-secondary`}
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
        className={` block border-l-2 border-secondary p-2  text-sm ${
          locale == "en"
            ? "font-bold underline underline-offset-4"
            : "font-medium"
        } text-secondary`}
      >
        EN
      </Link>
    </div>
  )
}
