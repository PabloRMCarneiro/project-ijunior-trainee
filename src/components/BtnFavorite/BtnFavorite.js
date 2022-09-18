import { React, useState } from "react";

function BtnFavorite() {
  
  const [btnColor, setBtnColor] = useState(false);
  const handleColor = (e) => {
    setBtnColor(!btnColor);
    if (btnColor) {
      e.target.style.fontVariationSettings = "'FILL' 1";
      e.target.style.color = "#3FE168";
    }
    if (!btnColor) {
      e.target.style.fontVariationSettings = "'FILL' 0";
      e.target.style.color = "#CCCCCC";
    }
  };
  return (
    <button className="btn-favorite" onClick={handleColor}>
      <span className="material-symbols-outlined" id="favorite">
        favorite
      </span>
    </button>
  );
}

export default BtnFavorite;
