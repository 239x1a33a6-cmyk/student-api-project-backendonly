const express = require("express");
const connectMongoDB = require("./connection");
const cors = require("cors");
const studentRouter = require("./routes/student.routes");
const app = express();
require("dotenv").config();
app.use(express.urlencoded());
app.use(cors());
connectMongoDB(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use("/students", studentRouter);

app.listen(process.env.PORT, () => console.log("Server started "));
