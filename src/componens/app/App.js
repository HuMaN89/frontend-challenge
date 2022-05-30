import { useState } from "react";
import Header from "../header/Header";
import CatList from "../catList/CatList";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import FavoriteCatList from "../favoriteCatList/FavoriteCatList";

function App() {
  const [favoriteList, setFavoriteList] = useState([]);

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route
          path="/frontend-challenge"
          exact
          element={
            <CatList
              favoriteList={favoriteList}
              setFavoriteList={setFavoriteList}
            />
          }
        />
        <Route
          path="favorite"
          element={
            <FavoriteCatList
              favoriteList={favoriteList}
              setFavoriteList={setFavoriteList}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
