import { useState } from "react";

function Member({
  key,
  litemstyles,
  divstyles,
  imgsrc,
  imgwidth,
  imgheight,
  alttext,
  namedivstyles,
  name,
  personOrder,
  arrLength,
}) {
  const [isNameShown, setIsNameShown] = useState(false);
  const [itemOrder, setItemOrder] = useState(personOrder);

  function mouseEnterProfile() {
    setIsNameShown(true);
    setItemOrder(arrLength + 1);
  }
  function mouseExitProfile() {
    setIsNameShown(false);
    setItemOrder(personOrder);
  }

  return (
    <li key={key} className={litemstyles}>
      <div
        onMouseEnter={mouseEnterProfile}
        onMouseLeave={mouseExitProfile}
        className={divstyles}
        style={{ zIndex: itemOrder }}
      >
        <img src={imgsrc} width={imgwidth} height={imgheight} alt={alttext} />
        {isNameShown && <div className={namedivstyles}>{name}</div>}
      </div>
    </li>
  );
}
export default Member;
