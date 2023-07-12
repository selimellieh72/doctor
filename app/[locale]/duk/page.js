import Image from "next/image"
import Divider from "@/components/Divider"
import Link from "next/link"
import { useTranslations } from "next-intl"
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

export default function DUK() {
  const t = useTranslations("DUK")

  return (
    <main className="mx-auto px-4 lg:px-16">
      <section className="hero my-16">
        <div className="mx-auto  grid lg:grid-cols-12 lg:gap-8  xl:gap-0">
          <div className="place-self-center py-8 text-center lg:col-span-7  lg:mr-auto lg:py-32 lg:text-left">
            <h1 className="mb-4 max-w-2xl text-5xl font-medium leading-normal tracking-wide text-secondary lg:leading-relaxed">
              {t("title")}
            </h1>
          </div>

          <div className="relative flex h-[400px]  md:mx-auto md:w-1/2  lg:col-span-5  lg:h-auto lg:w-full">
            <Image
              fill
              className="lg:object-right"
              style={{ objectFit: "contain" }}
              src="/duk.jpg"
              alt="gregoire"
            />
          </div>
        </div>
      </section>
      <Divider />
      <section className="services my-16 space-y-16 px-4 text-secondary lg:px-16">
        <div className=" mx-auto flex flex-col justify-center">
          <h2 className="text-center text-2xl font-semibold lg:text-start lg:text-4xl">
            {t("questions")}
          </h2>
          <p className="mb-8 mt-4 dark:text-gray-400">
            {/* Sagittis tempor donec id vestibulum viverra. Neque condimentum
            primis orci at lacus amet bibendum. */}
          </p>
          <div className="space-y-4">
            <details className="w-full rounded-lg border border-secondary">
              <summary className="focus-visible:ri px-4 py-6 hover:cursor-pointer focus:outline-none">
                {t("question1")}
              </summary>
              <p className="-mt-4 ml-4 px-4 py-6 pt-0 dark:text-gray-400">
                {t("answer1")}
              </p>
            </details>
            <details
              className="w-full rounded-lg border border-secondary"
              open=""
            >
              <summary className="focus-visible:ri px-4 py-6 hover:cursor-pointer focus:outline-none">
                {t("question2")}
              </summary>
              <p className="-mt-4 ml-4 px-4 py-6 pt-0 dark:text-gray-400">
                {t("answer2")}
              </p>
            </details>
            <details
              className="w-full rounded-lg border border-secondary"
              open=""
            >
              <summary className="focus-visible:ri px-4 py-6 hover:cursor-pointer focus:outline-none">
                {t("question3")}
              </summary>
              <p className="-mt-4 ml-4 px-4 py-6 pt-0 dark:text-gray-400">
                {t("answer3")}
              </p>
            </details>
            <details
              className="w-full rounded-lg border border-secondary"
              open=""
            >
              <summary className="focus-visible:ri px-4 py-6 hover:cursor-pointer focus:outline-none">
                {t("question4")}
              </summary>
              <p className="-mt-4 ml-4 px-4 py-6 pt-0 dark:text-gray-400">
                {t("answer4")}
              </p>
            </details>
            <details
              className="w-full rounded-lg border border-secondary"
              open=""
            >
              <summary className="focus-visible:ri px-4 py-6 hover:cursor-pointer focus:outline-none">
                {t("question5")}
              </summary>
              <p className="-mt-4 ml-4 px-4 py-6 pt-0 dark:text-gray-400">
                {t("answer5")}
              </p>
            </details>
            <details
              className="w-full rounded-lg border border-secondary"
              open=""
            >
              <summary className="focus-visible:ri px-4 py-6 hover:cursor-pointer focus:outline-none">
                {t("question6")}
              </summary>
              <p className="-mt-4 ml-4 px-4 py-6 pt-0 dark:text-gray-400">
                {t("answer6")}
              </p>
            </details>
            <details
              className="w-full rounded-lg border border-secondary"
              open=""
            >
              <summary className="focus-visible:ri px-4 py-6 hover:cursor-pointer focus:outline-none">
                {t("question7")}
              </summary>
              <p className="-mt-4 ml-4 px-4 py-6 pt-0 dark:text-gray-400">
                {t("answer7")}
              </p>
            </details>
            <details
              className="w-full rounded-lg border border-secondary"
              open=""
            >
              <summary className="focus-visible:ri px-4 py-6 hover:cursor-pointer focus:outline-none">
                {t("question8")}
              </summary>
              <p className="-mt-4 ml-4 px-4 py-6 pt-0 dark:text-gray-400">
                {t("answer8")}
              </p>
            </details>
            <details
              className="w-full rounded-lg border border-secondary"
              open=""
            >
              <summary className="focus-visible:ri px-4 py-6 hover:cursor-pointer focus:outline-none">
                {t("question9")}
              </summary>
              <p className="-mt-4 ml-4 px-4 py-6 pt-0 dark:text-gray-400">
                {t("answer9")}
              </p>
            </details>
            <details
              className="w-full rounded-lg border border-secondary"
              open=""
            >
              <summary className="focus-visible:ri px-4 py-6 hover:cursor-pointer focus:outline-none">
                {t("question10")}
              </summary>
              <p className="-mt-4 ml-4 px-4 py-6 pt-0 dark:text-gray-400">
                {t("answer10")}
              </p>
            </details>
          </div>
        </div>
      </section>
    </main>
  )
}
