import ScrollAnimation from 'react-animate-on-scroll';


export default function Home() {



  return (
   <main>
      
   
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
    <ScrollAnimation animateIn="fadeIn">
  Some Text
</ScrollAnimation>
     </main>
  )
}
