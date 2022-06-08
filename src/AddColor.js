import { useState } from "react";
import { ColorBox } from "./ColorBox";

export function AddColor() {
  const [color, setColor] = useState("yellow");
  const styles = {
    backgroundColor: color || "yellow",
  };

  const initialcolorList = ["deepskyblu", "orange", "plum"];
  const [colorList, setColorList] = useState(initialcolorList);
  return (
    <div>
      <input
        style={styles}
        type="text"
        placeholder="Enter a color"
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />
      {/* coy the colorlist and add new color to it */}
      <button onClick={() => setColorList([...colorList, color])}>
        {" "}
        Add Color
      </button>

      {colorList.map((clr, index) => {
        <ColorBox key={index} color={clr} />;
      })}
    </div>
  );
}
