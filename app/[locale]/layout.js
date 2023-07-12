import "./globals.css"
import { Inter } from "next/font/google"
import { NextIntlClientProvider, useLocale } from "next-intl"
import Head from "next/head"
import { notFound } from "next/navigation"

import Header from "@/components/Header"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Gregoire ABI CHAKER",
  description: "Gregoire ABI CHAKER",
  keywords: ["Hello", "World"],
}

export default async function RootLayout({ children, params }) {
  const locale = useLocale()

  let messages
  try {
    messages = (await import(`../../messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound()
  }
  return (
    <html lang={locale}>
      <head>
        <meta name="robots" content="follow, index" />
      </head>
      <body className={`${inter.className} bg-primary`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
