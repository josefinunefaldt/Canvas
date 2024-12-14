type ColorPaletteProps = {
  setColor: (color: string) => void;
};

const ColorPalette = ({ setColor }: ColorPaletteProps) => (
  <div>
    <button className="btn btn-success" onClick={() => setColor("green")}>
      Green
    </button>
    <button className=" btn bg-blue-700" onClick={() => setColor("blue")}>
      Blue
    </button>
    <button className=" btn btn-error" onClick={() => setColor("red")}>
      Red
    </button>
    <button className=" btn bg-secondary" onClick={() => setColor("pink")}>
      Pink
    </button>
  </div>
);

export default ColorPalette;
