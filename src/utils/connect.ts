import mongoose from "mongoose";
import config from "config";
import logger from "./logger";

const connect = async () => {
  const dbUri = config.get<string>("dbUri");

  try {
    await mongoose.connect(dbUri);
    logger.info("Database connection successful");
  } catch (err) {
    logger.error(err, "Error connecting to database");
    process.exit(1);
  }
};

export default connect;
