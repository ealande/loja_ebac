import RestaurantList from '../../containers/RestaurantList'
import Restaurant from '../../models/Restaurant'
import sushi from '../../assets/images/imagem.png'
import dolce from '../../assets/images/image 1.png'
import Header from '../../components/header'

const restaurantes: Restaurant[] = [
  {
    id: 1,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    name: 'Hioki Sushi',
    image: sushi,
    category: 'Japonesa',
    grade: 4.9
  },
  {
    id: 2,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    name: 'La Dolce Vita Trattoria',
    image: dolce,
    category: 'Italiana',
    grade: 4.6
  },
  {
    id: 3,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    name: 'La Dolce Vita Trattoria',
    image: dolce,
    category: 'Italiana',
    grade: 4.6
  },
  {
    id: 4,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    name: 'La Dolce Vita Trattoria',
    image: dolce,
    category: 'Italiana',
    grade: 4.6
  },
  {
    id: 5,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    name: 'La Dolce Vita Trattoria',
    image: dolce,
    category: 'Italiana',
    grade: 4.6
  },
  {
    id: 6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    name: 'La Dolce Vita Trattoria',
    image: dolce,
    category: 'Italiana',
    grade: 4.6
  }
]

const Home = () => (
  <>
    <Header />
    <RestaurantList restaurant={restaurantes} />
  </>
)

export default Home
