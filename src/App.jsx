import data from "../Items";
import Header from "./components/Header.jsx";
import Item from "./components/Item.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Header />
      <div className="container py-4 d-flex flex-wrap gap-4">
        {data.map((item) => (
          <Item item={item} key={item.itemId} />
        ))}
      </div>
    </>
  );
}

export default App;
