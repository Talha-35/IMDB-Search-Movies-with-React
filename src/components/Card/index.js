import React from 'react' ;
import { StyledCardWrapper ,StyledCardTitle , StyledCardImage } from './Card.style';

export const Card = ({title , image , date, popularity}) => {
    return (
        <StyledCardWrapper>
            <StyledCardImage src={image} />
            <StyledCardTitle>{title}</StyledCardTitle>
            <StyledCardTitle>{date}</StyledCardTitle>
            {/* <StyledCardTitle>{popularity}</StyledCardTitle> */}
        </StyledCardWrapper>
    )
}


// adult: false
// backdrop_path: "/5Iw7zQTHVRBOYpA0V6z0yypOPZh.jpg"
// genre_ids: (3) [878, 28, 12]
// id: 181808
// original_language: "en"
// original_title: "Star Wars: The Last Jedi"
// overview: "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order."
// popularity: 103.873
// poster_path: "/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg"
// release_date: "2017-12-13"
// title: "Star Wars: The Last Jedi"
// video: false
// vote_average: 6.9
// vote_count: 11249