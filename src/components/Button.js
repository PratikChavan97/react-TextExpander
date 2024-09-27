import React from "react";

function Button({ children, onSet, buttonText }) {
  return <button onClick={onSet}>{children}</button>;
}

export default Button;
