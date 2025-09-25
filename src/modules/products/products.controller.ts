import { Controller, Get, Render } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  @Render('products') // tên file hbs
  async getAll() {
    const products = await this.productsService.findAll();
    return { products }; // truyền dữ liệu vào view
  }
}
