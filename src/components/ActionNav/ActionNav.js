import {React, useState} from "react";
import "./ActionNav.css";

function ActionNav() {
  
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
    <div className="actions-container">
      <div className="circle">
        <span className="material-symbols-outlined">play_arrow</span>
      </div>
      <span onClick={handleColor} className="material-symbols-outlined" id="favorite">
        favorite
      </span>
      <span class="material-symbols-outlined" id="download">
        download_for_offline
      </span>
      <span class="material-symbols-outlined" id="more-horiz">
        more_horiz
      </span>
    </div>
  );
}

export default ActionNav;
