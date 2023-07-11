import mongoose from "mongoose";
import { topicSchema } from "./schema.js";

export const topicModel = mongoose.model("post", topicSchema);

//curl --request POST http://localhost:3001/topics --header "Content-Type: application/json" --data '{"title": "Mi primer post", "body": "Este es mi primer post desde la terminal", "author": "Guillermo Rodas"}'