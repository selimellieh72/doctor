import Image from "next/image"


export default function Home() {



  return (
   <main>
        <section className="hero my-16">
        <div className="grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0  lg:grid-cols-12">
            <div className="text-center lg:mr-auto lg:text-left  place-self-center lg:col-span-7">
                <h1 className="max-w-2xl text-secondary mb-4 text-4xl font-extrabold tracking-tight leading-none  ">Gregoire ABI CHAKER</h1>
                <p className="max-w-2xl mb-6 font-light text-secondary lg:mb-8 md:text-lg lg:text-xl">Teismo medicinos ekspertas, gydytojas, turintis daugiau nei 20 metų patirties.</p>
                {/* <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-primary rounded-lg bg-secondary focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                    Get started
                    <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a> */}
                    {/* <div className=" text-center">
        <span className=" rounded-full w-4 h-4 bg-secondary inline-block mx-1"/>
        <span className=" rounded-full w-4 h-4 bg-secondary inline-block mx-1"/>
        <span className=" rounded-full w-4 h-4 bg-secondary inline-block mx-1"/>
        </div> */}
                <p className="my-6 lg:my-8 lg:mr-6 font-semibold text-secondary  lines leading-8 text-justify">

Teismo medicinos gydytojas <span className=" text-bold">Gregoire ABI CHAKER</span> yra nepriklausomas teismo medicinos ekspertas, privatus teismo ekspertas (įtrauktas į Lietuvos Respublikos teismo ekspertų sąrašą <a className=" text-blue-400" href="https://shorturl.at/aLST5">https://shorturl.at/aLST5</a>), turintis aukštąjį universitetinį medicininį išsilavinimą, teismo medicinos gydytojo specialybę, kvalifikaciją atlikti gyvų ir mirusių asmenų tyrimus, teismo medicinos gydytojo licenciją (Nr. MPL-09604). Darbo teismo medicinos srityje stažas nuo 1999 metų.
<br/>Nepriklausomas teismo medicinos ekspertas konsultuoja visais teismo medicinos klausimais bei pateikia konsultacines išvadas (specialisto išvadas). Ekspertas yra kompetentingas, jo specialios žinios yra pagrįstos ilgamete darbo praktika, pasaulinės mokslinės literatūros, objektyvumo, supratingumo bei atidumo principais. Teismo medicinos gydytojas turi daugiau nei 20 metų darbo patirties Lietuvoje teismo medicinos srityje. Yra atlikęs daugiau nei 3 000 mirusiųjų tyrimų (autopsijų) bei daugiau nei 5 000 gyvų asmenų tyrimų.
            </p>
            
            </div>
            
            <div className="flex h-[400px] lg:h-auto shadow md:w-1/2 md:mx-auto  lg:w-full  lg:col-span-5 relative">
                <Image fill style={{objectFit: 'contain'}} className=" rounded-lg" src="/Apie mane.jpg" alt="gregoire"/>
            </div>                
        </div>
    </section>
   

   
     </main>
  )
}
