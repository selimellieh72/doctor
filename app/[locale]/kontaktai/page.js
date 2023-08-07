import Image from "next/image"
import Divider from "@/components/Divider"
import { useLocale, useTranslations } from "next-intl"

import { getTranslator } from "next-intl/server"

export async function generateMetadata({ params: { locale } }) {
  // While the `locale` is required, the namespace is optional and
  // identical to the parameter that `useTranslations` accepts.
  const t = await getTranslator(locale, "Home")

  return {
    title: t("page_title"),
    description: t("page_description"),
  }
}

export default function Kontaktai() {
  const t = useTranslations("Kontaktai")
  const locale = useLocale()
  return (
    <main className="mx-auto px-4 lg:px-16">
      <section className="my-16">
        <div className="mx-auto  grid  lg:grid-cols-12 lg:gap-8  xl:gap-0">
          <div className="place-self-center py-8 text-center lg:col-span-7  lg:mr-auto  lg:py-32 lg:text-left">
            <h1 className="mb-4 max-w-2xl text-5xl font-medium leading-normal tracking-wide text-secondary lg:leading-relaxed">
              {t("title")}
            </h1>
            <p className="mb-6 max-w-2xl font-light text-secondary md:text-lg lg:mb-8 lg:text-xl">
              {t("subtitle")}
            </p>
          </div>

          <div className="relative flex h-[400px]  md:mx-auto md:w-1/2  lg:col-span-5  lg:h-auto lg:w-full">
            <Image
              fill
              className="lg:object-right"
              style={{ objectFit: "contain" }}
              src="/kontaktai.webp"
              alt="gregoire"
            />
          </div>
        </div>
      </section>
      <Divider />
      <section className="services my-16 space-y-8">
        <div className="flex flex-col lg:flex-row">
          <div className="flex w-80 items-center justify-between">
            <span className="text-xl font-medium tracking-wide text-secondary">
              {t("phone")}
            </span>
            <Image
              className="hidden lg:block"
              src="/arrow_right_circle.svg"
              height={40}
              width={40}
            />
          </div>
          <div className="flex flex-1 flex-col items-start justify-center gap-2 lg:items-center">
            <span className="text-xl font-medium tracking-wide text-secondary">
              +370 640 36369
            </span>
          </div>
        </div>
        <hr className="border-secondary" />
        <div className="flex flex-col lg:flex-row">
          <div className="flex w-80 items-center justify-between">
            <span className="text-xl font-medium tracking-wide text-secondary">
              {t("email")}
            </span>
            <Image
              className="hidden lg:block"
              src="/arrow_right_circle.svg"
              height={40}
              width={40}
            />
          </div>
          <div className="flex flex-1 flex-col items-start justify-center gap-2 lg:items-center">
            <span className="text-xl font-medium tracking-wide text-secondary">
              teismomedicina.gac@gmail.com
            </span>
          </div>
        </div>
        <div className="contact-us flex pt-4 lg:space-x-4">
          <div className=" hidden w-2/5 bg-secondary  px-4 py-10 lg:block">
            <div
              className={`flex ${
                locale == "lt" && "w-44"
              } items-center justify-between`}
            >
              <span className="text-xl font-medium tracking-wide text-primary">
                {t("cta")}
              </span>
              <Image
                className="hidden lg:block"
                src="/arrow_right_circle_primary.svg"
                height={40}
                width={40}
              />
            </div>
          </div>
          <div className=" ml-0 w-full  bg-secondary py-10 text-primary lg:w-3/5">
            <span className="mx-auto mb-8 table text-center text-xl font-medium tracking-wide text-primary lg:hidden">
              Susisiekite
            </span>
            <form
              action="mailto:teismomedicina.gac@gmail.com"
              className=" mx-auto w-3/5"
            >
              <div className="mb-4 w-full">
                <label className="font-medium " htmlFor="subject">
                  {t("form_name")} *
                </label>
                <input
                  required
                  name="subject"
                  id="subject"
                  type="text"
                  className="mt-2 block h-10 w-full border-b border-primary bg-transparent p-4 outline-none invalid:border-red-700 hover:border focus:border"
                ></input>
              </div>
              <div className="mb-4 w-full">
                <label className="font-medium " htmlFor="name">
                  {t("form_email")} *
                </label>
                <input
                  required
                  name="email"
                  id="email"
                  type="email"
                  className="mt-2 block h-10 w-full border-b border-primary bg-transparent p-4 outline-none invalid:border-red-700 hover:border focus:border"
                ></input>
              </div>
              <div className="mb-4 w-full">
                <label className="font-medium " htmlFor="body">
                  {t("form_text")}
                </label>
                <input
                  name="body"
                  id="body"
                  className="mt-2 block h-10 w-full border-b border-primary bg-transparent p-4 outline-none hover:border focus:border"
                ></input>
                <button
                  type="submit"
                  href="/apie-mane"
                  className="focus:ring-primary-300 dark:focus:ring-primary-900 mr-3 mt-8 inline-flex items-center justify-center rounded-xl bg-primary px-12  py-2 text-center text-base font-medium text-secondary invalid:border-red-700 focus:ring-4"
                >
                  {t("form_btn")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
