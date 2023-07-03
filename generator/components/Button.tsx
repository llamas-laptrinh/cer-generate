import React from "react";

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  title: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function Button({ type, title, onClick }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="inline-flex w-full justify-center rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 sm:ml-3 sm:w-auto"
    >
      {title}
    </button>
  );
}
