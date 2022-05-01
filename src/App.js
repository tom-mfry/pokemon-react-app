import "./App.css";
import NavBar from "./components/NavBar";
import CardList from "./components/CardList";
import CompareCards from "./components/CompareCards";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div>
      <NavBar />
      <CompareCards />
      <SearchBar />
      <CardList />
    </div>
  );
}

export default App;

// .input-search{
//   height: 30px;
//   border-style: none;
//   padding: 5 20px;
//   font-size: 18px;
//   letter-spacing: 2px;
//   outline: none;
//   border-radius: 25px;
//   padding-right: 40px;
//   padding-left: 10px;
//   color:rgb(99, 99, 99);
//   width: 300px;
//   background-color: transparent;
//   border-bottom:5px solid rgba(197, 25, 25, 0.5);
//   border-radius: 15px;
// }
