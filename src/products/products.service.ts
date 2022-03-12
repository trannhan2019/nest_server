import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Products } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private readonly productsRepository: Repository<Products>,
  ) {}

  create(createProductDto: CreateProductDto): Promise<Products> {
    const newProduct = this.productsRepository.create(createProductDto); //short hand
    // const user = new User();
    // user.firstName = createUserDto.firstName;
    // user.lastName = createUserDto.lastName;
    return this.productsRepository.save(newProduct); //insert
  }

  findAll(): Promise<Products[]> {
    return this.productsRepository.find();
  }

  async findOne(id: number): Promise<Products> {
    try {
      const product = await this.productsRepository.findOneOrFail(id);
      return product;
    } catch (error) {
      throw error;
    }
  }

  async update(
    id: number,
    updateProductDto: UpdateProductDto,
  ): Promise<Products> {
    const newProduct = await this.findOne(id);
    newProduct.title = updateProductDto.title;
    newProduct.description = updateProductDto.description;
    return this.productsRepository.save(newProduct);
  }

  async remove(id: number): Promise<Products> {
    const product = await this.findOne(id);
    return this.productsRepository.remove(product);
  }
}
