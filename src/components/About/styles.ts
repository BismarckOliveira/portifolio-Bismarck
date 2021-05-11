import styled from 'styled-components';

export const Container = styled.section`

background: linear-gradient(to bottom, var(--gray-900), var(--gray-800));
height: calc(100vh);



`;

export const Content = styled.div`
height: 100%;
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
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 2.25rem;
}

`;
