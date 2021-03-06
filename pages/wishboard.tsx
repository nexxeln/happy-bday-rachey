import { NextPage } from "next";
import Head from "next/head";
import Heading from "../components/Wishboard/Heading";
import Wish from "../components/Wishboard/Wish";

const Wishboard: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rachey | Wishboard</title>
        <link rel="icon" href="/favicon/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Wishes for Rachey!" />
      </Head>
      <div className="relative flex flex-col min-h-screen background">
        <div className="flex items-center justify-center">
          <Heading />
        </div>
        <div className="py-8" />

        <div className="items-start">
          <Wish
            wish="Hey bsf!! hope you have and are having a wonderful birthday by the time you are reading this still cant believe you are 21 now!! We've made so many memories this past year and a half we've had a lot of laughs and good moments we have had some bad times too but we helped each other through those and for that I'm grateful :) Hopeful we make more memories together! Love you bsf:)"
            sender="KGwinter"
          />
          <Wish
            wish="Heyyyy small fry, Happy 21st birthday!! You mean so much to us and you've inspired so many people. Never stop streaming or else hehe, have a great birthday and party like an animal with me. No alcohol though only coffee shots. 21 years is alot you are a big boomer. Can't wait to see what else you got for streaming. I better be 1st to say happy birthday next year tho."
            sender="xiloh"
          />
          <Wish
            wish="Happy Birthday Rachey! I hope you have a great Birthday and a great year. I’m so happy I met you and I’m looking forward to seeing you grow more and more in the near future. <33"
            sender="Dark"
          />
          <Wish
            wish="Happy birthday Rachey! I've loved helping out in and meeting the community you've created. You're an amazing friend too and I appreciate everything you've done for me, so much love!"
            sender="Matt"
          />
          <Wish
            wish="HAPPIEST BIRTHDAYYYY RACHEYYYY!!! ILYSMMMM UR SERIOUSLY THE BEST PERSON EVER TY FOR STICKING BY MY SIDE FOR SO LONG AND TYSM FOR THE SWEET MEMORIES U HAVE GIVEN TO ALL OF US WE LOVE U SMMM I HOPE U HAVE A BLAST TODAY"
            sender="Prawny"
          />
          <Wish
            wish="Hiiii rachey! I hope you have the most wonderful birthday ever. You’re super amazing and kind hearted to everyone around you. I’m super glad to be able to call you my friend and wish you nothing but the best in life and I’ll be here through it all. love ya dude."
            sender="Sleepys"
          />
          <Wish
            wish="Happy birthday rachey, I haven't known you long but from what I've seen you are amazing. I hope you enjoy your 21st btw you're getting kinda old jkjkjk I love ya mate and i appreciate you. You are an amazing strong best woman don't let anyone tell you otherwise. Yours truly, Popsi the great"
            sender="Popsi"
          />
          <Wish
            wish="Hey rachey its lobo first I just wanna say happy birthday and I hope you enjoy your day. And uh I'm glad to see you progressing so far with twitch and making those goals. Pretty much all I gotta say tbh I'm not a talker or motivational person. 😭"
            sender="Lobo"
          />
          <Wish
            wish="i wish you nothing but the best for you and for your future. through your ups and downs and dark times i hope you will always be able to find a light and follow it to success and better things. happy birthday and much love"
            sender="hoezay"
          />
          <Wish
            wish="Over the past few months you’ve given me so much Rachey. It’s hard to put it all in a few sentences, but I want to thank you so much for everything. You deserve all the love in the world have a wonderful day!💛"
            sender="Mocha"
          />
          <Wish
            wish="HAPPY BIRTHDAY MY LOVE. You’re 21 now 🤩 we haven’t known each other for that long but I know we’re gonna know each other for a long time. I wish you the best day ever shawty. I love you"
            sender="Joanna"
          />
          <Wish
            wish="HAPPY BIRTHDAY RACHEL DACHEL! another year of you means another year of entertainment😁. have a great day and keep doing what you do"
            sender="Bigby"
          />
          <Wish
            wish="Heyo Rachey, Happy birthday to you! 21, a big milestone to finally reach after.. 21 years lmao. I hope you had an amazing day, got the stuff you wanted and are spending it well with whoever you choose to spend it with. We all love you!"
            sender="Kurix"
          />
          <Wish
            wish="Racheydachey is such an amazing streamer and I’m so glad I found her channel. She is also super nice when I talk to her on the server in streams or that one time I played with her. So I hope she has the best birthday a person can ask for!"
            sender="Imchase (kgwinter's biggest fan)"
          />
          <Wish
            wish="Happy birthday Rachey!! May all your wishes come true and you taste some sweet success. Good luck in your life do well."
            sender="Lakdak"
          />
          <Wish
            wish="Happy birthday Rachey!! I'm so glad that I clicked on your profile that day and joined your server. I wish you another great year of streaming and I'm hoping you like this website!"
            sender="nexxel"
          />
          <Wish
            wish="Happy bday rachey I wish you become twitch's big big streamer soon."
            sender="Lirena"
          />
          <Wish
            wish="Rachey, thank you for getting me back into streaming."
            sender="Spirit"
          />
          <Wish
            wish="Wishing you a fantastic birthday and wonderful year ahead. Make every day count!"
            sender="Faux"
          />
          <Wish
            wish="Happy Bday to my beautiful mother rachey"
            sender="Shadow"
          />
          <Wish
            wish="happy birthday, your are officially a boomer"
            sender="Ayze"
          />
          <Wish
            wish="Happy birthday rachey u can finally drink boom— youngster happy 21 first birthday "
            sender="The big sexy Frenchy"
          />
          <Wish wish="We Love You RACHEY" sender="Jewwy" />
        </div>

        <div className="pb-6" />
      </div>
    </>
  );
};

export default Wishboard;
