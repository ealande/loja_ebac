class Produto {
  name: string
  description: string
  image: string
  id: number

  constructor(name: string, id: number, description: string, image: string) {
    this.name = name
    this.description = description
    this.image = image
    this.id = id
  }
}

export default Produto
