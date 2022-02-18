import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { User, TodoDocument } from './schemas/todo.schema';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel(User.name) private readonly model: Model<TodoDocument>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<User> {
    return await this.model.findById(id).exec();
  }

  async create(createTodoDto: CreateTodoDto): Promise<User> {
    return await new this.model({
      ...createTodoDto,
      createdAt: new Date(),
    }).save();
  }

  async update(id: string, updateTodoDto: UpdateTodoDto): Promise<User> {
    return await this.model.findByIdAndUpdate(id, updateTodoDto).exec();
  }

  async delete(id: string): Promise<User> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}

