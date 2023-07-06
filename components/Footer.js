import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 w-full bg-secondary shadow">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="#" className="mb-4 flex items-center justify-center sm:mb-0">
            <Image
              className="mr-3"
              src="/heart_pulse.svg"
              height={35}
              width={35}
              alt="Heart pump image"
            />
            <span className="self-center whitespace-nowrap text-2xl font-semibold text-primary">
              Gregoire ABI CHAKER
            </span>
          </a>
          <ul className="flex flex-wrap items-center justify-center text-sm font-medium text-primary sm:mb-0">
            <li>
              <Link
                href="https://www.facebook.com/gregoire.abichaker"
                className="mr-4 hover:underline md:mr-6 "
              >
                <Image
                  className="mr-3"
                  src="/facebook_icon.svg"
                  height={35}
                  width={35}
                  alt="Heart pump image"
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/gregoire-abi-chaker-4b654410b/?originalSubdomain=lt"
                className="mr-4 hover:underline md:mr-6 "
              >
                <Image
                  className="mr-3"
                  src="/linkedin_icon.svg"
                  height={35}
                  width={35}
                  alt="Heart pump image"
                />
              </Link>
            </li>
          </ul>
        </div>
        <hr className=" border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <span className="align mt-4 flex items-center whitespace-nowrap text-xs text-primary sm:text-center lg:text-sm">
          Tel: +370 640 36369. El. paštas: teismomedicina.gac@gmail.com
        </span>
      </div>
    </footer>
  )
}
