import { NextPage } from "next";
import Heading from "../components/Wishboard/Heading";
import Wish from "../components/Wishboard/Wish";

const Wishboard: NextPage = () => {
  return (
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
          wish="Happy Birthday Rachey! I hope you have a great Birthday and a great year. I’m so happy I met you and I’m looking forward to seeing you grow more and more in the near future. <33 "
          sender="Dark"
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
          wish="Hey rachey its lobo first I just wanna say happy birthday and I hope you enjoy your day. And uh I'm glad to see you progressing so far with twitch and making those goals. Pretty much all I gotta say tbh I'm not a talker or motivational person. 😭"
          sender="Lobo"
        />
        <Wish
          wish="HAPPY BIRTHDAY RACHEL DACHEL! another year of you means another year of entertainment😁. have a great day and keep doing what you do"
          sender="Bigby"
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
          wish="Happy birthday Rachey!! I'm so glad that I clicked on your profile that day and joined your server. I wish you another great year of streaming and I'm hoping you like this!"
          sender="nexxel"
        />
        <Wish
          wish="Happy bday rachey I wish you become twitch's big big streamer soon."
          sender="Lirena"
        />
        <Wish
          wish="Wishing you a fantastic birthday and wonderful year ahead. Make every day count!"
          sender="Faux"
        />
        <Wish wish="Happy Bday to my beautiful mother rachey" sender="Shadow" />
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
  );
};

export default Wishboard;
