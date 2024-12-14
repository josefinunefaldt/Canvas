type ColorPaletteProps = {
  setColor: (color: string) => void;
};

const ColorPalette = ({ setColor }: ColorPaletteProps) => (
  <div>
    <button
      className="btn rounded-full w-10 h-10 bg-green-500"
      onClick={() => setColor("green")}
    ></button>
    <button
      className="btn rounded-full w-10 h-10 bg-blue-700"
      onClick={() => setColor("blue")}
    ></button>
    <button
      className="btn rounded-full w-10 h-10 bg-red-500"
      onClick={() => setColor("red")}
    ></button>
    <button
      className="btn rounded-full w-10 h-10 bg-pink-500"
      onClick={() => setColor("pink")}
    ></button>
  </div>
);

export default ColorPalette;
