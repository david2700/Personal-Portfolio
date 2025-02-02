import Head from "next/head";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>David&apos;s Portfolio</title>
        <meta name="description" content="Welcome to my portfolio website!" />
      </Head>

      <header>
        <Navbar/>
      </header>

      <main className="min-h-screen bg-gray-900 text-white">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center h-screen text-center">
          <h1 className="text-4xl md:text-6xl font-bold">Hi, I&apos;m David 👋</h1>
          <p className="text-lg mt-4 text-gray-400">
            A passionate frontend developer building cool things with Next.js
          </p>
        </section>
      </main>
    </>
  );
}

