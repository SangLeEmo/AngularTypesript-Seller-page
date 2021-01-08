export class Product {
  id: string;
  name: string;
  price: number;
  size: string;
  image: string;

  constructor(
    id?: string,
    name?: string,
    price?: number,
    size?: string,
    image?: string
  ) {
    this.id = id || "";
    this.name = name || "";
    this.price = price || 0;
    this.size = size || "";
    this.image = image || "";
  }
}
