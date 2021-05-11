import React from 'react';
import logo from '../../images/logo.svg';
import { HeaderContent } from './HeaderContent';
import { Container, Content} from './styles'

export const Header: React.FC = () => {
  return (
    <>
      <Container>
        <Content>
          <div>
            <img src={logo} alt="LogoBismarck" />
            <h2>Bismarck <span>Oliveira</span></h2>  
          </div>
        
          <ul>
            <li>Sobre</li>
            <li>Projetos</li>
            <li>Contato</li>
          </ul>
        </Content>
      </Container>
      <HeaderContent />
    </>   
  )
}