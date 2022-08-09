import express from "express";
import config from "config";

const app = express();
const PORT = config.get<number>("port");

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`),
);
