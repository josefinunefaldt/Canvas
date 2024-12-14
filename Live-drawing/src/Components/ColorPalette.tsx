type ColorPaletteProps = {
  setColor: (color: string) => void;
};

const ColorPalette = ({ setColor }: ColorPaletteProps) => (
  <div>
    <button onClick={() => setColor("blue")}>Blue</button>
    <button onClick={() => setColor("green")}>Green</button>
    <button onClick={() => setColor("red")}>Red</button>
    <button onClick={() => setColor("pink")}>Pink</button>
  </div>
);

export default ColorPalette;
