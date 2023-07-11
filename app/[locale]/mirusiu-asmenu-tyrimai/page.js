import Image from "next/image"
import Divider from "@/components/Divider"
import Link from "next/link"
import { useLocale, useTranslations } from "next-intl"
import { getTranslator } from "next-intl/server"

export async function generateMetadata({ params: { locale } }) {
  // While the `locale` is required, the namespace is optional and
  // identical to the parameter that `useTranslations` accepts.
  const t = await getTranslator(locale, "MirusiuAsmenuTyrimai")

  return {
    title: t("page_title"),
  }
}

export default function MirusiuAsmenuTyrimai() {
  const t = useTranslations("MirusiuAsmenuTyrimai")
  const locale = useLocale()
  return (
    <main className=" mx-auto px-4 lg:px-16">
      <section className="hero my-16">
        <div className=" grid  lg:grid-cols-12 lg:gap-8  xl:gap-0">
          <div className="lg py-8 text-center  lg:col-span-7  lg:py-32 lg:text-left">
            <h1 className="mb-4 max-w-2xl text-5xl font-medium leading-normal tracking-wide text-secondary lg:leading-relaxed">
              {t("title")}
            </h1>
          </div>

          <div className="relative flex h-[400px]  md:mx-auto md:w-1/2  lg:col-span-5  lg:h-auto lg:w-full">
            <Image
              fill
              className="lg:object-right"
              style={{ objectFit: "contain" }}
              src="/mirusiu-asmenu-tyrimai.jpg"
              alt="gregoire"
            />
          </div>
        </div>
      </section>
      <Divider />
      <section className="services my-16 space-y-16 ">
        <div className="flex flex-col lg:flex-row">
          <div className="flex w-[21rem] items-center justify-between">
            <span className="text-xl font-medium tracking-wide text-secondary">
              {t("services_title")}
            </span>
            <Image
              className="hidden lg:block"
              src="/arrow_right_circle.svg"
              height={40}
              width={40}
            />
          </div>
          <div className="flex w-1/4 flex-col items-start justify-center gap-2 lg:items-end">
            <span className="text-xl font-medium tracking-wide text-secondary">
              {t("services_subtitle")}
            </span>
          </div>
        </div>
        <div className="ml-4">
          <ul className="mb-8 space-y-8 text-left leading-loose text-secondary">
            <li className="flex items-center space-x-3">
              <svg
                className="h-5 w-5 flex-shrink-0 text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>{t("service1_title")}</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                className="h-5 w-5 flex-shrink-0 text-blue-500 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>{t("service2_title")}</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                className="h-5 w-5 flex-shrink-0 text-blue-500 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>{t("service3_title")}</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                className="h-5 w-5 flex-shrink-0 text-blue-500 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>{t("service4_title")}</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                className="h-5 w-5 flex-shrink-0 text-blue-500 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>{t("service5_title")}</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                className="h-5 w-5 flex-shrink-0 text-blue-500 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>{t("service6_title")}</span>
            </li>
            <li className="flex items-center space-x-3">
              <svg
                className="h-5 w-5 flex-shrink-0 text-blue-500 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>{t("service7_title")}</span>
            </li>
            {locale == "lt" && (
              <li className="flex items-center space-x-3">
                <svg
                  className="h-5 w-5 flex-shrink-0 text-blue-500 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>{t("service8_title")}</span>
              </li>
            )}
          </ul>
        </div>
      </section>
    </main>
  )
}
