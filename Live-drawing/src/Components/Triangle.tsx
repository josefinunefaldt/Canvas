type TriangleProps = {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  color: string;
};

const Triangle = ({ canvasRef, color }: TriangleProps) => {
  const drawTriangle = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;
    context.strokeStyle = color;
    context.beginPath();
    context.moveTo(250, 100);
    context.lineTo(400, 400);
    context.lineTo(100, 400);
    context.closePath();
    context.stroke();
  };

  return <button className="triangle-btn" onClick={drawTriangle}></button>;
};

export default Triangle;
