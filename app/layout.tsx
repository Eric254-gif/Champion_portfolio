import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme/theme-provider"
import { ThemeToggle } from "@/components/theme/theme-toggle"
import Script from "next/script"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

// Enhanced metadata for better SEO
export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.vercel.app"),
  title: "Eric Musembi | IT Practitioner & Web Developer",
  description:
    "Portfolio of Eric Musembi, a certified IT Personnel, IT Practitioner, Cloud Practitioner, Web Developer, and App Developer based in Kenya. View my projects, skills, and experience.",
  keywords: [
    "Eric Musembi ",
    "IT Practitioner",
    "Musembi Eric",
    "Cloud Engineer",
    "Web Developer",
    "Kenya Developer",
    "App Developer",
    "UI/UX Designer",
    "Photography",
  ],
  authors: [{ name: "Eric Musembi" }],
  creator: "Eric Musembi",
  icons: {
  icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.vercel.app",
    title: "Eric Musembi | IT Practitioner & Web Developer",
    description:
      "Portfolio of Eric Musembi, a certified IT Personnel, Cloud Practitioner, Web Developer, and App Developer based in Kenya.",
    siteName: "Eric Musembi Portfolio",
    images: [
      {
        url: "/Profile.jpg", // Create this image and replace with actual path
        width: 1200,
        height: 630,
        alt: "Eric Musembi Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eric Musembi | Cloud Engineer & Web Developer",
    description:
      "Portfolio of Eric Musembi, a certified IT Personnel, Cloud Practitioner, Web Developer, and App Developer based in Kenya.",
    images: ["/Profile.jpg"], // Same as OG image
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head><Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-EMQL6TE4ZH`} // Replace with your actual measurement ID
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-EMQL6TE4ZH'); // Replace with your actual measurement ID
            `,
          }}
        /></head>
      <body className={poppins.variable}>
        
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <ThemeToggle />
          <main className="min-h-screen p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}

