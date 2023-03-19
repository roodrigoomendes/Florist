
import Header from "./components/Header"
import Types from './components/Types';
import Plants from './components/Plants';
import Service from "./components/Service";
import Galery from './components/Galery';


function App() {
  return (
    <>
    <Header/>
    <main>
      <Types/>
      <Plants/>
      <Service/>
      <Galery/>
    </main>
    </>
  )
}

export default App
