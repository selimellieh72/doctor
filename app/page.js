


export default function Home() {



  return (
   <main>
        <section className="hero my-8">
        <div className="grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0  lg:grid-cols-12">
            <div className="text-center lg:mr-auto lg:text-left  place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Gregoire Abi Chaker</h1>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Teismo medicinos ekspertas, gydytojas, turintis daugiau nei 20 metų patirties.</p>
                {/* <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-primary rounded-lg bg-secondary focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                    Get started
                    <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a> */}
            
            </div>
            <div className="flex shadow md:w-1/2 md:mx-auto  lg:w-full  lg:col-span-5">
                <img className=" rounded-lg" src="/1.webp" alt="gregoire"/>
            </div>                
        </div>
    </section>
   
    <div className=" text-center">
        <span className=" rounded-full w-4 h-4 bg-secondary inline-block mx-1"/>
        <span className=" rounded-full w-4 h-4 bg-secondary inline-block mx-1"/>
        <span className=" rounded-full w-4 h-4 bg-secondary inline-block mx-1"/>
        </div>
    <section className="about my-8">
        <div className=" text-center text-white font-bold text-4xl">
            <h2>
Apie mane</h2>
        </div>
        <div>
            <p className=" font-light text-gray-400 py-4 px-4 lg:px-16 text-center">

Teismo medicinos gydytojas <span className=" text-bold">Gregoire ABI CHAKER</span> yra nepriklausomas teismo medicinos ekspertas, privatus teismo ekspertas (įtrauktas į Lietuvos Respublikos teismo ekspertų sąrašą <a className=" text-blue-400" href="https://shorturl.at/aLST5">https://shorturl.at/aLST5</a>), turintis aukštąjį universitetinį medicininį išsilavinimą, teismo medicinos gydytojo specialybę, kvalifikaciją atlikti gyvų ir mirusių asmenų tyrimus, teismo medicinos gydytojo licenciją (Nr. MPL-09604). Darbo teismo medicinos srityje stažas nuo 1999 metų.
Nepriklausomas teismo medicinos ekspertas konsultuoja visais teismo medicinos klausimais bei pateikia konsultacines išvadas (specialisto išvadas). Ekspertas yra kompetentingas, jo specialios žinios yra pagrįstos ilgamete darbo praktika, pasaulinės mokslinės literatūros, objektyvumo, supratingumo bei atidumo principais. Teismo medicinos gydytojas turi daugiau nei 20 metų darbo patirties Lietuvoje teismo medicinos srityje. Yra atlikęs daugiau nei 3 000 mirusiųjų tyrimų (autopsijų) bei daugiau nei 1 000 gyvų asmenų tyrimų.
            </p>
        </div>
        

    </section>
     </main>
  )
}
