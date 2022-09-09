import { React} from "react";
import BtnFavorite from "../../../BtnFavorite/BtnFavorite";
import "./ActionNav.css";

function ActionNav() {
  return (
    <div className="actions-container">
      <div className="circle">
        <span className="material-symbols-outlined">play_arrow</span>
      </div>
      <BtnFavorite />
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
