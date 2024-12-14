import { useState, useRef, useEffect } from "react";
import Triangle from "./Triangle";
import Circle from "./Circle";
import Square from "./Square";
import ColorPalette from "./ColorPalette";
import "../Canvas.css";

type Position = {
  x: number;
  y: number;
};

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [drawing, setDrawing] = useState(false);
  const [lastPosition, setLastPosition] = useState<Position>({ x: 0, y: 0 });

  const [color, setColor] = useState("blue");

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setDrawing(true);
    setLastPosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  };

  const drawingSession = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!drawing) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    context.strokeStyle = color;
    context.beginPath();
    context.moveTo(lastPosition.x, lastPosition.y);
    context.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    context.stroke();

    setLastPosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  };

  const deleteDrawing = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  const stopDrawing = () => {
    setDrawing(false);
  };

  useEffect(() => {
    if (!drawing) {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dataUrl = canvas.toDataURL();
      localStorage.setItem("drawing", dataUrl);
      console.log("Doodle saved!");
    }
  }, [drawing]);

  return (
    <div>
      <div className="canvas-container">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold font-cosmic mb-4 mt-1">
            Rocket doodle <i className="fas fa-rocket"></i>
          </h1>

          <canvas
            className="canvas card  bg-slate-50 shadow-xl"
            ref={canvasRef}
            width={1000}
            height={600}
            onMouseDown={startDrawing}
            onMouseMove={drawingSession}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
          />
        </div>
        <div className="component-container">
          <Triangle canvasRef={canvasRef} color={color} />
          <Circle canvasRef={canvasRef} color={color} />
          <Square canvasRef={canvasRef} color={color} />
          <ColorPalette setColor={setColor} />
          <button className=" delete-btn btn btn-error" onClick={deleteDrawing}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Canvas;
