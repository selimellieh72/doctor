import { useTranslations } from "next-intl"
import Image from "next/image"

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
export default function ApieMane() {
  const t = useTranslations("ApieMane")
  return (
    <main className="px-4 lg:px-16">
      <section className="hero mx-auto my-16 ">
        <div className=" grid lg:grid-cols-12 lg:gap-8  xl:gap-0">
          <div className="place-self-center text-center lg:col-span-7  lg:mr-auto lg:text-left">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-secondary  ">
              {t("title")}
            </h1>
            <p className="mb-6 max-w-2xl font-light text-secondary md:text-lg lg:mb-8 lg:text-xl">
              {t("subtitle")}
            </p>
            {/* <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-primary rounded-lg bg-secondary focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                    Get started
                    <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </a> */}
            {/* <div className=" text-center">
        <span className=" rounded-full w-4 h-4 bg-secondary inline-block mx-1"/>
        <span className=" rounded-full w-4 h-4 bg-secondary inline-block mx-1"/>
        <span className=" rounded-full w-4 h-4 bg-secondary inline-block mx-1"/>
        </div> */}
            <p
              dangerouslySetInnerHTML={{ __html: t.raw("description") }}
              className="lines my-6 text-justify font-semibold leading-8  text-secondary lg:my-8 lg:mr-6"
            ></p>
          </div>

          <div className="relative flex h-[400px]  md:mx-auto md:w-1/2  lg:col-span-5  lg:h-auto lg:w-full">
            <Image
              fill
              className="lg:object-right"
              style={{ objectFit: "contain" }}
              src="/Apie mane.jpg"
              alt="gregoire"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
