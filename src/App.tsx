import { About } from './components/About';
import { Header } from './components/Header';
import { HeaderContent } from './components/HeaderContent';
import { Projects } from './components/Projects';
import GlobalStyle from './styles/global';


export default function App(){
  return (
    <>
      <Header/>
      <HeaderContent/>
      <About/>
      <Projects/>

      <GlobalStyle />
    </>
  )
}