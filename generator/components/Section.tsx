import React, { ReactNode } from "react";

type SectionProps = {
  labelText: string;
  children?: ReactNode;
  id?: string;
};

export default function Section({ id, labelText, children }: SectionProps) {
  return (
    <div className="col-span-full my-2">
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {labelText}
      </label>
      {children}
    </div>
  );
}
