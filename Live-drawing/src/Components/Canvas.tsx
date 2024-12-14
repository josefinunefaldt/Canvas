import { useState, useRef } from "react";
import Triangle from "./Triangle";
import Circle from "./Circle";
import Square from "./Square";
import ColorPalette from "./ColorPalette";

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

  return (
    <div style={{ display: "flex" }}>
      <canvas
        ref={canvasRef}
        width={1000}
        height={600}
        style={{ border: "1px solid black" }}
        onMouseDown={startDrawing}
        onMouseMove={drawingSession}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
      />
      <div
        style={{
          marginLeft: "4px",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Triangle canvasRef={canvasRef} />
        <Circle canvasRef={canvasRef} />
        <Square canvasRef={canvasRef} />
        <ColorPalette setColor={setColor} />
        <button onClick={deleteDrawing}>Delete</button>
      </div>
    </div>
  );
};

export default Canvas;
