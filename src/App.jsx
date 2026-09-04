import './App.css'
import { Footer } from './components/Footer'
import Info from './components/Info'
import imageDesktop from "./assets/image-header-desktop.jpg"
import imageMobile from "./assets/image-header-mobile.jpg"

function App() {
  return (
    <>
    <main className="card">
      <picture className='card__picture'>
        <source media='(min-width: 64em)' srcSet={imageDesktop}/>
        <img src={imageMobile} alt="" className='card__image' aria-hidden="true"/>
      </picture>
      <Info />
    </main>
    <Footer/>
    </>
  )
}

export default App
