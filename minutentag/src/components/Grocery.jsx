/**
 * You have a Grocery component, which receives a list of products, each one with name and votes.
 * - The app should render an unordered list, with a list item for each product.
 * - Products can be upvoted or downvoted.
 * By appropriately using React state and props, implement the upvote/downvote logic. Keep the state in the topmost component, while the Product component should accept props.
 *
 * For example, passing the following array as products prop to Grocery
 * [{ name: "Oranges", votes: 0 }, { name: "Bananas", votes: 0 }]
 * and clicking the '+' button next to the Oranges should result in HTML like:
 *
 *   <ul>
 *     <li>
 *       <span>Oranges - votes: 1</span>
 *       <button>+</button>
 *       <button>-</button>
 *     </li>
 *     <li>
 *       <span>Bananas - votes: 0</span>
 *       <button>+</button>
 *       <button>-</button>
 *     </li>
 *   </ul>
 */

import { useState } from "react";

const Product = ({ name, votes, upVoteProduct, downVoteProduct }) => {
  const handlePlus = () => {
    upVoteProduct({ name });
  };

  const handleMinus = () => {
    downVoteProduct({ name });
  };

  return (
    <li>
      <span>
        {name} - votes: {votes}
      </span>
      <button onClick={handlePlus}>+</button>
      <button onClick={handleMinus}>-</button>
    </li>
  );
};

export const Grocery = ({ products }) => {
  const formattedProducts = products.reduce((accumulator, currentGrocery) => {
    const { name, votes } = currentGrocery;
    return { ...accumulator, [name]: votes };
  }, {});

  const [groceries, setGroceries] = useState(formattedProducts);
  const groceryList = Object.keys(groceries);

  const upVoteProduct = ({ name }) => {
    const newGorceries = { ...groceries };
    newGorceries[name] += 1;
    setGroceries(newGorceries);
  };

  const downVoteProduct = ({ name }) => {
    const newGorceries = { ...groceries };
    newGorceries[name] -= 1;
    setGroceries(newGorceries);
  };

  return (
    <ul>
      {/* Render an array of products, which should call onVote when + or - is clicked */}
      {groceryList.map((name, index) => {
        return (
          <Product
            name={name}
            votes={groceries[name]}
            upVoteProduct={upVoteProduct}
            downVoteProduct={downVoteProduct}
            key={index}
          />
        );
      })}
    </ul>
  );
};
