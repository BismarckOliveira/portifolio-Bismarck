import React from 'react';
import {Container , Content } from './styles';

export const About: React.FC = () => {
  return (
    <Container>
      <Content>
      <h1>Olá eu sou o Bismarck, <span>prazer em conhece-lo</span> 👋 </h1>
      <p>Meu nome completo é Bismarck de Oliveira Loureiro, tenho 25 anos e sou       <br />
         graduando em engenharia da computação, Estou em transição de carreira,       <br /> 
         em busca de oportunidades na área de desenvolvimento Front End, Engenharia   <br />
         de Software, trabalho desde meu 17 anos com informática, ja atuei no setor   <br />
         de infraestrutura e suporte.Sou um amante de programção e suas técnologias   <br />
         por esse motivo estou sempre buscando me capacitar como desenvolvedor!       <br />
         Atualmente tenho feito projetos Front-End com JavaScript, HTML, CSS,         <br />
         TypeScript, ReactJS, SASS, em paralelo formalizo meu aprendizado no Linkedin <br />
         e disponibilizo o codigo no Github.Para saber mais navegue até os projetos.  <br />
      </p>
      </Content>
    </Container>
  )
}