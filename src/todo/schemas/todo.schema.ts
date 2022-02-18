import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TodoDocument = User & Document;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop()
  phone: string;

  @Prop()
  password: string;

  @Prop()
  tennat?: string;

  @Prop()
  ip?: string;

  @Prop()
  browser_info?: string;

  @Prop()
  browser_id?: string;

  @Prop()
  completedAt?: Date;

  @Prop({ required: true })
  createdAt: Date;

  @Prop()
  deletedAt?: Date;
}

export const TodoSchema = SchemaFactory.createForClass(User);