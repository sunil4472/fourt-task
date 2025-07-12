import { useEffect, useState } from "react";

const ROWS = 12;
const COLS = 20;
const INTERVAL = 2000;
const BOXES_TO_COLOR = 10;

const Hero = () => {
  const [colors, setColors] = useState(
    Array(ROWS)
      .fill()
      .map(() => Array(COLS).fill("white"))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const newColors = Array(ROWS)
        .fill()
        .map(() => Array(COLS).fill("white"));

      for (let i = 0; i < BOXES_TO_COLOR; i++) {
        const randomRow = Math.floor(Math.random() * ROWS);
        const randomCol = Math.floor(Math.random() * COLS);
        newColors[randomRow][randomCol] = "blue";
      }

      setColors(newColors);
    }, INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen h-screen bg-white">
      <div
        className="w-full h-full grid bg-black"
        style={{
          gridTemplateRows: `repeat(${ROWS}, 1fr)`,
          gridTemplateColumns: `repeat(${COLS}, 1fr)`,
        }}
      >
        {colors.map((row, rowIndex) =>
          row.map((color, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className="border border-black transition-colors duration-500"
              style={{
                backgroundColor: color,
              }}
            ></div>
          ))
        )}
      </div>
    </div>
  );
};

export default Hero;
