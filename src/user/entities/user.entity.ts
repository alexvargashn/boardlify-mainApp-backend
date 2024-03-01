import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class User extends Document {

    
    name: string;

    username: string;

    @Prop({
        unique: true,
        index: true
    })
    email: string;

    password: string; 
}

export const UserSchema = SchemaFactory.createForClass(User);
