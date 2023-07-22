/**
 * Given a list of items implement a navigation through the keyboard, following these requirements:
 * - Navigate through the list with UP and RIGHT keys will focus the next item.
 * - Navigate through the list with DOWN and LEFT keys will focus the previous item.
 * - Only one item will be FOCUSED per time in the browser.
 *
 * Suggestion: you may to think in term of "indexes".
 * You may calculate the index and use it to select the item, then you will focus that item.
 *
 * NOTE: The keydown event will work once the <ul> receives the focus.
 */

import { useEffect, useRef, useState } from "react";
import "./ListItemsForNavigation.css";
// Simulating a list of items to render.
// This can be passed through props as well. The constant is declared here for convenience

const itemsList = ["Home", "About", "Projects", "Contact us", "Login"];

export const ListItemsForNavigation = (props) => {
  const [selectedIndex, setSelectedIndex] = useState();
  const parentRef = useRef(null);

  useEffect(() => {
    // Focus the item using this effect

    parentRef?.current?.children[selectedIndex]?.focus();
  }, [selectedIndex]);

  function handleKeyDown(event) {
    // Add the proper logic to calculate the index that correspond to the item that should be focused.
    event.preventDefault();
    if (
      ["ArrowUp", "ArrowRight"].includes(event.key) &&
      selectedIndex < itemsList.length - 1
    ) {
      setSelectedIndex(selectedIndex + 1);
    } else if (
      ["ArrowDown", "ArrowLeft"].includes(event.key) &&
      selectedIndex > 0
    ) {
      setSelectedIndex(selectedIndex - 1);
    }
  }

  const handleOnClick = ({ index }) => {
    setSelectedIndex(index);
  };

  return (
    <ul onKeyDown={handleKeyDown} className="navigation" ref={parentRef}>
      {itemsList.map((item, index) => {
        return (
          <li
            className="item"
            key={index}
            tabIndex={0}
            onClick={() => handleOnClick({ index })}
          >
            {item}
          </li>
        );
      })}
    </ul>
  );
};
