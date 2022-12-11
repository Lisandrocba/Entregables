import { faker } from "@faker-js/faker/locale/es";

export function mockProducts() {
  const product = {
    name: faker.commerce.product(),
    price: faker.commerce.price(),
    stock: faker.commerce.price(5, 40, 0),
    foto: faker.image.business(),
  };

  return product;
}
