class Produto {
  name: string
  description: string
  image: string
  id: number
  price: number
  quantity: number

  constructor(
    name: string,
    id: number,
    description: string,
    image: string,
    price: number,
    quantity: number
  ) {
    this.name = name
    this.description = description
    this.image = image
    this.id = id
    this.price = price
    this.quantity = quantity
  }
}

export default Produto
