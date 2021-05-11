import styled from 'styled-components';

export const Container = styled.div`
 height: calc( 100vh - 6rem);
 max-width: 1280px;
 margin: 0 auto;
 padding: 0 2rem;

 display: flex;
 align-items: center;
 justify-content: space-between;


`;

export const Content = styled.div`
 
 h1 {
    font-size: 4rem;
    font-weight: bold;
    color: var(--green-500);
 }

 span { 
   font-size: 2.5rem;
   font-weight: 300;
 }

 

`;