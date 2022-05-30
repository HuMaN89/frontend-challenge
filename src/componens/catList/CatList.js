import { useState, useEffect } from "react";
import "./CatList.css";
import useCatService from "../../servises/CatServise";

const CatList = (props) => {
  const { favoriteList, setFavoriteList } = props;
  const { getCats } = useCatService();
  const [offset, setOffset] = useState(0);
  const [catList, setCatList] = useState([]);

  const [down, setDown] = useState(false);

  const onRequest = (initial) => {
    onCatListLoading();
    getCats(offset).then(onCatListLoaded);
  };

  const onCatListLoading = () => {
    setOffset(offset + 1);
  };
  const onCatListLoaded = (newCatList) => {
    setCatList((catList) => [...catList, ...newCatList]);
  };

  const addToFavorite = (e) => {
    const el = e.currentTarget.dataset.id;
    e.currentTarget.className = "favorite-heart";
    setFavoriteList((favoriteList) => [...favoriteList, el]);
    e.currentTarget.parentNode.className = `${e.currentTarget.parentNode.className} selected`;
  };

  const showCatsByScroll = () => {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight - 1
    ) {
      setDown(true);
    }
  };

  window.addEventListener("scroll", showCatsByScroll);

  useEffect(() => {
    onRequest(offset);
    onRequest(offset);
  }, []);

  useEffect(() => {
    if (down) {
      onRequest(offset);
      setDown(false);
    }
  }, [down]);

  return (
    <>
      <div className="cat-list">
        {catList.map((cat) => {
          return (
            <div className="cat-item" key={cat.id}>
              <img src={cat.thumbnail} alt={cat.id} />
              <div className="heart" onClick={addToFavorite} data-id={cat.id}>
                {" "}
              </div>
            </div>
          );
        })}
      </div>
      <span className="more">... загружаем еще котиков ...</span>
    </>
  );
};

export default CatList;
