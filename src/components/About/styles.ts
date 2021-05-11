import styled from 'styled-components';

export const Container = styled.section`
margin-top: 2rem;
background: linear-gradient(to bottom, var(--gray-900), var(--gray-800));
height: calc(100vh);



`;

export const Content = styled.div`
height: 100%;
max-width: 1120px;
margin: 0 auto;
padding: 0 2rem;
color: var(white);


flex-direction: column;
display: flex;
align-items: center;
justify-content: center;

h1{
  font-size: 2.5rem;
  margin-bottom: 2rem;

  span{
    color: var(--green-500);
  }
}

p{
  text-align: justify;
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 2.25rem;
}

a{
  margin-top: 2rem;
  border: 2px solid var(--green-500);
  border-radius: 1.5rem;
  text-decoration:none;

  font-size: 1rem;
  font-weight: bold;
  color: var(--green-500);

  padding: 1rem 2.5rem;
  transition: background-color 0.3s;
  transition: color 0.3s; 

  &:hover{
    background: var(--green-500);
    color: var(--white);
  }
}

`;
