"use client";
import React from "react";
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
    imageSrc: imgSrc,
    imageAlt: "Front of men's Basic Tee in black.",
  },
];
const defaultBorderSrc =
  "https://previews.123rf.com/images/oliska/oliska1511/oliska151100002/48798490-certificate-borders-and-template.jpg";

export default function Home() {
  const [signatureSrc, setSignatureSrc] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [borderSrc, setBorderSrc] = React.useState(defaultBorderSrc);
  const [results, setResults] = React.useState<any[]>([]);

  const onGenerate = (url: string) => {
    const cloneResult = [...results];
    cloneResult.push({
      imageSrc: url,
      imageAlt: "Front of men's Basic Tee in black.",
    });
    setResults(cloneResult);
  };
  return (
    <main className="flex min-h-screen flex-col px-48 py-4">
      <div
        style={{ justifyContent: "space-between" }}
        className="flex xs:flex-col "
      >
        <div>
          <Section labelText="Design View">
            <DesignView
              onGenerateClick={onGenerate}
              borderSrc={borderSrc}
              signatureSrc={signatureSrc}
              userName={userName}
            />
          </Section>
          <Section labelText="Signature Form">
            <SignatureForm setSrc={(src) => setSignatureSrc(src)} />
          </Section>
        </div>
        <div>
          <Section labelText="Cover Image">
            <UploadImage
              setBorderSrc={(src) => {
                console.log("Uploading", src);
                setBorderSrc(src);
              }}
            />
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
          <Section labelText="Names Position">
            <ConfigForm placeHolder1="x" placeHolder2="y" />
          </Section>
          <Section labelText="List of names">
            <textarea
              onChange={(e) => setUserName(e.target.value)}
              className="w-full p-2 border border-solid border-gray-900/25 rounded"
              rows={10}
            />
          </Section>
        </div>
      </div>
      <ShowCer data={results} />
    </main>
  );
}
