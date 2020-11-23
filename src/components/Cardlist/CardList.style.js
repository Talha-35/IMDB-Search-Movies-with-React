import styled from 'styled-components';

export const StyledCardList = styled.div`
   display: flex;
   // bu şekilde yan yana dizmeyi sğlarız
   flex-wrap : wrap;
   // bu şekilde yan yana dizdikten sonra taşan resimleri aşağı satıra atarız
    gap : 1rem ; 
   // bu şekilde de resimler arasına boşluk bırakırız
    justify-content : center;
`
