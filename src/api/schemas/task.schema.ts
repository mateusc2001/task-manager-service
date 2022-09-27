import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type TaskDocument = Task & Document;

@Schema()
export class Task {

    @Prop({ required: true })
    title: string;

    @Prop({ required: false, schema: [String] })
    tags: string[];

    @Prop({ required: false, default: false })
    done: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(Task);