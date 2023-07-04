import React, { ReactNode } from "react";

type BorderProps = {
  children: ReactNode;
};

export default function Border({ children }: BorderProps) {
  return (
    <div className="my-2 flex justify-center rounded-lg border border-solid border-gray-900/25 px-4 py-4">
      {children}
    </div>
  );
}
