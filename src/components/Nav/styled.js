import styled from 'styled-components';


export const Container = styled.div`
max-width: 30vh;
display: flex;
height: 100vh;
flex-direction: column;
justify-content: space-between;
background: #2F4F4F;
padding: 20px;

`;

export const Header = styled.div`


display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

img{
  margin-top: 30px;
  border-radius: 50%;
  width: 120px;
  margin-bottom: 20px;
  
}

h1{
   font-size: 20px;
   color: white;
  
 }
`;

export const Section = styled.div`
display: flex;
justify-content: center;
align-items: center;

ul{
  li {
    color: white;
    margin-bottom: 10px;
    font-size: 24px;
  }
}


`;


export const Footer = styled.div`
display: flex;
justify-content: center;

`;
