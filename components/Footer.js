import Image from "next/image"
export default function Footer() {
    return  <footer class="bg-secondary shadow absolute bottom-0 w-full">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div class="sm:flex sm:items-center sm:justify-between">
                <a href="#" class="flex items-center mb-4 sm:mb-0">
                <Image class="mr-3" src="/heart_pulse_dark.svg" height={35} width={35} alt="Heart pump image" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap text-primary">Gregoire ABI CHAKER</span>
                </a>
                <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-primary sm:mb-0">
                    <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 "><Image class="mr-3" src="/facebook_icon.svg" height={35} width={35} alt="Heart pump image" /></a>
                    </li>
                    <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 "><Image class="mr-3" src="/linkedin_icon.svg" height={35} width={35} alt="Heart pump image" /></a>
                    </li>

                </ul>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span class="flex items-center align text-sm text-primary sm:text-center">Tel: +370 640 36369. El. paštas: teismomedicina.gac@gmail.com</span>
        </div>
    </footer>
    
    
}