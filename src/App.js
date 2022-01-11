import { useState } from "react";
import Canvas from "./Canvas";
import Input from "./Input";

function App() {
  const [color, setColor] = useState("");
  const [hexValue, setHexValue] = useState("");
  const [isDarkText, setIsDarkText] = useState(true);

  return (
    <main className="color-change-3x">
      <Canvas color={color} hexValue={hexValue} isDarkText={isDarkText} />
      <Input
        color={color}
        setColor={setColor}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </main>
  );
}

export default App;
