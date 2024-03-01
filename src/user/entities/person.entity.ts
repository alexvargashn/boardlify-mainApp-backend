import { Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Person extends Document {

    firstName: string;

    lastName: string;

    genre: string;

    birthDate: string; 
}

export const PersonSchema = SchemaFactory.createForClass(Person);