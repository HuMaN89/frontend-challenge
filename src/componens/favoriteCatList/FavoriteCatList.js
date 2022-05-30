import { useState, useEffect } from "react";
import useCatService from "../../servises/CatServise";
import "./FavoriteCatList.css";

const FavoriteCatList = ({ favoriteList, setFavoriteList }) => {
  const { getCat } = useCatService();
  const [catList, setCatList] = useState([]);

  const onRequest = (id) => {
    getCat(id).then(onCatListLoaded);
  };

  const onCatListLoaded = (newCat) => {
    setCatList((catList) => [...catList, newCat]);
  };

  const deleteFavorite = (e) => {
    const el = e.currentTarget.dataset.id;

    setCatList((catList) => catList.filter((item) => item.id !== el));

    setFavoriteList((favoriteList) =>
      favoriteList.filter((item) => item !== el)
    );
  };
  useEffect(() => {
    favoriteList.map((item) => onRequest(item));
  }, []);

  return (
    <div className="cat-list">
      {catList.map((cat) => {
        return (
          <div className="cat-item" key={cat.id}>
            <img src={cat.thumbnail} alt={cat.id} />
            <div
              className="favorite-heart"
              onClick={deleteFavorite}
              data-id={cat.id}
            >
              {" "}
            </div>
          </div>
        );
      })}
      {favoriteList.length > 0 ? null : (
        <span className="more">котики не выбранны</span>
      )}
    </div>
  );
};

export default FavoriteCatList;
