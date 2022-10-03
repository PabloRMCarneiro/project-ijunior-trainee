import { React, useState } from "react";
import CreateUserSongs from '../../Api/CreateUserSongs';

function BtnFavorite(props) {

  const { track_id } = props;

  const [btnColor, setBtnColor] = useState(true);

  const handleColor = (e) => {
    if (btnColor) {
      e.target.style.fontVariationSettings = "'FILL' 1";
      e.target.style.color = "#3FE168";
      if (track_id) {
        CreateUserSongs(track_id).then();
      }
    }
    if (!btnColor) {
      e.target.style.fontVariationSettings = "'FILL' 0";
      e.target.style.color = "#CCCCCC";
    }
    setBtnColor(!btnColor);
  };

 


  return (
    <button className="btn-favorite" onClick={ handleColor}  >
      <span className="material-symbols-outlined" id="favorite">
        favorite
      </span>
    </button>
  );
}


export default BtnFavorite;

/* console.log(button.parentNode.parentNode.childNodes[1].src); */ // cover_image
/* console.log(e.target.parentNode.parentNode.childNodes[2].childNodes[0].innerHTML); // title
console.log(e.target.parentNode.parentNode.childNodes[2].childNodes[1].innerHTML); */ // artist
/* console.log(String(window.location.href)[String(window.location.href).length - 1]); */ // artist_id
/* console.log(e.target.parentNode.parentNode.childNodes[3].innerHTML); */ // genre