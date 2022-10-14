import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { ObjectId } from "mongoose";

export type TaskDocument = Task & Document;

@Schema()
export class Task {

    @Prop({ required: true })
    title: string;

    @Prop({ required: false, schema: [String] })
    tags: string[];

    @Prop({ required: false, default: false })
    done: boolean;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    assigned: mongoose.Schema.Types.ObjectId;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    userCreated: mongoose.Schema.Types.ObjectId;
}

export const TaskSchema = SchemaFactory.createForClass(Task);