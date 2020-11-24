import React, { useEffect, useState } from "react";
import { CardList } from "./components/Cardlist";
import { SearchBox } from "./components/SearchBox";
import axios from "axios";
import "./App.css";

const apiKey = "3e4dee1e85013c94ee13a705f4f72c22";
const baseUrl = "https://api.themoviedb.org/3/search/movie";
const baseImageUrl = "https://image.tmdb.org/t/p/w500";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [searchKey, setSearchKey] = useState('Titanic');
  // yukardki searchkey usestateini boş strign bırakır isek sayfa ilk açılışta boş gelir. eğer b,r değer atar iseniz otomatik o sonuç ekranı gözükür

  // useEffect(()=>{
  //     axios.get('https://api.themoviedb.org/3/search/movie?api_key=3e4dee1e85013c94ee13a705f4f72c22&query=titanic&page=1')
  //         .then((res)=> setMovieList(res.data.results))
  //         .catch()
  //         .finally()
  //     },[])

  useEffect(() => {
    axios
      .get(baseUrl, {
        params: {
          api_key: apiKey,
          page: 1,
          query: searchKey,
        },
      })
      .then((res) => setMovieList(res?.data?.results))
      .catch()
      .finally();
  }, [searchKey]);

  return (
    <div className="container">
      <SearchBox setSearchKey={setSearchKey} />
      <CardList movieList={movieList} baseImageUrl={baseImageUrl} />
    </div>
  );
}
export default App;
