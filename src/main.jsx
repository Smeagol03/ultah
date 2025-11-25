import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from './hero.jsx'
import Umur from './umur.jsx'
import Berkas from './berkas.jsx'
import Hadiah from './hadiah.jsx'
import Footer from './footer.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero />
    <Umur />
    <Berkas />
    <Hadiah />
    <Footer />
  </StrictMode>,
)
