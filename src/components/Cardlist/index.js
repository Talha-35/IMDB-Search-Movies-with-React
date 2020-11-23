import { Card } from "../Card";

import { StyledCardList } from "./CardList.style";


export const CardList = ({ baseImageUrl, movieList }) => {

  return (
    <StyledCardList>
      {movieList?.map((movie, index) => (
        <Card
          key={index}
          title={movie.title}
          image={baseImageUrl + movie.poster_path}
          date={movie.release_date}
          // popularity = {popularity}
        />
      ))}
    </StyledCardList>
  );
};

//useEffect  - Axios ile data çekilecek
// gelen data usestate alınacak
// map ile ekrana basılacak
