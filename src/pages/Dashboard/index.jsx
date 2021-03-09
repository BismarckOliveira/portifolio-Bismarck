import React from 'react';
import { Container, Header, Section, Footer} from './styled'

import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai'

const Dashboard = () => {
  return( 
    <body>
          <Container>
      <Header>
        <img src="https://avatars.githubusercontent.com/u/68343542?s=460&u=83673968d8696382ff401dcdb68a213a8ba03d9b&v=4" 
        alt="bismarck"/>
        <h1>Bismarck Oliveira</h1>
      </Header>
      <Section>
       <ul>
         <li>Sobre</li>
         <li>Projetos</li>
         <li>Formação</li>
         <li>Skills</li>
       </ul>
      </Section>
      <Footer>
        <AiOutlineGithub size={30} color="white"/>
        <AiFillLinkedin  size={30} color="white"/>  
      </Footer>      
    </Container>

    </body>
  )

   
}

export default Dashboard;