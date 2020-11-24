import React ,{useState} from 'react'
import {StyledSearchButton , StyledSearchWrapper , StyledSearchInput} from './SearchBox.style';

export const SearchBox = ({setSearchKey}) => {
    const [inputValue, setInputValue] = useState("");

    return (
        <StyledSearchWrapper>
            <StyledSearchInput color='#1f1f1f' isColored={false} onChange={(e)=>setInputValue(e.target.value)}/>
            {/* // yukardaki e kısaltması evetn den gelmektedir */}
            <StyledSearchButton onClick={() => setSearchKey(inputValue)} >Search</StyledSearchButton>
            
        </StyledSearchWrapper>
    )
}

 
