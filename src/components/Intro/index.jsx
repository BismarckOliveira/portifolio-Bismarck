import React from 'react';
import ProjetoGit from '../../images/ProjetoGit.PNG'
import { Container , History, Project} from './styled';


const Intro = () => {
  return (
    <Container>
     <header>
      <span>Bismarck Oliveira</span>
      <h1>Desenvolvedor Front End</h1>
      <p>"Ser desenvolvedor é uma viagem onde a próxima parada é a solução de um problema”</p>
     </header>
     <History>
       <h1>Minha História</h1>
       <p>É um fato conhecido de todos que um 
         leitor se distrairá com o conteúdo de texto 
         legível de uma página quando estiver examinando 
         sua diagramação. A vantagem de usar Lorem Ipsum é que 
         ele tem uma distribuição normal de letras, ao contrário de 
         "Conteúdo aqui, conteúdo aqui", fazendo com que ele tenha uma 
         aparência similar a de um texto legível. Muitos softwares de publicação e 
         editores de páginas na internet agora usam Lorem Ipsum como texto-modelo 
         padrão, e uma rápida busca por 'lorem ipsum' mostra vários websites ainda 
         em sua fase de construção. Várias versões novas surgiram ao longo dos anos, 
         eventualmente por acidente, e às vezes de propósito (injetando humor, e coisas
          do gênero).</p>
     </History>
     <Project>
       <h1>Projetos</h1>
       <ul>
         <li>
           <img src={ProjetoGit} alt="GitExplorer"/>
         </li>
         <li>
           <img src={ProjetoGit} alt="GitExplorer"/>
         </li>
         <li>
           <img src={ProjetoGit} alt="GitExplorer"/>
         </li>
       </ul>
     </Project>
     
     
    </Container>
  )
}

export default Intro;