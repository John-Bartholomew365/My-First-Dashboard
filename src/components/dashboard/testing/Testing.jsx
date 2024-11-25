// pages/index.js
import Head from 'next/head';
import SideModal from '../../SideModal';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Head>
        <title>Side Modal Example</title>
        <meta name="description" content="Side modal example with Next.js and Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold mb-8">Welcome to Next.js!</h1>
        <SideModal />
      </main>
    </div>
  );
}
