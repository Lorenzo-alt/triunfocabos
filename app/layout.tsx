import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Suspense } from "react";
import Loading from "./loading";
import toast, { Toaster } from 'react-hot-toast';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "RM Trinfo Cabos",
  description:
    "A RM Triunfo Cabos oferece a mais alta qualidade em cabos de aço para diversos setores. Experiência, qualidade, variedade, atendimento personalizado e compromisso com o cliente.",
  keywords:
    "cabos de aço, Triunfo Cabos, acessórios para elevadores, cabos de aço, cabos para academia, cabos para elevadores, cintas de poliéster, laços de cabos de aço, elevação de cargas, movimentação de cargas, amarração de cargas, segurança, qualidade, RM Triunfo Cabos",
  authors: [{ name: "Lorenzo-alt", url: "https://github.com/Lorenzo-alt" }],
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    type: "website",
    siteName: "RM Trinfo Cabos",
    title: "RM Trinfo Cabos",
    description:
      "A RM Triunfo Cabos oferece a mais alta qualidade em cabos de aço para diversos setores. Experiência, qualidade, variedade, atendimento personalizado e compromisso com o cliente.",
    url: "link",
  },
  twitter: {
    title: "RM Trinfo Cabos",
    description:
      "A RM Triunfo Cabos oferece a mais alta qualidade em cabos de aço para diversos setores. Experiência, qualidade, variedade, atendimento personalizado e compromisso com o cliente.",
    creator: "Lorenzo-alt",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} bg-fundo`}
    >
      <body className="flex flex-col items-center">
        <link
          rel="icon"
          href="./favicon.ico"
          type="image/x-icon"
          sizes="64x64"
        />
        <Suspense fallback={<Loading />}>
          <NavBar />
          {children}
          <Toaster/>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
