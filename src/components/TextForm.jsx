import React, { useState } from "react";

function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClClick = () => {
    let newText = ""
    setText(newText);
    confirm("you want to clear your text area");
  };
  
  const handleExtraText = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "));
  };

  const handleCopyClick = () => {
    let newText = document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value)//this method write the copied text to the clipboard
  };

  const handleCutClick = () => {
    let newText = document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value)//this method write the cut & paste text to the clipboard
    setText(newText = "");
  };

  const capitalize = () => {
    let lower = text.toLowerCase();
    setText(lower.charAt(0).toUpperCase() + lower.slice(1))
}

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className={`container text-${props.mode === 'light'? 'dark':'light'}`}>
        <h1 className="text-center fw-semibold">{props.heading}</h1>
        <div className="mb-3 text-light">
          <textarea
            value={text}
            onChange={handleOnChange} //after passing the "value" attribute it is neccessary to include an onChange function
            className="form-control"
            id="myBox"
            rows="8"
            placeholder="Enter your text here..."
          ></textarea>
        </div>

        <button onClick={handleUpClick} className="btn btn-primary mx-1">
          Convert to UPPERCASE
        </button>
        <button onClick={handleLoClick} className="btn btn-primary mx-1">
          Convert to lowercase
        </button>
        <button onClick={handleClClick} className="btn btn-primary mx-1">
          Clear the text area
        </button>
        <button onClick={handleCopyClick} className="btn btn-primary mx-1">
          Copy Text
        </button>
        <button onClick={handleCutClick} className="btn btn-primary mx-1">
          Cut Text
        </button>
        <button onClick={handleExtraText} className="btn btn-primary mx-1">
          Remove Extra Spaces
        </button>
        <button onClick={capitalize} className="btn btn-primary mx-1">
          Capitalize the first word
        </button>
      </div>

      <div className={`container d-flex flex-column text-${props.mode === 'light'? 'dark':'light'}`}>

        <div className="d-flex flex-row border-dark-subtle border-bottom border-3">

          <div className="d-flex flex-column w-50">
            <h1>Your content summary</h1>
            <p className="font-monospace">
              {/* the "text.split(" ").length" method converts the paragraph words into a string array */}
              {text.split(" ").length} words and {text.length} characters
            </p>
            <p className="font-monospace">
              Will took you {0.008 * text.split(" ").length} minutes to read this
            </p>
          </div>

          <div className="d-flex flex-column">
            <h1>Paragraph Length</h1>
            <p>The length of your paragraph is {text.length} characters</p>
          </div>

        </div>

        <div className="d-flex flex-column text-center">
          <h1>Your Text Preview</h1>
          <p>{text.length>0 ? text:'Your Preview Text will appear here...'}</p>
        </div>

      </div>
    </>
  );
}

export default TextForm;
