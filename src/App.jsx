
import Header from "./components/Header"
import Types from './components/Types';
import Plants from './components/Plants';
import Service from "./components/Service";
import Galery from './components/Galery';
import Testimony from './components/Testimony';
import Contact from "./components/Contact";
import Blog from './components/Blog';
import Footer from "./components/Footer";


function App() {
  return (
    <>
    <Header/>
    <main>
      <Types/>
      <Plants/>
      <Service/>
      <Galery/>
      <Testimony/>
      <Contact/>
      <Blog/>
      <Footer/>
    </main>
    </>
  )
}

export default App
