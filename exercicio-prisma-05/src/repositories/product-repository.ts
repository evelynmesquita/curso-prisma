import { products } from "@prisma/client";
import prisma from "../database/database";

const TABLE_NAME = "products";
export type CreateProducts = Omit<products, "id">

async function getProducts() {
  const product = await prisma.products.findMany();
  return product;
}

async function getProduct(id: number) {
  return prisma.products.findFirst({
    where: { id }
  })
}

async function createProduct(product: CreateProducts) {
  return prisma.products.create({
    data: product,
  });
}

const productRepository = {
  getProduct,
  getProducts,
  createProduct
}

export default productRepository;