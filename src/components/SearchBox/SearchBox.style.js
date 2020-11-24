import styled from "styled-components";

export const StyledSearchWrapper = styled.div`
  align-self: center;
  padding: 10px;

  /* background-color : cyan; */
`;
export const StyledSearchInput = styled.input`
  border-radius: 0.2rem;
  margin-right: 0.5rem;
  border: 0.075rem solid rgba(255, 255, 255, 0.1);
  padding: 2px;
  color: ${(p) => p.color};
  // bu şekilde ana component dosyasından stil gönderebliriz.
  // burada dolar işarteinden sonra süsülü parantez içine yazmamızın sebebi çünkü üstten kesme  işaretler arasında kod yazdığımız için böyledir.

  /* diğer bir olasılık kullanma şeklide budur : 
  color: black;
${ p => p.isColored &&
    css`
       color: red;
    `
}
    border-radius: 0.3rem;
    margin-right: 0.5rem; */
`;
export const StyledSearchButton = styled.button`
  border-radius: 0.2rem;
  border: 0.075rem solid rgba(255, 255, 255, 0.1);
`;
// alttaki şu demektir. StyledButton isimli yeni bir buton oluştur. yukardaki ile aynı özellikleri taşısın ayruca bir de cursor olsun demektir.
export const StyledButton = styled(StyledSearchButton)`
  cursor: pointer;
`;

