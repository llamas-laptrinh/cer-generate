"use client";
import React from "react";
import Button from "@/components/Button";
import ConfigForm from "@/components/ConfigForm";
import DesignView from "@/components/DesignView";
import Section from "@/components/Section";
import ShowCer from "@/components/ShowCer";
import SignatureForm from "@/components/SignatureForm";
import UploadImage from "@/components/UploadImage";
import imgSrc from "../public/images/test.jpg";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc: imgSrc,
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
];

export default function Home() {
  const [signatureSrc, setSignatureSrc] = React.useState("");
  return (
    <main className="flex min-h-screen flex-col px-36 py-4">
      <div
        style={{ justifyContent: "space-between" }}
        className="flex xs:flex-col "
      >
        <div className="mr-4">
          <Section labelText="Design View">
            <DesignView signatureSrc={signatureSrc} />
          </Section>
          <Section labelText="Signature Form">
            <SignatureForm setSrc={(src) => setSignatureSrc(src)} />
          </Section>
        </div>
        <div>
          <Section labelText="Cover Image">
            <UploadImage />
          </Section>
          <Section labelText="Cover Image Size">
            <ConfigForm placeHolder1="width" placeHolder2="height" />
          </Section>
          <Section labelText="Signature Position">
            <ConfigForm placeHolder1="x" placeHolder2="y" />
          </Section>
          <Section labelText="Font of names">
            <ConfigForm placeHolder1="font size" placeHolder2="font family" />
          </Section>
          <Section labelText="List of names">
            <textarea
              className="w-full border border-solid border-gray-900/25 rounded"
              rows={10}
            ></textarea>
          </Section>
          <Button title="Generate" />
        </div>
      </div>
      <ShowCer data={products} />
    </main>
  );
}
