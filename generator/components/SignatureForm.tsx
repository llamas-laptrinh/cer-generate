"use client";
import React from "react";
import Border from "./Border";
import Button from "./Button";

type SignatureFormProps = {
  setSrc: (src: string) => void;
};

export default function SignatureForm({ setSrc }: SignatureFormProps) {
  const canvasRef = React.useRef<any>(null);

  function getMousePos(canvasDom: any, mouseEvent: any) {
    var rect = canvasDom.getBoundingClientRect();
    return {
      x: mouseEvent.clientX - rect.left,
      y: mouseEvent.clientY - rect.top,
    };
  }

  function getTouchPos(canvasDom: any, touchEvent: any) {
    var rect = canvasDom.getBoundingClientRect();
    return {
      x: touchEvent.touches[0].clientX - rect.left,
      y: touchEvent.touches[0].clientY - rect.top,
    };
  }

  function clearCanvas() {
    canvasRef.current.width = canvasRef.current.width;
  }

  function saveSignature() {
    const dataUrl = canvasRef.current.toDataURL();
    setSrc(dataUrl);
    console.log("dataUrl", dataUrl);
  }
  React.useEffect(() => {
    // const image = new Image();
    // image.src = "https://www.w3schools.com/jsref/img_the_scream.jpg";

    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      context.strokeStyle = "#222222";
      context.lineWidth = 2;

      let drawing = false;
      let mousePos = {
        x: 0,
        y: 0,
      };
      let lastPos = mousePos;
      canvas.addEventListener(
        "mousedown",
        function (e: any) {
          drawing = true;
          lastPos = getMousePos(canvas, e);
        },
        false
      );

      canvas.addEventListener(
        "mouseup",
        function () {
          drawing = false;
        },
        false
      );

      canvas.addEventListener(
        "mousemove",
        function (e: any) {
          mousePos = getMousePos(canvas, e);
        },
        false
      );

      // Add touch event support for mobile
      canvas.addEventListener("touchstart", function () {}, false);

      canvas.addEventListener(
        "touchmove",
        function (e: any) {
          var touch = e.touches[0];
          var me = new MouseEvent("mousemove", {
            clientX: touch.clientX,
            clientY: touch.clientY,
          });
          canvas.dispatchEvent(me);
        },
        false
      );

      canvas.addEventListener(
        "touchstart",
        function (e: any) {
          mousePos = getTouchPos(canvas, e);
          var touch = e.touches[0];
          var me = new MouseEvent("mousedown", {
            clientX: touch.clientX,
            clientY: touch.clientY,
          });
          canvas.dispatchEvent(me);
        },
        false
      );

      canvas.addEventListener(
        "touchend",
        function (e: any) {
          var me = new MouseEvent("mouseup", {});
          canvas.dispatchEvent(me);
        },
        false
      );

      (function drawLoop() {
        requestAnimationFrame(drawLoop);
        if (drawing) {
          context.moveTo(lastPos.x, lastPos.y);
          context.lineTo(mousePos.x, mousePos.y);
          context.stroke();
          lastPos = mousePos;
        }
      })();
    }
  }, []);
  return (
    <Border>
      <form>
        <canvas ref={canvasRef} id="sig-canvas" width="620" height="160">
          Get a better browser, bro.
        </canvas>
        <div className="bg-gray-50 px-4 py-3 sm:flex sm:px-2">
          <Button onClick={saveSignature} type="button" title="Save" />
          <Button onClick={clearCanvas} type="button" title="Clear" />
        </div>
      </form>
    </Border>
  );
}
