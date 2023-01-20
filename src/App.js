import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx"
import ListBeersPage from "./pages/ListBeersPage.jsx"
import RandomBeerPage from "./pages/RandomBeerPage.jsx"
import NewBeerPage from "./pages/NewBeerPage.jsx"
import SingleBeerPage from './pages/SingleBeerPage';
import ErrorPage from './pages/ErrorPage';


function App() {
  

  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/beers" element={<ListBeersPage/>} />
      <Route path="/random-beer" element={<RandomBeerPage/>} />
      <Route path="/new-beer" element={<NewBeerPage/>} />
      <Route path="/beers/:beerId" element={<SingleBeerPage/>} />

      <Route path="*" element={<ErrorPage/>} />
    </Routes>
    </div>
  );
}

export default App;
