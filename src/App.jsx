import "./App.css";
import Delivery from "./components/Delivery";
import Featured from "./components/Featured";
import TopNav from "./components/TopNav";
import TopItems from "./components/TopItems";
import Meal from "./components/Meal";
import Categories from "./components/Categories";
import New from "./components/New";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div>
        <TopNav logo="Rio" />
        <Featured />
        <Delivery title="Quick Delivery App" />
        <TopItems title="Top Picks" />
        <Meal title="Meal" />
        <Categories title="Trending Categories" />
        <New />
        <Footer />
      </div>
    </>
  );
}

export default App;
