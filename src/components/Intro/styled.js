import styled from 'styled-components';
import banner from '../../images/banner.png';

export const Container = styled.div`
width: 100%;
margin-left: 30vh;
background: #f6f5f7;


header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
  background-image: url(${banner});

  span{
   font-size: 14px;

  }

  h1{
    padding-bottom: 8px;
  }
}

section{
  background: #f6f5f7;
  display: flex;
  height: 100%;
  padding: 80px 30px 0px 30px;
  
  h1{
    color: black;
    font-size: 2.5rem;
  }

  p{
    margin-left: 120px;
    color: black;
  }
}
`;

export const History = styled.div`

  background: #f6f5f7;
  display: flex;
  
  padding: 80px 30px 80px 30px;
  
  h1{
    color: black;
    font-size: 2.5rem;
  }

  p{
    margin-left: 120px;
    color: black;
  }


`;

export const Project = styled.div`

 
  background: #f6f5f7;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 30px 80px 30px;

  
  h1{
    color: black;
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  p{
    margin-left: 120px;
    color: black;
  }

  ul{
    display: flex;
    width: 100%;
    
    li{
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 200px;
      margin-bottom: 2rem;
      
      img{
        border-radius: 5px;
        height: 100%;
      }
    }
  }
`;

export const Skills = styled.div`
padding-top: 2rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: #f6f5f7;

h1{
    color: black;
    font-size: 2.5rem;
    margin-bottom: 2rem;
}

.skills{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.card {
    margin: 20px;
    height: 200px;
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 5px;
    padding: 40px;
    color: black;
 
  img{
    flex: 1;
    width: 100%;
    height: 100%;
    margin-bottom: 5px;
  }
   
}

`;