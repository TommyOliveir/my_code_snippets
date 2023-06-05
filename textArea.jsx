import React, { useState, useRef, useEffect } from "react";

function TextBoxt() {
  const [content, setContent] = useState("");
  const [rowsCount, setRowscount] = useState(1);
  const textareaRef = useRef(null);
  const textCount = content.length;
  const LINE_LIMIT = 7;
  const CHARS_LIMIT = 230;
  const REMAINING_CHARS = CHARS_LIMIT - content.length;
  const REMAINING_ROWS = LINE_LIMIT - rowsCount;

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    const lines = inputValue.split("\n");
    const formattedLines = [];

    const maxCharactersPerLine = 35;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      let formattedLine = "";

      if (line.length > maxCharactersPerLine) {
        formattedLine = line.substring(0, maxCharactersPerLine);
      } else {
        formattedLine = line;
      }

      formattedLines.push(formattedLine);
    }

    setContent(formattedLines.join("\n"));

    const currentUseLines = formattedLines.length;
    console.log(currentUseLines);
    setRowscount(currentUseLines);
  };

  function handleKeyDown(e) {
    if (rowsCount == LINE_LIMIT && e.key === "Enter") {
      e.preventDefault();
    } else if (textCount == CHARS_LIMIT) {
      if (e.key !== "Backspace") {
        e.preventDefault();
      }
    }
  }

  return (
    <>
      <textarea
           className="form-control dedication phone-dedication dedication-box"
        ref={textareaRef}
        value={content}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        style={{
          backgroundColor: "#ABDCC9",
          // caretColor: "DeepPink",
          width: "740px",
          height: "320px",
          fontFamily: "Work Sans",
          // fontStyle: "Italic",
          fontWeight: "300",
          fontSize: "30px",
          resize: "none",
          outline: "none",
          paddingLeft: "10px",
          paddingRight: "10px",
        }}
      />
      {/* rowscount {rowsCount} chars count - (debug purpose){content.length} */}
      <div
        style={{
          fontSize: "24px",
          marginTop: ".5em",
          // backgroundColor: "red",
          maxWidth: "740px",
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          color: "#2c2b26 ",
        }}
      >
       
        <span
          style={{
            color: "#f18656",
            fontSize: "24px",
          }}
        >
          {rowsCount == 6 || rowsCount == 7
            ? `Ancora ${REMAINING_ROWS + 1} ${
                REMAINING_ROWS == 1 ? "righe" : "riga"
              } \u00A0\u00A0\  `
            : ""}
        </span>
      {textCount > 0 && `${REMAINING_CHARS}`}
      </div> 
    </>
  );
}
export default TextBoxt;
