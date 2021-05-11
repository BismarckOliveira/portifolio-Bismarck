import React from 'react';
import {Container , Content } from './styles';

export const About: React.FC = () => {
  return (
    <Container>
      <Content>
      <h1>Olá eu sou o Bismarck, <span>prazer em conhece-lo</span> 👋 </h1>
      <p>Meu nome completo é Bismarck de Oliveira Loureiro, tenho 25 anos e sou       
         graduando em engenharia da computação, Estou em transição de carreira,       
         em busca de oportunidades na área de desenvolvimento Front End, Engenharia  
         de Software, trabalho desde meu 17 anos com informática, ja atuei no setor   
         de infraestrutura e suporte.Sou um amante de programção e suas técnologias   
         por esse motivo estou sempre buscando me capacitar como desenvolvedor!       
         Atualmente tenho feito projetos Front-End com JavaScript, HTML, CSS,         
         TypeScript, ReactJS, SASS, em paralelo formalizo meu aprendizado no Linkedin 
         e disponibilizo o codigo no Github.Para saber mais navegue até os projetos.  
      </p>
      <a href="https://1drv.ms/b/s!AhpnaNg6PL6tg4d1xDZR4eeGO6YRgQ?e=enySnG" 
        target="_blank"
        rel='noreferrer'>
        DONWLOAD CV!
      </a>
      </Content>
    </Container>
  )
}