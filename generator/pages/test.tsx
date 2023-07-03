import React from "react";

export default function Test(props: any) {
  const canvasRef = React.useRef<any>(null);
  React.useEffect(() => {
    const image = new Image();
    image.src = "https://www.w3schools.com/jsref/img_the_scream.jpg";

    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      context.fillStyle = "#000000";
      context.fillRect(0, 0, context.canvas.width, context.canvas.height);

      image.onload = () => {
        context.drawImage(image, 0, 0);
      };
    }
  }, []);
  return (
    <div>
      <canvas ref={canvasRef} {...props} width={588} height={480} />
    </div>
  );
}
