import createMiddleware from "next-intl/middleware"

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "lt"],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: "lt",
  // prevent auto locale detection
  localeDetection: false,
  localePrefix: "always",
})

export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  matcher: ["/((?!api(?!e-mane)|_next|.*\\..*).*)"],
}
