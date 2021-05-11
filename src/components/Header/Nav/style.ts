import styled from 'styled-components';


export const NavMenu = styled.ul`  
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

  

`;