type SquareProps = {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  color: string;
};

const Square = ({ canvasRef, color }: SquareProps) => {
  const drawSquare = () => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!context) return;
    context.strokeStyle = color;
    context.beginPath();
    context.moveTo(100, 100);
    context.lineTo(300, 100);
    context.lineTo(300, 300);
    context.lineTo(100, 300);
    context.closePath();
    context.stroke();
  };
  return <button className="square-btn" onClick={drawSquare}></button>;
};

export default Square;
