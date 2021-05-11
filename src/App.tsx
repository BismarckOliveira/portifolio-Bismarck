import { About } from './components/About';
import { Header } from './components/Header';
import { Projects } from './components/Projects';
import GlobalStyle from './styles/global';


export default function App(){
  return (
    <>
      <Header/>
      <About/>
      <Projects/>

      <GlobalStyle />
    </>
  )
}