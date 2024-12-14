import React from 'react';

type TriangleProps = {
    canvasRef: React.RefObject<HTMLCanvasElement>;
  };
  
  const Triangle = ({ canvasRef }: TriangleProps) => {
  const drawTriangle = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    context.strokeStyle = 'blue';
    context.beginPath();
    context.moveTo(250, 100);
    context.lineTo(400, 400); 
    context.lineTo(100, 400); 
    context.closePath();
    context.stroke();
  };

  return <button onClick={drawTriangle}>Triangle</button>;
};

export default Triangle;
