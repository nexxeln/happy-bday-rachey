import { NextPage } from "next";

const Gallery: NextPage = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen py-2 background">
      <img
        src="https://cdn.discordapp.com/avatars/743292574139154452/62d6d74149fe7f31946288f1f1e5a462.png?size=1024"
        alt="rachey"
        className="absolute w-32 h-32 rounded-full"
      />
    </div>
  );
};

export default Gallery;
