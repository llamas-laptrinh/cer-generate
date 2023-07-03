"use client";
import DesignView from "@/components/DesignView";
import SignatureForm from "@/components/SignatureForm";
import UploadImageSection from "@/components/UploadImageSection";
import React from "react";

export default function Home() {
  const [signatureSrc, setSignatureSrc] = React.useState("");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex items-center justify-center">
        <div>
          <DesignView signatureSrc={signatureSrc} />
          <SignatureForm setSrc={(src) => setSignatureSrc(src)} />
        </div>
        <div>
          <UploadImageSection />
        </div>
      </div>
    </main>
  );
}
