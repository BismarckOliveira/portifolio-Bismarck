import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;

`;

export const ButtonMenu = styled.button`

background: inherit;
border: none;


svg{
  font-size: 2.25rem;
}

`;

export const NavMenu = styled.ul`  
position: absolute;
list-style: none;

  li{
     
     cursor: pointer;
     font-weight: 300;
     transition: color 0.2s;

  

    &:hover{
       color: var(--green-500);
     }
  }

  

`;