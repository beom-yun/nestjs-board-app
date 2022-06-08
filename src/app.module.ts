import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsModule } from './boards/boards.module';
import { typeOrmConfig } from './boards/configs/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), BoardsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
