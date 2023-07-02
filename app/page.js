import Image from "next/image";
import Divider from "@/components/Divider";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="hero my-16">
        <div className="mx-auto  grid px-4 lg:grid-cols-12 lg:gap-8  xl:gap-0">
          <div className="place-self-center px-4 py-8 text-center lg:col-span-7  lg:mr-auto lg:px-16 lg:py-32 lg:text-left">
            <h1 className="mb-4 max-w-2xl text-4xl font-medium leading-normal tracking-wide text-secondary lg:leading-relaxed">
              Profesionalios teismo medicinos paslaugos
            </h1>
            <p className="mb-6 max-w-2xl font-light text-secondary md:text-lg lg:mb-8 lg:text-xl">
              Konsultuoju visais gyvų ir mirusių asmenų teismo medicinos tyrimų
              klausimais bei juos atlieku.
            </p>
            <Link
              href="/apie-mane"
              className="focus:ring-primary-300 dark:focus:ring-primary-900 mr-3 inline-flex items-center justify-center rounded-lg bg-secondary px-5 py-3 text-center text-base font-medium text-primary focus:ring-4"
            >
              APIE MANE
              {/* <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg> */}
            </Link>

            {/* <p className="my-6 lg:my-8 lg:mr-6 font-semibold text-secondary  lines leading-8 text-justify">

Konsultuoju visais gyvų ir mirusių asmenų teismo medicinos tyrimų klausimais bei juos atlieku.
            </p> */}
          </div>

          <div className="relative flex h-[400px]  md:mx-auto md:w-1/2  lg:col-span-5  lg:h-auto lg:w-full">
            <Image
              fill
              style={{ objectFit: "contain" }}
       
              src="/welcome.jpg"
              alt="gregoire"
            />
          </div>
        </div>
      </section>
      <Divider />
      <section className="services my-16 space-y-4 px-4 lg:px-16">
        <div className="flex flex-col lg:flex-row">
          <div className="flex w-60 items-start justify-between">
            <span className="text-xl font-medium tracking-wide text-secondary">
              Paslaugos
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
              Konsultacijos ir tyrimai
            </span>
            <p className="mb-6 max-w-2xl font-light leading-relaxed text-secondary md:text-lg lg:mb-8 lg:text-xl">
              Konsultuoju visais gyvų ir mirusių asmenų teismo medicinos tyrimų
              klausimais bei juos atlieku.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 lg:flex-row">
          <div className="relative bottom-0 flex-1 bg-secondary p-10 text-xl font-medium leading-relaxed text-primary transition-all hover:bottom-4 hover:cursor-pointer">
          <Link href="/gyvu-asmenu-tyrimai">
            <Image
              className="mb-4"
              src="/forensic.svg"
              height={60}
              width={60}
            />
            Gyvų asmenų teismo medicinos <br /> konsultacijos ir tyrimai
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
            Mirusių asmenų teismo medicinos <br /> konsultacijos ir tyrimai
          </Link>
          </div>
        </div>
      </section>
      <Divider />
      <div className="relative  mx-4 my-16 text-gray-900 sm:rounded-lg lg:mx-16 ">
        <div className="hero-pattern absolute bottom-0 right-0 h-56 w-64"></div>
        <div className="relative">
          <div>
            <h2 className="text-center text-4xl font-bold leading-tight text-secondary lg:text-5xl">
              Atsiliepimai
            </h2>
            <div className="mx-auto my-4 h-2 w-12 border-4 border-secondary"></div>
            {/* <div className="text-center text-primary font-light">Here are what some of our amazing customers are
          saying ...</div> */}
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 ">
            <div className="relative mx-auto mt-8 flex max-w-sm flex-col justify-between rounded-lg bg-gray-100 p-10 leading-snug text-gray-700 shadow">
              <div className="-ml-4">
                <svg
                  className="w-8 text-primary opacity-25"
                  xmlns="http://www.w3.org/2000/svg"
                  shape-rendering="geometricPrecision"
                  text-rendering="geometricPrecision"
                  image-rendering="optimizeQuality"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  viewBox="0 0
                                                                                                             640 640"
                  fill="currentColor"
                >
                  <path d="M557.133 561.704H442.128c-44.256 0-80.458-36.19-80.458-80.446 0-165.58-42.32-347.485 160.656-399.418 91.95-23.516 115.915 77.753 18.119 84.745-59.647 4.276-71.293 42.804-73.147 101.068h92.269c44.256 0 80.458 36.201 80.458 80.458v130.702c0 45.591-37.3 82.89-82.891 82.89zm-358.032 0H84.096c-44.256 0-80.446-36.19-80.446-80.446 0-165.58-42.331-347.485 160.644-399.418 91.95-23.516 115.915 77.753 18.118 84.745-59.646 4.276-71.292 42.804-73.146 101.068h92.269c44.256 0 80.457 36.201 80.457 80.458v130.702c0 45.591-37.3 82.89-82.89 82.89z" />
                </svg>
              </div>
              <div className="mt-2 text-primary">
                Atsakingas, išmanantis, supratingas, nuoširdus, sąžiningas,
                atsidavęs specialistas. Šiltas žmogus. Mums pasisekė, kad mums
                rekomendavo konsultuotis su šiuo puiku specialistu. Gavome
                atsakymus į visus klausimus. Ačiū.
              </div>
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
                    <div className="font-bold">Ž. J.</div>
                    <div className="mt-1 text-sm text-primary">Jonavos r.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto mt-8 flex max-w-sm flex-col justify-between rounded-lg bg-gray-100 p-10 leading-snug text-gray-700 shadow">
              <div className="-ml-4">
                <svg
                  className="w-8 text-primary opacity-25"
                  xmlns="http://www.w3.org/2000/svg"
                  shape-rendering="geometricPrecision"
                  text-rendering="geometricPrecision"
                  image-rendering="optimizeQuality"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  viewBox="0 0
                                                                                                             640 640"
                  fill="currentColor"
                >
                  <path d="M557.133 561.704H442.128c-44.256 0-80.458-36.19-80.458-80.446 0-165.58-42.32-347.485 160.656-399.418 91.95-23.516 115.915 77.753 18.119 84.745-59.647 4.276-71.293 42.804-73.147 101.068h92.269c44.256 0 80.458 36.201 80.458 80.458v130.702c0 45.591-37.3 82.89-82.891 82.89zm-358.032 0H84.096c-44.256 0-80.446-36.19-80.446-80.446 0-165.58-42.331-347.485 160.644-399.418 91.95-23.516 115.915 77.753 18.118 84.745-59.646 4.276-71.292 42.804-73.146 101.068h92.269c44.256 0 80.457 36.201 80.457 80.458v130.702c0 45.591-37.3 82.89-82.89 82.89z" />
                </svg>
              </div>
              <div className="mt-2 text-primary">
                Labai vertiname Jūsų supratimą ir pagalbą dėl sužalojimo mirus
                mūsų artimajam. Vertinam galimybę suprasti, o ne nešti
                nežinomybės naštą. Ačiū už išsamią, suprantamą ir profesionalią
                konsultaciją.
              </div>
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
                    <div className="font-bold">K. M.</div>
                    <div className="mt-1 text-sm text-primary">Kauno r.</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto mt-8 flex max-w-sm flex-col justify-between rounded-lg bg-gray-100 p-10 leading-snug text-gray-700 shadow">
              <div className="-ml-4">
                <svg
                  className="w-8 text-primary opacity-25"
                  xmlns="http://www.w3.org/2000/svg"
                  shape-rendering="geometricPrecision"
                  text-rendering="geometricPrecision"
                  image-rendering="optimizeQuality"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  viewBox="0 0
                                                                                                             640 640"
                  fill="currentColor"
                >
                  <path d="M557.133 561.704H442.128c-44.256 0-80.458-36.19-80.458-80.446 0-165.58-42.32-347.485 160.656-399.418 91.95-23.516 115.915 77.753 18.119 84.745-59.647 4.276-71.293 42.804-73.147 101.068h92.269c44.256 0 80.458 36.201 80.458 80.458v130.702c0 45.591-37.3 82.89-82.891 82.89zm-358.032 0H84.096c-44.256 0-80.446-36.19-80.446-80.446 0-165.58-42.331-347.485 160.644-399.418 91.95-23.516 115.915 77.753 18.118 84.745-59.646 4.276-71.292 42.804-73.146 101.068h92.269c44.256 0 80.457 36.201 80.457 80.458v130.702c0 45.591-37.3 82.89-82.89 82.89z" />
                </svg>
              </div>
              <div className="mt-2 text-primary">
                Tiesą sakant, dar nebuvome susidūrę su gydytoju, kuriam taip
                rūpėjo. Esame dėkingi už konsultaciją.
              </div>
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
                    <div className="font-bold">R. D. ir M. D.</div>
                    <div className="mt-1 text-sm text-primary">Vilnius</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
