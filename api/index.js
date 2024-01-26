import express from "express";
import cors from "cors";
import corsOptions from "./config/corsOptions.js";

const PORT = process.env.PORT || 5555;
const app = express();

app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) => {
  return res.send("hello");
});

app.listen(PORT, () => {
  console.log(`server is listening on Port ${PORT}`);
});
