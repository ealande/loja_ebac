import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'
import Rotas from './routes'
import Footer from './components/Footer'
import { store } from './store'
import ShoppingCart from './components/ShoppingCart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
        <Footer />
        <ShoppingCart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
