import { useState } from "react";

export default function TextForm(props) {
  const [val, setVal] = useState("");

  const UpperCase = () => {
    let newText = val.toUpperCase();
    setVal(newText);
  };

  const LowerCase = () => {
    let newText = val.toLowerCase();
    setVal(newText);
  };

  const ClearText = () => {
    let newText = "";
    setVal(newText);
  };

  const handleonScreen = (e) => {
    setVal(e.target.value);
  };

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={val}
            onChange={handleonScreen}
          ></textarea>
        </div>
        <button
          style={{ backgroundColor: "blue", color: "white" }}
          className="btn btn mx-2"
          onClick={UpperCase}
        >
          Convert to Upper Case
        </button>
        <button
          style={{ backgroundColor: "blue", color: "white" }}
          className="btn btn mx-2"
          onClick={LowerCase}
        >
          Convert to Lower Case
        </button>
        <button
          style={{ backgroundColor: "blue", color: "white" }}
          className="btn btn mx-2"
          onClick={ClearText}
        >
          Clear Text
        </button>
      </div>
      <div className="container my-4">
        <h2>Your Text Summary</h2>
        <p>
          {val.trim("").split(" ").length} words and {val.length} character
        </p>
        <p>{0.008 * val.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>
          {val.length > 0
            ? val
            : "Enter something in the textbox above to preview"}
        </p>
      </div>
    </>
  );
}
