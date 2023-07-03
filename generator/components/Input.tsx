import React from "react";

type InputProps = {
  containerClass?: string;
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export default function Input(props: InputProps) {
  const { containerClass = "mt-2 mr-2" } = props;
  return (
    <div className={containerClass}>
      <input
        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
        {...props}
      />
    </div>
  );
}
