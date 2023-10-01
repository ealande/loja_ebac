class Restaurant {
  name: string
  description: string
  image: string
  id: number
  category: string
  grade: number

  constructor(
    name: string,
    id: number,
    description: string,
    image: string,
    category: string,
    grade: number
  ) {
    this.name = name
    this.description = description
    this.image = image
    this.id = id
    this.category = category
    this.grade = grade
  }
}

export default Restaurant
