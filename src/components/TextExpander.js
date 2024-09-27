import React, { useState } from "react";

function TextExpander({
  children,
  className = "box",
  expanded = false,
  collapsedNumWords = 10,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
  buttonColor = "#1f09cd",
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, collapsedNumWords).join(" ") + "...";

  const buttonStyle = {
    background: "none",
    border: "none",
    font: "inherit",
    cursor: "pointer",
    marginLeft: "6px",
    color: buttonColor,
  };

  return (
    <>
      <div className={className}>
        <span>{displayText}</span>
        <button
          onClick={() => setIsExpanded((expanded) => !isExpanded)}
          style={buttonStyle}
        >
          {isExpanded ? collapseButtonText : expandButtonText}
        </button>
      </div>
    </>
  );
}

export default TextExpander;
