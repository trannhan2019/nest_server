import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormConfig from 'ormconfig';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot(ormConfig), ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
