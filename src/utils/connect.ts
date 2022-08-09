import mongoose from "mongoose";
import config from "config";

export default function connect() {
  const dbUri = config.get<string>("dbUri");

  return mongoose
    .connect(dbUri)
    .then(() => {
      console.log("Connected to database");
    })
    .catch((err) => {
      console.error(err, "Error connecting to database");
    });
}
