import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import a from "@/app/favicon.ico"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Taha khan | MERN Stack Developer",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Add your favicon link here */}
        <link rel="icon" href={a} />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
