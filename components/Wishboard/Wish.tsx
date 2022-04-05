interface WishProps {
  wish: string;
  sender: string;
}

const Wish: ({ wish, sender }: WishProps) => JSX.Element = ({
  wish,
  sender
}: WishProps) => {
  return (
    <div className="flex flex-col px-8 pt-12 md:px-12 lg:px-56">
      <div className="border-l-4 border-pink-300">
        <p className="pl-4 leading-relaxed text-white text-normal font-roboto">
          {wish}
        </p>
      </div>
      <p className="pt-1 pl-4 text-purple-400 font-roboto">- {sender}</p>
    </div>
  );
};

export default Wish;
