import Image from "next/image"
import Divider from "@/components/Divider"
import Link from "next/link"


export default function Home() {



  return (
   <main>
        <section className="hero my-16">
        <div className="grid  px-4 mx-auto lg:gap-8 xl:gap-0  lg:grid-cols-12">
            <div className="text-center lg:mr-auto lg:text-left px-4 lg:px-16  py-8 lg:py-32 place-self-center lg:col-span-7">
                <h1 className="max-w-2xl text-secondary mb-4 text-4xl tracking-wide leading-normal lg:leading-relaxed font-medium">
Profesionalios teismo medicinos paslaugos</h1>
                <p className="max-w-2xl mb-6 font-light text-secondary lg:mb-8 md:text-lg lg:text-xl">Konsultuoju visais gyvų ir mirusių asmenų teismo medicinos tyrimų klausimais bei juos atlieku.</p>
                <Link href="/apie-mane" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-primary rounded-lg bg-secondary focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                    APIE MANE
                    {/* <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> */}
                </Link>
                  
                {/* <p className="my-6 lg:my-8 lg:mr-6 font-semibold text-secondary  lines leading-8 text-justify">

Konsultuoju visais gyvų ir mirusių asmenų teismo medicinos tyrimų klausimais bei juos atlieku.
            </p> */}
            
            </div>
            
            <div className="flex h-[400px] lg:h-auto  md:w-1/2 md:mx-auto  lg:w-full  lg:col-span-5 relative">
                <Image fill style={{objectFit: 'contain'}} className=" rounded-lg" src="/welcome.jpg" alt="gregoire"/>
            </div>                
        </div>
    </section>
            <Divider/>
   <section className="services my-16 px-4 lg:px-16 space-y-4">
            <div className="flex flex-col lg:flex-row">
            <div className="flex w-60 justify-between items-start">
                <span className="text-secondary text-xl tracking-wide font-medium">Paslaugos</span>
                <Image className="hidden lg:block" src="/arrow_right_circle.svg" height={40} width={40}/>
            </div>
            <div className="flex-1 flex flex-col gap-2 justify-center items-start lg:items-center">
                <span className="text-secondary text-xl tracking-wide font-medium">Konsultacijos ir tyrimai</span>
                <p className="max-w-2xl mb-6 font-light text-secondary lg:mb-8 md:text-lg lg:text-xl leading-relaxed">Konsultuoju visais gyvų ir mirusių asmenų teismo medicinos tyrimų klausimais bei juos atlieku.</p>
            </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-2">
               
                <div className="flex-1 bg-secondary text-primary p-10 font-medium text-xl leading-relaxed hover:cursor-pointer relative bottom-0 hover:bottom-4 transition-all">
                <Image className="mb-4" src="/forensic.svg" height={60} width={60}/>
Gyvų asmenų teismo medicinos <br/> konsultacijos ir tyrimai</div>
<div className="flex-1 bg-secondary text-primary p-10 font-medium text-xl leading-relaxed hover:cursor-pointer relative bottom-0 hover:bottom-4 transition-all">
                <Image className="mb-4" src="/deceased.svg" height={60} width={60}/>

                Mirusių asmenų teismo medicinos <br/> konsultacijos ir tyrimai</div>
           
            </div>
            
   </section>
   <Divider/>
   <div class="relative  mx-4 lg:mx-16 my-16 text-gray-900 sm:rounded-lg ">
    <div class="absolute right-0 bottom-0 hero-pattern w-64 h-56"></div>
    <div class="relative">
      <div>
        <h2 class="text-center text-secondary text-4xl lg:text-5xl font-bold leading-tight">
Atsiliepimai</h2>
        <div class="my-4 mx-auto w-12 h-2 border-4 border-secondary"></div>
        {/* <div class="text-center text-primary font-light">Here are what some of our amazing customers are
          saying ...</div> */}
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
        <div class="relative mx-auto mt-8 rounded-lg shadow max-w-sm p-10 bg-gray-100 text-gray-700 leading-snug flex flex-col justify-between">
          <div class="-ml-4">
            <svg class="w-8 opacity-25 text-primary" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0
                                                                                                             640 640" fill="currentColor">
              <path d="M557.133 561.704H442.128c-44.256 0-80.458-36.19-80.458-80.446 0-165.58-42.32-347.485 160.656-399.418 91.95-23.516 115.915 77.753 18.119 84.745-59.647 4.276-71.293 42.804-73.147 101.068h92.269c44.256 0 80.458 36.201 80.458 80.458v130.702c0 45.591-37.3 82.89-82.891 82.89zm-358.032 0H84.096c-44.256 0-80.446-36.19-80.446-80.446 0-165.58-42.331-347.485 160.644-399.418 91.95-23.516 115.915 77.753 18.118 84.745-59.646 4.276-71.292 42.804-73.146 101.068h92.269c44.256 0 80.457 36.201 80.457 80.458v130.702c0 45.591-37.3 82.89-82.89 82.89z" />
            </svg>
          </div>
          <div class="mt-2 text-primary">
          Atsakingas, išmanantis, supratingas, nuoširdus, sąžiningas, atsidavęs specialistas. Šiltas žmogus. Mums pasisekė, kad mums rekomendavo konsultuotis su šiuo puiku specialistu. Gavome atsakymus į visus klausimus. Ačiū
          </div>
          <div>
            <div class="mx-auto w-full border border-primary my-8"></div>
            <div class="flex items-center">
              <div>
              <Image class="rounded-full border-2 border-primary" width={45} height={45} src="/profile.svg"/>
              </div>
              <div class="ml-4">
                <div class="font-bold">Ž. J.</div>
                <div class="text-sm text-primary mt-1">Jonavos raj</div>
              </div>
            </div>
          </div>
        </div>
        <div class="mx-auto mt-8 rounded-lg shadow max-w-sm p-10 bg-gray-100 text-gray-700 leading-snug flex flex-col justify-between">
          <div class="-ml-4">
            <svg class="w-8 opacity-25 text-primary" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0
                                                                                                             640 640" fill="currentColor">
              <path d="M557.133 561.704H442.128c-44.256 0-80.458-36.19-80.458-80.446 0-165.58-42.32-347.485 160.656-399.418 91.95-23.516 115.915 77.753 18.119 84.745-59.647 4.276-71.293 42.804-73.147 101.068h92.269c44.256 0 80.458 36.201 80.458 80.458v130.702c0 45.591-37.3 82.89-82.891 82.89zm-358.032 0H84.096c-44.256 0-80.446-36.19-80.446-80.446 0-165.58-42.331-347.485 160.644-399.418 91.95-23.516 115.915 77.753 18.118 84.745-59.646 4.276-71.292 42.804-73.146 101.068h92.269c44.256 0 80.457 36.201 80.457 80.458v130.702c0 45.591-37.3 82.89-82.89 82.89z" />
            </svg>
          </div>
          <div class="mt-2 text-primary">
            
Labai vertiname Jūsų supratimą ir pagalbą dėl sužalojimo mirus mūsų artimajam. Vertinam galimybę suprasti, o ne nešti nežinomybės naštą. Ačiū už išsamią, suprantamą ir profesionalią konsultaciją.
          </div>
          <div>
            <div class="mx-auto w-full border border-primary my-8"></div>
            <div class="flex items-center">
              <div>
                <Image class="rounded-full border-2 border-primary" width={45} height={45} src="/profile.svg"/>
              </div>
              <div class="ml-4">
                <div class="font-bold">K. M.</div>
                <div class="text-sm text-primary mt-1">Kauno raj  </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mx-auto mt-8 rounded-lg shadow max-w-sm p-10 bg-gray-100 text-gray-700 leading-snug flex flex-col justify-between">
          <div class="-ml-4">
            <svg class="w-8 opacity-25 text-primary" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0
                                                                                                             640 640" fill="currentColor">
              <path d="M557.133 561.704H442.128c-44.256 0-80.458-36.19-80.458-80.446 0-165.58-42.32-347.485 160.656-399.418 91.95-23.516 115.915 77.753 18.119 84.745-59.647 4.276-71.293 42.804-73.147 101.068h92.269c44.256 0 80.458 36.201 80.458 80.458v130.702c0 45.591-37.3 82.89-82.891 82.89zm-358.032 0H84.096c-44.256 0-80.446-36.19-80.446-80.446 0-165.58-42.331-347.485 160.644-399.418 91.95-23.516 115.915 77.753 18.118 84.745-59.646 4.276-71.292 42.804-73.146 101.068h92.269c44.256 0 80.457 36.201 80.457 80.458v130.702c0 45.591-37.3 82.89-82.89 82.89z" />
            </svg>
          </div>
          <div class="mt-2 text-primary">
            
          Tiesą sakant, dar nebuvome susidūrę su gydytoju, kuriam taip rūpėjo. Esame dėkingi už konsultaciją. 
          </div>
          <div>
            <div class="mx-auto w-full border border-primary my-8"></div>
            <div class="flex items-center">
              <div>
              <Image class="rounded-full border-2 border-primary" width={45} height={45} src="/profile.svg"/>
              </div>
              <div class="ml-4">
                <div class="font-bold">R. D.  ir M. D.</div>
                <div class="text-sm text-primary mt-1">Vilnius</div>
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
