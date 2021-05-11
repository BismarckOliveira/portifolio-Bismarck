import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

:root{
  
  --white:#FFFFFF;

  --gray-100: #e1e1e6;
  --gray-300: #a8a8b3;
  --gray-800: #2F2F33;
  --gray-850: #1F2729;
  --gray-900: #121214;

  --green-500: #48bb78;
  
}

html{
  @media (max-width: 1080px){
    font-size: 93.75%;
  }
  @media (max-width: 720px){
    font-size: 87.5%;
  }
}


*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

body{
  background: var(--gray-900);
  color: var(--white);
  font-family: 'Roboto', serif;
  
}

button{
  cursor: pointer;
}
`;
