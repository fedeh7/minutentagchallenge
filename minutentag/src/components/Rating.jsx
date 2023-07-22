/**
 * The Rating component consists in a container with 5 stars.
 * Each star is represented by a <span /> element.
 * The component should render to this HTML code:
 *
 *  <div id='rating'>
 *		<span>*</span>
 *		<span>*</span>
 *		<span>*</span>
 *		<span>*</span>
 *		<span>*</span>
 *	</div>
 *
 * When an <span /> element is clicked, the active class should be added to that <span /> and to ALL <span /> before it.
 * Also, the active class should be removed from all span elements after it, if there are any.
 * For example, after the third span element has been clicked, the HTML code should look like this:
 *
 * <div id='rating'>
 *  <span class="active">*</span>
 *  <span class="active">*</span>
 *  <span class="active">*</span>
 *  <span>*</span>
 *  <span>*</span>
 * </div>
 */

import { useEffect, useRef, useState } from "react";
import "./Rating.css";

const Star = ({ index, currentSelectedStar, handleOnClick }) => {
  return (
    <span
      className={`star ${index <= currentSelectedStar ? "active" : ""}`}
      onClick={() => handleOnClick({ index })}
    >
      ⋆
    </span>
  );
};

export const Rating = () => {
  const [currentSelectedStar, setCurrentSelectedStar] = useState();
  const ratingRef = useRef(null);

  const handleOnClick = ({ index }) => {
    setCurrentSelectedStar(index);
  };

  return (
    <div className="rating" ref={ratingRef}>
      {[...Array(5)].map((star, index) => {
        return (
          <Star
            key={index}
            index={index}
            currentSelectedStar={currentSelectedStar}
            handleOnClick={handleOnClick}
          />
        );
      })}
    </div>
  );
};
