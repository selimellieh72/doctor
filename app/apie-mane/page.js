import Image from "next/image"

export const metadata = {
  title: "Apie Mane",
}

export default function ApiMane() {
  return (
    <main className="px-4 lg:px-16">
      <section className="hero mx-auto my-16 ">
        <div className=" grid lg:grid-cols-12 lg:gap-8  xl:gap-0">
          <div className="place-self-center text-center lg:col-span-7  lg:mr-auto lg:text-left">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-secondary  ">
              Gregoire ABI CHAKER
            </h1>
            <p className="mb-6 max-w-2xl font-light text-secondary md:text-lg lg:mb-8 lg:text-xl">
              Teismo medicinos ekspertas, gydytojas, turintis daugiau nei 20
              metų patirties.
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
            <p className="lines my-6 text-justify font-semibold leading-8  text-secondary lg:my-8 lg:mr-6">
              Teismo medicinos gydytojas{" "}
              <span className=" text-bold">Gregoire ABI CHAKER</span> yra
              nepriklausomas teismo medicinos ekspertas, privatus teismo
              ekspertas (įtrauktas į Lietuvos Respublikos teismo ekspertų sąrašą{" "}
              <a className=" text-blue-400" href="https://shorturl.at/aLST5">
                https://shorturl.at/aLST5
              </a>
              ), turintis aukštąjį universitetinį medicininį išsilavinimą,
              teismo medicinos gydytojo specialybę, kvalifikaciją atlikti gyvų
              ir mirusių asmenų tyrimus, teismo medicinos gydytojo licenciją
              (Nr. MPL-09604). Darbo teismo medicinos srityje stažas nuo 1999
              metų.
              <br />
              Nepriklausomas teismo medicinos ekspertas konsultuoja visais
              teismo medicinos klausimais bei pateikia konsultacines išvadas
              (specialisto išvadas). Ekspertas yra kompetentingas, jo specialios
              žinios yra pagrįstos ilgamete darbo praktika, pasaulinės mokslinės
              literatūros, objektyvumo, supratingumo bei atidumo principais.
              Teismo medicinos gydytojas turi daugiau nei 20 metų darbo
              patirties Lietuvoje teismo medicinos srityje. Yra atlikęs daugiau
              nei 3 000 mirusiųjų tyrimų (autopsijų) bei daugiau nei 5 000 gyvų
              asmenų tyrimų.
            </p>
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
