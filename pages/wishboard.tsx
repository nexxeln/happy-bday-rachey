import { NextPage } from "next";
import Heading from "../components/Wishboard/Heading";

const Wishboard: NextPage = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen py-2 background">
      <Heading />
      {/* <Pfp /> */}
    </div>
  );
};

export default Wishboard;
