import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cats.dto';
import { Cat } from './entities/cats.entites';

@Injectable()
export class CatsService {
  private cats: Cat[] = [{ id: 0, name: 'my name' }];

  findAll(): Cat[] {
    return this.cats;
  }

  findById(userId: number): Cat {
    return this.cats.find((cat) => cat.id === userId);
  }

  create(createUserDto: CreateCatDto): Cat {
    const newCat = { id: Date.now(), ...createUserDto };
    this.cats.push(newCat);
    return newCat;
  }
}
