import { useState, useRef } from 'react';

type Position = {
  x: number;
  y: number;
};

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null); 
  const [drawing, setDrawing] = useState(false);
  const [lastPosition, setLastPosition] = useState<Position>({ x: 0, y: 0 });

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setDrawing(true);
    setLastPosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  };

  const drawingSession = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!drawing) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const canvasElement = canvas.getContext('2d');
    if (!canvasElement) return;

    canvasElement.strokeStyle = 'green'; 
    canvasElement.beginPath();
    canvasElement.moveTo(lastPosition.x, lastPosition.y);
    canvasElement.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    canvasElement.stroke();

    setLastPosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  };

  return (
    <canvas
      ref={canvasRef}
      width={1000}
      height={600}
      style={{ border: '1px solid black' }}
      onMouseDown={startDrawing}
      onMouseMove={drawingSession}
    />
  );
};

export default Canvas;
