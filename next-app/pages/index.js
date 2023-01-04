import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Next App</title>
      </Head>
      <div>
        <h1>Welcome to NEXT</h1>
      </div>
    </>
  );
}
