import { React} from "react";
import BtnFavorite from "../../BtnFavorite/BtnFavorite";
import "./ActionNav.css";

function ActionNav(props) {

  const {stateBtnFavorite} = props;

  return (
    <div className="actions-container">
      <div className="circle">
        <span className="material-symbols-outlined">play_arrow</span>
      </div>
      <span className="material-symbols-outlined" id="download">
        download_for_offline
      </span>
      {stateBtnFavorite && <BtnFavorite id="favorite" />}
    </div>
  );
}

export default ActionNav;
