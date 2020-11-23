import styled from 'styled-components';

export const StyledCardWrapper = styled.div`
    width: 9.375rem;
    height: 12.5rem;
    border: 0.105rem solid rgba(255,255,255,0.1);
    border-radius: 5px;
    box-shadow: 0.185rem 0.125rem 10px  0.625rem (0,0,0,0.2) ;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition : 0.2s;
    // yapılan hover in hızını ayarlamak için kullanılır
    /* margin: 0;
    padding : 0; */
    
    &:hover {
        transform : scale(1.1);
        // transform büyüyüp küçülme yapmaya sağlar
        box-shadow: 0.3rem 0.3rem 0.9rem rgba(0,0,0,0.1);
    }
`

export const StyledCardTitle = styled.p`
    color : red ;
    font-size : 0.5rem;
    margin : 0;
    padding : 0;
`
export const StyledCardImage = styled.img`
   width: auto;
    height: 85%;
`