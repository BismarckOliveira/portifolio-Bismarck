import styled from 'styled-components';

export const Container = styled.header`
 height: 6rem;

`;



export const Content = styled.div`
height: 5rem;
max-width: 1280px;
padding: 1rem 2rem 0;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: space-between;
font-size: 1.25rem;

 div{
  display: flex;
  align-items: center;
  justify-content: center;
  
  img{
   width: 3rem;
   height: 3rem;
 }

  h2{
    margin-left: 1rem;
    span{
      color: var(--green-500);
    }
  }
 }

ul {
  display: flex;
  list-style: none;

  li{
    cursor: pointer;
    font-weight: 300;
    transition: color 0.2s;

    & + li{
    margin-left: 3rem;
    
  }

  &:hover{
    color: var(--green-500);
  }
 }
 
}
`;