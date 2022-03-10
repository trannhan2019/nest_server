import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cats.dto';
import { Cat } from './entities/cats.entites';

@ApiTags('cats')
@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @ApiOkResponse({ type: Cat, isArray: true })
  @Get()
  findAll(): Cat[] {
    return this.catsService.findAll();
  }

  @ApiOkResponse({ type: Cat, description: 'the cat' })
  @Get(':id')
  findById(@Param('id') id: string): Cat {
    return this.catsService.findById(Number(id));
  }

  @ApiCreatedResponse({ type: Cat })
  @Post()
  create(@Body() body: CreateCatDto): Cat {
    return this.catsService.create(body);
  }
}
