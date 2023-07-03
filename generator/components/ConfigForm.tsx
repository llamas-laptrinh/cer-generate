import React from "react";
import Input from "./Input";

type ConfigFormProps = {
  placeHolder1?: string;
  placeHolder2?: string;
};

export default function ConfigForm({
  placeHolder1,
  placeHolder2,
}: ConfigFormProps) {
  return (
    <div className="flex">
      <Input type="number" placeholder={placeHolder1} />
      <Input type="number" placeholder={placeHolder2} />
    </div>
  );
}
