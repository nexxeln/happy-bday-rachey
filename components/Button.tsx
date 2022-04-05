interface ButtonProps {
  type: "gallery" | "default";
}

const Button: ({ type }: ButtonProps) => JSX.Element = ({
  type
}: ButtonProps) => {
  return (
    <div className="flex flex-col">
      <button>
        <div className="px-4 py-2 text-xl text-white capitalize transition-opacity duration-300 bg-purple-700 border-2 border-purple-700 rounded-md font-roboto hover:opacity-80">
          {type}
        </div>
      </button>
    </div>
  );
};

export default Button;
