import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'
import Rotas from './routes'
import Footer from './components/Footer'
import { ShoppingCartProvider } from './context/ShoppingCartContext'

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <BrowserRouter>
          <GlobalCss />
          <Rotas />
          <Footer />
        </BrowserRouter>
      </ShoppingCartProvider>
    </>
  )
}

export default App
