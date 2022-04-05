import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Button from "../components/Home/Button";
import Header from "../components/Home/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Happy Birthday Rachey</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Happy birthday to Rachey!" />
      </Head>

      <div className="flex flex-col items-center justify-center min-h-screen py-2 background">
        <Header />
        <div className="flex pt-6">
          <Image
            src="https://cdn.discordapp.com/emojis/887881507983732757.gif?size=60&quality=lossless"
            alt="heart"
            width={60}
            height={60}
          />
          <Image
            src="https://cdn.discordapp.com/emojis/887881507983732757.gif?size=60&quality=lossless"
            alt="heart"
            width={60}
            height={60}
          />
        </div>
        <div className="flex items-center justify-center pt-6 space-x-4">
          <Button type="wishboard" />
        </div>
      </div>
    </>
  );
};

export default Home;
