"use client";
import React from "react";
import Border from "./Border";

const width = 588;
const height = 388;

type DesignViewProps = {
  borderSrc?: string;
  signatureSrc?: string;
  userNameSrc?: string;
};

const defaultBorderSrc =
  "https://previews.123rf.com/images/oliska/oliska1511/oliska151100002/48798490-certificate-borders-and-template.jpg";

export default function DesignView({
  borderSrc = defaultBorderSrc,
  signatureSrc = "",
  userNameSrc = "",
}: DesignViewProps) {
  const canvasRef = React.useRef<any>(null);
  React.useEffect(() => {
    const borderImage = new Image();
    const signatureImage = new Image();
    signatureImage.src = signatureSrc;
    borderImage.src = borderSrc;

    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      context.fillStyle = "#000000";
      context.fillRect(0, 0, context.canvas.width, context.canvas.height);

      borderImage.onload = () => {
        context.drawImage(borderImage, 0, 0, width, height);
        context.drawImage(signatureImage, width - 230, height - 160, 200, 100);
      };
    }
  }, [borderSrc, signatureSrc]);
  return (
    <Border>
      <canvas ref={canvasRef} width={width} height={height} />
    </Border>
  );
}
