import Image from "next/image"
import Divider from "@/components/Divider"
import Link from "next/link"

export default function GyvuAsmenuTryimai() {
  return (
    <main className="mx-auto px-4 lg:px-16">
      <section className="hero my-16 ">
        <div className="mx-auto  grid  lg:grid-cols-12 lg:gap-8  xl:gap-0">
          <div className="place-self-centerpy-8 text-center lg:col-span-7  lg:mr-auto lg:py-32 lg:text-left">
            <h1 className="max-w-2xl text-5xl font-medium leading-normal tracking-wide text-secondary lg:leading-relaxed">
              Gyvų asmenų teismo medicinos tyrimai
            </h1>
          </div>

          <div className="relative flex h-[400px]  md:mx-auto md:w-1/2  lg:col-span-5  lg:h-auto lg:w-full">
            <Image
              fill
              className="lg:object-right"
              style={{ objectFit: "contain" }}
              src="/gyvu-asmenu-tyrimai.jpeg"
              alt="gregoire"
            />
          </div>
        </div>
      </section>
      <Divider />
      <section className="services my-16 space-y-16 ">
        <div className="flex flex-col lg:flex-row">
          <div className="flex w-80 items-center justify-between">
            <span className="text-xl font-medium tracking-wide text-secondary">
              Konsultacijos ir tyrimai
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
              Paslaugos:
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
              <span>
                Konsultuoju visais gyvų asmenų teismo medicinos tyrimų
                klausimais
              </span>
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
              <span>
                Atlieku gyvų asmenų teismo medicinos apžiūrą (abdukciją) bei
                surašau specialisto išvadą
              </span>
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
              <span>
                Nustatau sužalojimus, sužalojimų padarymo būdą, sužalojimų
                padarymo laiką, sveikatos sutrikdymo mastą
              </span>
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
              <span>
                Atlieku gyvų asmenų medicininių dokumentų analizę bei surašau
                specialisto išvadą
              </span>
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
              <span>
                Atlieku gyvų asmenų kitų specialistų surašytų dokumentų analizę
              </span>
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
              <span>
                Konsultuoju klausimais, susijusiais su alkoholiu, girtumo
                laipsniais, girtumo arba blaivumo nustatymu, alkotesterio
                veikimo principais, alkotesterio parodymų patikimumu, kitais su
                alkoholiu kilusiais klausimais
              </span>
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
              <span>
                Konsultuoju klausimais, susijusiais su narkotinėmis medžiagomis,
                apsvaigimu, narkotinių medžiagų radimu kraujyje, šlapime, kitais
                su narkotinėmis medžiagomis kilusiais klausimais
              </span>
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
              <span>Konsultuoju gyvų asmenų lytinių būklių klausimais</span>
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
              <span>
                Konsultuoju klausimais, susijusiais su kūno subjaurojimu,
                randais ir kt.
              </span>
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
              <span>
                Konsultuoju klausimais, susijusiais su deontologiniais tyrimais.
              </span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  )
}
