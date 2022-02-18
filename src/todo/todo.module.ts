import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, TodoSchema } from './schemas/todo.schema';

@Module({
  providers: [TodoService],
  controllers: [TodoController],
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: TodoSchema }]),
  ],
})
export class TodoModule {}
