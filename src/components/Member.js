import { useState } from "react";

function Member({
  key,
  listItemStyle,
  listItemPosition,
  divStyles,
  imgSrc,
  imgWidth,
  imgHeight,
  altText,
  nameDivStyles,
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
    <li
      key={key}
      className={listItemStyle}
      style={{ left: `${listItemPosition}px` }}
    >
      <div
        onMouseEnter={mouseEnterProfile}
        onMouseLeave={mouseExitProfile}
        className={divStyles}
        style={{ zIndex: itemOrder }}
      >
        <img src={imgSrc} width={imgWidth} height={imgHeight} alt={altText} />
        {isNameShown && <div className={nameDivStyles}>{name}</div>}
      </div>
    </li>
  );
}
export default Member;
