type CircleProps = {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  color: string;
};

const Circle = ({ canvasRef, color }: CircleProps) => {
  const drawCircle = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    context.strokeStyle = color;

    context.beginPath();
    context.arc(95, 50, 40, 0, 2 * Math.PI);
    context.stroke();
  };
  return <button className="circle-btn" onClick={drawCircle}></button>;
};

export default Circle;
