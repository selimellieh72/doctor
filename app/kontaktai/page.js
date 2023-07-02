import Image from "next/image";
import Divider from "@/components/Divider";
import Link from "next/link";

export default function GyvuAsmenuTryimai() {
  return (
    <main>
      <section className="my-16">
        <div className="mx-auto  grid px-4 lg:grid-cols-12 lg:gap-8  xl:gap-0">
          <div className="place-self-center px-4 py-8 text-center lg:col-span-7  lg:mr-auto lg:px-16 lg:py-32 lg:text-left">
            <h1 className="mb-4 max-w-2xl text-5xl font-medium leading-normal tracking-wide text-secondary lg:leading-relaxed">
              Kontaktai
            </h1>
            <p className="mb-6 max-w-2xl font-light text-secondary md:text-lg lg:mb-8 lg:text-xl">
              Paslaugos teikiamos visoje Lietuvos Respublikoje.
            </p>
          </div>

          <div className="relative flex h-[400px]  md:mx-auto md:w-1/2  lg:col-span-5  lg:h-auto lg:w-full">
            <Image
              fill
              style={{ objectFit: "contain" }}
              className=" rounded-lg"
              src="/kontaktai.webp"
              alt="gregoire"
            />
          </div>
        </div>
      </section>
      <Divider />
      <section className="services my-16 space-y-8 px-4 lg:px-16">
        <div className="flex flex-col lg:flex-row">
          <div className="flex w-80 items-center justify-between">
            <span className="text-xl font-medium tracking-wide text-secondary">
              Tel.
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
              +370 640 36369
            </span>
          </div>
        </div>
        <hr className="border-secondary" />
        <div className="flex flex-col lg:flex-row">
          <div className="flex w-80 items-center justify-between">
            <span className="text-xl font-medium tracking-wide text-secondary">
              El. paštas
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
              teismomedicina.gac@gmail.com
            </span>
          </div>
        </div>
        <div className="contact-us pt-4 flex lg:space-x-4">
          <div className=" hidden lg:block w-2/5  bg-secondary px-4 py-10">
            <div className="flex w-44 items-center justify-between">
              <span className="text-xl font-medium tracking-wide text-primary">
                Susisiekite
              </span>
              <Image
                className="hidden lg:block"
                src="/arrow_right_circle_primary.svg"
                height={40}
                width={40}
              />
            </div>
          </div>
          <div className=" w-full ml-0  lg:w-3/5 bg-secondary py-10 text-primary">
          <span className="text-center table mb-8 mx-auto lg:hidden text-xl font-medium tracking-wide text-primary">
                Susisiekite
              </span>
            <form className=" mx-auto w-3/5">
              <div className="mb-4 w-full">
                <label className="font-medium " htmlFor="name">
                  Vardas *
                </label>
                <input
                  required
                  id="name"
                  className="mt-2 block h-10 w-full border-b focus:border hover:border border-primary bg-transparent p-4 outline-none invalid:border-red-700"
                ></input>
              </div>
              <div className="mb-4 w-full">
                <label className="font-medium " htmlFor="name">
                El. paštas *
                </label>
                <input
                  required
                  id="name"
                  className="mt-2 block h-10 w-full border-b focus:border hover:border border-primary bg-transparent p-4 outline-none invalid:border-red-700"
                ></input>
              </div>
              <div className="mb-4 w-full">
                <label className="font-medium " htmlFor="name">
                Tekstas
                </label>
                <input
                
                  id="name"
                  className="mt-2 block h-10 w-full border-b focus:border hover:border border-primary bg-transparent p-4 outline-none"
                ></input>
                  <button type="submit" href="/apie-mane" className="inline-flex items-center justify-center px-12 py-2 mr-3 text-base font-medium text-center text-secondary  bg-primary focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 rounded-xl mt-8 invalid:border-red-700">
                  Siųsti
                    
                </button>
              </div>
              
              
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
