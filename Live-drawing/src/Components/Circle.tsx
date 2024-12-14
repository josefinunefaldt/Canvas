type CircleProps = {
  canvasRef: React.RefObject<HTMLCanvasElement>;
};

const Circle = ({ canvasRef }: CircleProps) => {
  const drawCircle = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    context.beginPath();
    context.arc(95, 50, 40, 0, 2 * Math.PI);
    context.stroke();
  };
  return <button className="circle-btn" onClick={drawCircle}></button>;
};

export default Circle;
