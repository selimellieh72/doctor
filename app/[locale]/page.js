import Image from "next/image"
import Divider from "@/components/Divider"
import { useTranslations } from "next-intl"

import Link from "next-intl/link"
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

export default function Home() {
  const t = useTranslations("Home")
  return (
    <main className="mx-auto px-4 lg:px-16">
      <section className="hero my-16">
        <div className="mx-auto  grid  lg:grid-cols-12 lg:gap-8  xl:gap-0">
          <div className="place-self-center py-8 text-center lg:col-span-7  lg:mr-auto  lg:py-32 lg:text-left">
            <h1 className="mb-4 max-w-2xl text-4xl font-medium leading-normal tracking-wide text-secondary lg:leading-relaxed">
              {t("title")}
            </h1>
            <p className="mb-6 max-w-2xl font-light text-secondary md:text-lg lg:mb-8 lg:text-xl">
              {t("title_description")}
            </p>
            <Link
              href="/apie-mane"
              className="focus:ring-primary-300 dark:focus:ring-primary-900 mr-3 inline-flex items-center justify-center rounded-lg bg-secondary px-4   py-3 text-center text-base font-medium text-primary focus:ring-4"
            >
              {t("cta")}
              {/* <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg> */}
            </Link>

            {/* <p className="my-6 lg:my-8 lg:mr-6 font-semibold text-secondary  lines leading-8 text-justify">

Konsultuoju visais gyvų ir mirusių asmenų teismo medicinos tyrimų klausimais bei juos atlieku.
            </p> */}
          </div>

          <div className="relative flex h-[400px]  md:mx-auto md:w-1/2  lg:col-span-5  lg:h-auto lg:w-full">
            <Image
              fill
              className="lg:object-right"
              style={{ objectFit: "contain" }}
              src="/welcome.jpg"
              alt="gregoire"
            />
          </div>
        </div>
      </section>
      <Divider />
      <section className="services my-16 space-y-4 ">
        <div className="flex flex-col lg:flex-row">
          <div className="flex w-60 items-start justify-between">
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
          <div className="flex flex-1 flex-col items-start justify-center gap-2 lg:ml-24">
            <span className="text-xl font-medium tracking-wide text-secondary">
              {t("services_description1")}
            </span>
            <p className="mb-6 max-w-2xl font-light leading-relaxed text-secondary md:text-lg lg:mb-8 lg:text-xl">
              {t("services_description2")}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8  lg:flex-row lg:gap-2">
          <div className="relative bottom-0 flex-1 bg-secondary p-10 text-xl font-medium leading-relaxed text-primary transition-all hover:bottom-4 hover:cursor-pointer">
            <Link href="/gyvu-asmenu-tyrimai">
              <Image
                className="mb-4"
                src="/forensic.svg"
                height={60}
                width={60}
              />
              <p className=" whitespace-pre-line">{t("service1_title")}</p>
            </Link>
          </div>

          <div className="relative bottom-0 flex-1 bg-secondary p-10 text-xl font-medium leading-relaxed text-primary transition-all hover:bottom-4 hover:cursor-pointer">
            <Link href="/mirusiu-asmenu-tyrimai">
              <Image
                className="mb-4"
                src="/deceased.svg"
                height={60}
                width={60}
              />
              <p className="whitespace-pre-line">{t("service2_title")}</p>
            </Link>
          </div>
        </div>
      </section>
      <Divider />
      <div className="relative my-16 text-gray-900 sm:rounded-lg ">
        <div className="hero-pattern absolute bottom-0 right-0 h-56 w-64"></div>
        <div className="relative">
          <div>
            <h2 className="text-center text-4xl font-bold leading-tight text-secondary lg:text-5xl">
              {t("testimonials_title")}
            </h2>
            <div className="mx-auto my-4 h-2 w-12 border-4 border-secondary"></div>
            {/* <div className="text-center text-primary font-light">Here are what some of our amazing customers are
          saying ...</div> */}
          </div>
          <div className="flex flex-col items-center justify-center gap-4 lg:flex-row">
            <div className="mt-8 flex max-w-sm flex-1 flex-col justify-between rounded-lg bg-gray-100 p-10 leading-snug text-gray-700 shadow">
              <div className="-ml-4">
                <svg
                  className="w-8 text-primary opacity-25"
                  xmlns="http://www.w3.org/2000/svg"
                  shapeRendering="geometricPrecision"
                  textRendering="geometricPrecision"
                  imageRendering="optimizeQuality"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  viewBox="0 0
                                                                                                             640 640"
                  fill="currentColor"
                >
                  <path d="M557.133 561.704H442.128c-44.256 0-80.458-36.19-80.458-80.446 0-165.58-42.32-347.485 160.656-399.418 91.95-23.516 115.915 77.753 18.119 84.745-59.647 4.276-71.293 42.804-73.147 101.068h92.269c44.256 0 80.458 36.201 80.458 80.458v130.702c0 45.591-37.3 82.89-82.891 82.89zm-358.032 0H84.096c-44.256 0-80.446-36.19-80.446-80.446 0-165.58-42.331-347.485 160.644-399.418 91.95-23.516 115.915 77.753 18.118 84.745-59.646 4.276-71.292 42.804-73.146 101.068h92.269c44.256 0 80.457 36.201 80.457 80.458v130.702c0 45.591-37.3 82.89-82.89 82.89z" />
                </svg>
              </div>
              <div className="mt-2 text-primary">{t("testimonials1_text")}</div>
              <div>
                <div className="mx-auto my-8 w-full border border-primary"></div>
                <div className="flex items-center">
                  <div>
                    <Image
                      className="rounded-full border-2 border-primary"
                      width={45}
                      height={45}
                      src="/profile.svg"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="font-bold">{t("testimonials2_author")}</div>
                    <div className="mt-1 text-sm text-primary">
                      {t("testimonials1_location")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 flex max-w-sm flex-1 flex-col justify-between rounded-lg bg-gray-100 p-10 leading-snug text-gray-700 shadow">
              <div className="-ml-4">
                <svg
                  className="w-8 text-primary opacity-25"
                  xmlns="http://www.w3.org/2000/svg"
                  shapeRendering="geometricPrecision"
                  textRendering="geometricPrecision"
                  imageRendering="optimizeQuality"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  viewBox="0 0
                                                                                                             640 640"
                  fill="currentColor"
                >
                  <path d="M557.133 561.704H442.128c-44.256 0-80.458-36.19-80.458-80.446 0-165.58-42.32-347.485 160.656-399.418 91.95-23.516 115.915 77.753 18.119 84.745-59.647 4.276-71.293 42.804-73.147 101.068h92.269c44.256 0 80.458 36.201 80.458 80.458v130.702c0 45.591-37.3 82.89-82.891 82.89zm-358.032 0H84.096c-44.256 0-80.446-36.19-80.446-80.446 0-165.58-42.331-347.485 160.644-399.418 91.95-23.516 115.915 77.753 18.118 84.745-59.646 4.276-71.292 42.804-73.146 101.068h92.269c44.256 0 80.457 36.201 80.457 80.458v130.702c0 45.591-37.3 82.89-82.89 82.89z" />
                </svg>
              </div>
              <div className="mt-2 text-primary">{t("testimonials2_text")}</div>
              <div>
                <div className="mx-auto my-8 w-full border border-primary"></div>
                <div className="flex items-center">
                  <div>
                    <Image
                      className="rounded-full border-2 border-primary"
                      width={45}
                      height={45}
                      src="/profile.svg"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="font-bold">{t("testimonials2_author")}</div>
                    <div className="mt-1 text-sm text-primary">
                      {t("testimonials2_location")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 flex max-w-sm flex-1 flex-col justify-between rounded-lg bg-gray-100 p-10 leading-snug text-gray-700 shadow">
              <div className="-ml-4">
                <svg
                  className="w-8 text-primary opacity-25"
                  xmlns="http://www.w3.org/2000/svg"
                  shapeRendering="geometricPrecision"
                  textRendering="geometricPrecision"
                  imageRendering="optimizeQuality"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  viewBox="0 0
                                                                                                             640 640"
                  fill="currentColor"
                >
                  <path d="M557.133 561.704H442.128c-44.256 0-80.458-36.19-80.458-80.446 0-165.58-42.32-347.485 160.656-399.418 91.95-23.516 115.915 77.753 18.119 84.745-59.647 4.276-71.293 42.804-73.147 101.068h92.269c44.256 0 80.458 36.201 80.458 80.458v130.702c0 45.591-37.3 82.89-82.891 82.89zm-358.032 0H84.096c-44.256 0-80.446-36.19-80.446-80.446 0-165.58-42.331-347.485 160.644-399.418 91.95-23.516 115.915 77.753 18.118 84.745-59.646 4.276-71.292 42.804-73.146 101.068h92.269c44.256 0 80.457 36.201 80.457 80.458v130.702c0 45.591-37.3 82.89-82.89 82.89z" />
                </svg>
              </div>
              <div className="mt-2 text-primary">{t("testimonials3_text")}</div>
              <div>
                <div className="mx-auto my-8 w-full border border-primary"></div>
                <div className="flex items-center">
                  <div>
                    <Image
                      className="rounded-full border-2 border-primary"
                      width={45}
                      height={45}
                      src="/profile.svg"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="font-bold">{t("testimonials3_author")}</div>
                    <div className="mt-1 text-sm text-primary">
                      {t("testimonials3_location")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
