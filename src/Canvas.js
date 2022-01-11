const Canvas = ({ color, hexValue, isDarkText }) => {
  const canvasStyle = color
    ? { backgroundColor: color, color: isDarkText ? "#000" : "#FFF" }
    : null;
  return (
    <div style={canvasStyle} className="canvas">
      <p>{color ? color : "TYPE IN A VALID COLOR"}</p>
      <p>{hexValue ? hexValue : null}</p>
    </div>
  );
};

Canvas.defaultProps = {
  color: "Empty Value here ",
};
export default Canvas;
