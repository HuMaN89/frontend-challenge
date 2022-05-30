import { useHttp } from "../hooks/http.hook";

const useCatService = () => {
  const { loading, setLoading, error, request, clearError } = useHttp();

  const _apiBase = "https://api.thecatapi.com/v1/images/";
  const getCats = async (offset = 1) => {
    const res = await request(
      `${_apiBase}search?limit=15&mime_types=jpg,png&order=Asc&size=small&page=${offset}`
    );
    return res.map(_transformCats);
  };

  const getCat = async (id) => {
    const res = await request(`${_apiBase}${id}`);
    return _transformCats(res);
  };
  const _transformCats = (cat) => {
    return {
      thumbnail: cat.url,
      id: cat.id,
    };
  };
  return {
    error,
    loading,
    clearError,
    getCats,
    getCat,
  };
};

export default useCatService;
