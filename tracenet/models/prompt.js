import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    age: {
        type: Number,
        required: [true, 'Age is required.'],
    },
    gender:{
        type: String,
        required: [true, 'Gender is required.'],
    },
    location: {
        type: String,
        required: [true, 'Location is required.'],
    },
    contactInfo: {
        type: String,
        required: [true, 'Contact Info is required.'],
    },
    description: {
        type: String,
        required: [true, 'Description is required.'],
    }
});

const Prompt = models.Prompt || model ('Prompt', PromptSchema);

export default Prompt;