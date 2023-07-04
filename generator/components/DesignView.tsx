"use client";
import React from "react";
import Border from "./Border";
import Button from "./Button";

const width = 588;
const height = 388;

type DesignViewProps = {
  borderSrc?: string;
  signatureSrc?: string;
  nameStyle?: string;
  userName?: string;
  onGenerateClick: (value: string) => void;
};

export default function DesignView({
  borderSrc = "",
  signatureSrc = "",
  nameStyle = "30px Arial",
  userName = "",
  onGenerateClick
}: DesignViewProps) {
  const canvasRef = React.useRef<any>(null);
  React.useEffect(() => {
    const borderImage = new Image();
    borderImage.setAttribute("crossorigin", "anonymous");
    borderImage.src = borderSrc;

    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      context.fillStyle = "#000000";
      context.fillRect(0, 0, context.canvas.width, context.canvas.height);

      borderImage.onload = () => {
        context.drawImage(borderImage, 0, 0, width, height);
      };
    }
  }, [borderSrc]);

  React.useEffect(() => {
    const signatureImage = new Image();
    signatureImage.setAttribute("crossorigin", "anonymous");
    signatureImage.src = signatureSrc;
    const canvas = canvasRef.current;

    if (canvas) {
      const context = canvas.getContext("2d");
      signatureImage.onload = () => {
        context.drawImage(signatureImage, width - 230, height - 160, 200, 100);
      };
    }
  }, [signatureSrc]);

  React.useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas) {
      const context = canvas.getContext("2d");
      context.font = nameStyle;
      context.fillText(userName, (width - 50) / 2, (height + 10) / 2);
    }
  }, [nameStyle, userName]);

  function clearCanvas() {
    canvasRef.current.width = canvasRef.current.width;
  }
  function onGenerate() {
    const url: string = canvasRef.current.toDataURL();
    console.log(url);
    onGenerateClick(url);
  }
  return (
    <Border>
      <form>
        <canvas
          ref={canvasRef}
          id="design-canvas"
          width={width}
          height={height}
        />
        <div className="bg-gray-50 mt-4 px-4 py-3 sm:flex sm:px-2">
          <Button type="button" onClick={onGenerate} title="Generate" />
          <Button onClick={clearCanvas} type="button" title="Clear" />
        </div>
      </form>
    </Border>
  );
}
