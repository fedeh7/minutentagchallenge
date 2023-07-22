import { Message } from "./components/Message";
import { FocusableInput } from "./components/FocusableInput";
import { ImageGallery } from "./components/ImageGallery";
import { PlayerStatus } from "./components/PlayerStatus";
import { TeamsList } from "./components/TeamsList";

import "./App.css";
import { Grocery } from "./components/Grocery";
import { ListItemsForNavigation } from "./components/ListItemsForNavigation";
import { Rating } from "./components/Rating";

const links = [
  "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcREj22c-wMNL5IDmU99v8G7voUl17Yxm0JJqMLqttdPT4DnaB99zqVK7HWiNzjP3aZnzCEf-ikAqb2yiDk",
  "https://www.zooplus.es/magazine/wp-content/uploads/2021/06/Lombrices-en-gatitos.jpg",
  "https://www.gastrolabweb.com/u/fotografias/fotosnoticias/2022/9/23/35237.jpg",
]; // For ImageGallery component

const products = [
  { name: "Oranges", votes: 0 },
  { name: "Bananas", votes: 0 },
  { name: "Apples", votes: 0 },
  { name: "Lemons", votes: 0 },
]; // For Grocery component
export default function App() {
  return (
    <div className="App">
      {/* Render here each component from the "components" directory */}
      <h3>'Message' test</h3>
      <Message />
      <br />
      <h3>'FocusableInput' test</h3>
      <FocusableInput />
      <br />
      <h3>'ImageGallery' test</h3>
      <ImageGallery links={links} />
      <br />
      <h3>'PlayerStatus' test</h3>
      <PlayerStatus />
      <br />
      <h3>'TeamsList' test</h3>
      <TeamsList />
      <br />
      <h3>'Grocery' test</h3>
      <Grocery products={products} />
      <br />
      <h3>'ListItemsForNavigation' test</h3>
      <ListItemsForNavigation />
      <br />
      <h3>'Rating' test</h3>
      <Rating />
    </div>
  );
}
