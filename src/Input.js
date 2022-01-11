import colorNames from "colornames";

const Input = ({ color, setColor, setHexValue, isDarkText, setIsDarkText }) => {
  return (
    <form className="inputForm" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="color">Add Color Name:</label>
      <input
        autoFocus
        id="color"
        type="text"
        role="searchbox"
        placeholder="Add color name"
        required
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      ></input>
      <button type="button" onClick={() => setIsDarkText(!isDarkText)}>
        Toggle Text Color
      </button>
    </form>
  );
};

export default Input;
