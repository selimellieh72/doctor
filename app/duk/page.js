import Image from "next/image";
import Divider from "@/components/Divider";
import Link from "next/link";

export default function MirusiuAsmenuTyrimai() {
  return (
    <main>
      <section className="hero my-16">
        <div className="mx-auto  grid px-4 lg:grid-cols-12 lg:gap-8  xl:gap-0">
          <div className="place-self-center px-4 py-8 text-center lg:col-span-7  lg:mr-auto lg:px-16 lg:py-32 lg:text-left">
            <h1 className="mb-4 max-w-2xl text-5xl font-medium leading-normal tracking-wide text-secondary lg:leading-relaxed">
              Dažniausiai užduodami klausimai (DUK)
            </h1>
          </div>

          <div className="relative flex h-[400px]  md:mx-auto md:w-1/2  lg:col-span-5  lg:h-auto lg:w-full">
            <Image
              fill
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
          <h2 className="text-2xl text-center lg:text-start lg:text-4xl font-semibold">
Klausimai
          </h2>
          <p className="mb-8 mt-4 dark:text-gray-400">
            {/* Sagittis tempor donec id vestibulum viverra. Neque condimentum
            primis orci at lacus amet bibendum. */}
          </p>
          <div className="space-y-4">
            <details className="w-full rounded-lg border border-secondary">
              <summary className="focus-visible:ri px-4 py-6 focus:outline-none hover:cursor-pointer">
              Ar konsultacijos vyksta ir išvados teikiamos lietuvių kalba?
              </summary>
              <p className="-mt-4 ml-4 px-4 py-6 pt-0 dark:text-gray-400">
              Konsultacijos bei visi pateikiami dokumentai klientams yra lietuvių kalba.
              </p>
            </details>
            <details className="w-full rounded-lg border border-secondary" open="">
              <summary className="focus-visible:ri px-4 py-6 focus:outline-none hover:cursor-pointer">
              Kur vyksta konsultacijos?
              </summary>
              <p className="-mt-4 ml-4 px-4 py-6 pt-0 dark:text-gray-400">
              Dėl konsultacijos prašome susiekti nurodytais kontaktais. Abipusiai priimtinas laikas ir vieta yra suderinami individualiai. 
              </p>
            </details>
            <details className="w-full rounded-lg border border-secondary" open="">
              <summary className="focus-visible:ri px-4 py-6 focus:outline-none hover:cursor-pointer">
              Kokios paslaugų kainos? 
              </summary>
              <p className="-mt-4 ml-4 px-4 py-6 pt-0 dark:text-gray-400">
              Paslaugų kaina yra sutartinė – nustatoma, atsižvelgiant į konkretų atvejį ir jo aplinkybes. 
              </p>
            </details>
            <details className="w-full rounded-lg border border-secondary" open="">
              <summary className="focus-visible:ri px-4 py-6 focus:outline-none hover:cursor-pointer">
              Kuo naudingos nepriklausomo teismo medicinos eksperto paslaugos?
              </summary>
              <p className="-mt-4 ml-4 px-4 py-6 pt-0 dark:text-gray-400">
              Nepriklausomo teismo medicinos eksperto Gregoire Abi Chaker konsultacijos padeda asmenims, jų artimiesiems, advokatams suprasti jų konkretaus atvejo teismo medicinos aspektus.
              </p>
            </details>
            <details className="w-full rounded-lg border border-secondary" open="">
              <summary className="focus-visible:ri px-4 py-6 focus:outline-none hover:cursor-pointer">
              Kokios konsultacijos (paslaugos), susijusios su gyvais asmenimis, yra teikiamos?
              </summary>
              <p className="-mt-4 ml-4 px-4 py-6 pt-0 dark:text-gray-400">
              Konsultacijos metu bei atlikdamas gyvų asmenų teismo medicinos tyrimus nepriklausomas teismo medicinos ekspertas Gregoire Abi Chaker gali atsakyti į klausimus, susijusius su sužalojimais, sužalojimų padarymo būdu (traumos mechanizmu, panaudota jėga, kt.), sužalojimų padarymo laiku, sveikatos sutrikdymo mastu. 
Konsultacijos metu bei atlikdamas gyvų asmenų teismo medicinos tyrimus nepriklausomas teismo medicinos ekspertas Gregoire Abi Chaker gali taip pat atsakyti į klausimus: ar po gydymo pabaigos gali keistis sveikatos sutrikdymo mastas? Ar dėl traumos patirtos sveikatos būklės pasekmės (sužalojimų liekamieji reiškiniai) gali keistis sveikatos sutrikdymo mastas? Ar visada trauma palieka žymių? Kokiais atvejais trauma gali nepalikti žymių? Ar visi sužalojimai sukelia skausmą? Po kiek laiko po traumos gali atsirasti skausmas? Kokiais atvejais asmuo gali nejausti skausmo? Ar skausmas gali atsirasti tik dėl traumos, ar ir dėl kitų priežasčių? Bei į kitus klausimus, reikalaujančius specialiųjų žinių.
              </p>
            </details>
            <details className="w-full rounded-lg border border-secondary" open="">
              <summary className="focus-visible:ri px-4 py-6 focus:outline-none hover:cursor-pointer">
              Ar teikiamos konsultacijos, susijusios su įtariamu lytiniu nusikaltimu?
              </summary>
              <p className="-mt-4 ml-4 px-4 py-6 pt-0 dark:text-gray-400">
              Konsultacijos metu bei atlikdamas gyvų asmenų teismo medicinos tyrimus nepriklausomas teismo medicinos ekspertas Gregoire Abi Chaker gali atsakyti į klausimus, susijusius su įtariamu lytiniu nusikaltimu (išžaginimu ir kt.). 
              </p>
            </details>
            <details className="w-full rounded-lg border border-secondary" open="">
              <summary className="focus-visible:ri px-4 py-6 focus:outline-none hover:cursor-pointer">
              Ar teikiamos konsultacijos, susijusios su kūno subjaurojimu, randais ir pan.?
              </summary>
              <p className="-mt-4 ml-4 px-4 py-6 pt-0 dark:text-gray-400">
              Nepriklausomas teismo medicinos ekspertas Gregoire Abi Chaker taip pat konsultuoja klausimais, susijusiais su nepataisomu kūno subjaurojimu, randais – jų padarymo būdu, jų padarymo laiku, kokį sveikatos sutrikdymo mastą jie atitinka, kokia jų pašalinimo galimybė. 
              </p>
            </details>
            <details className="w-full rounded-lg border border-secondary" open="">
              <summary className="focus-visible:ri px-4 py-6 focus:outline-none hover:cursor-pointer">
              Kokios konsultacijos (paslaugos), susijusios su mirusiais asmenimis, yra teikiamos? 
              </summary>
              <p className="-mt-4 ml-4 px-4 py-6 pt-0 dark:text-gray-400">
              Konsultacijos metu bei atlikdamas mirusiųjų asmenų teismo medicinos tyrimus nepriklausomas teismo medicinos ekspertas Gregoire Abi Chaker gali atsakyti į klausimus, susijusius su mirties priežastimi, mirties laiku, kūno sužalojimais – sužalojimų padarymo būdu (mechanizmu), sužalojimų padarymo laiku, sveikatos sutrikdymo mastu. 
Konsultacijos metu bei atlikdamas mirusiųjų asmenų teismo medicinos tyrimus nepriklausomas teismo medicinos ekspertas Gregoire Abi Chaker gali taip pat atsakyti į kitus klausimus, susijusius kūne nustatytų sužalojimų įtaka mirčiai, ar artimasis patyrė skausmą prieš mirtį, ar mirtis buvo greita, ar buvo įmanoma išgelbėti gyvybę, jei pagalba būtų suteikta laiku, ar gydymas buvo tinkamas ir (ar) gydymas bei gydymo trūkumai neturėjo įtakos mirčiai, ar mirusiojo kūne yra alkoholis ir (arba) kitos narkotinės medžiagos, bei ar tai turėjo įtakos mirčiai. Nepriklausomas teismo medicinos ekspertas Gregoire Abi Chaker gali atsakyti ir į kitus klausimus, susijusius su mirusiųjų tyrimais.
              </p>
            </details>
            <details className="w-full rounded-lg border border-secondary" open="">
              <summary className="focus-visible:ri px-4 py-6 focus:outline-none hover:cursor-pointer">
              Ar galite išduoti (išrašyti) mirties liudijimą?
              </summary>
              <p className="-mt-4 ml-4 px-4 py-6 pt-0 dark:text-gray-400">
              Kai miršta artimas žmogus, šeimos gydytojas gali dėl įvairių priežasčių atsisakyti išduoti medicininį mirties liudijimą. Tokiais ir kitais atvejais, nepriklausomas teismo medicinos ekspertas Gregoire Abi Chaker gali suteikti pagalbą, išrašyti medicininį mirties liudijimą.
              </p>
            </details>
            <details className="w-full rounded-lg border border-secondary" open="">
              <summary className="focus-visible:ri px-4 py-6 focus:outline-none hover:cursor-pointer">
              Kokios konsultacijos (paslaugos), susijusios su alkoholiu, girtumu, alkotesteriu ir reikalaujančios specialiųjų žinių, yra teikiamos?
              </summary>
              <p className="-mt-4 ml-4 px-4 py-6 pt-0 dark:text-gray-400">
              Nepriklausomas teismo medicinos ekspertas Gregoire Abi Chaker konsultuoja visais klausimais susijusiais su alkoholiu: ar asmuo vairavimo metu buvo blaivus? Ar asmuo vairavimo metu buvo neblaivus? Ar alkotesterio parodymai tikslūs? Koks galėjo būti girtumo laipsnis? Nepriklausomas teismo medicinos ekspertas Gregoire Abi Chaker gali atsakyti ir į kitus su alkoholiu susijusius klausimus, reikalaujančius specialiųjų žinių.
              </p>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
