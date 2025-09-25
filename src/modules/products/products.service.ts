import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Products } from './products.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private readonly productsRepository: Repository<Products>,
  ) {}

  // Lấy tất cả sản phẩm
  findAll(): Promise<Products[]> {
    return this.productsRepository.find();
  }

  // Lấy sản phẩm theo id
  findOne(id: number): Promise<Products | null> {
    return this.productsRepository.findOneBy({ id });
  }
}
