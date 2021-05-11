import React from 'react';
import { NavMenu ,ButtonMenu, Container } from './style';
import { GrMenu } from 'react-icons/gr';

export const NavResponsive: React.FC = () => {


  return (
    <Container>
      <ButtonMenu><GrMenu color="#fff" /></ButtonMenu>
      <NavMenu>
        <li>Sobre</li>
        <li>Projetos</li>
        <li>Contato</li>
      </NavMenu>
    </Container>
  )
}