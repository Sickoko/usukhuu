console.log("my ecommerce backend");

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const menuApi = require("./routes/menu-api");
const adminApi = require("./routes/admin-api");

const app = express();
const PORT = 8080;
const MONGODB_CONNECTION_STRING =
  "mongodb+srv://Usukhuusk:Sicko1219@clusteridk.mi30slj.mongodb.net/ecommerce";

app.use(cors());
app.use(express.json());
app.use("/menu", menuApi);
app.use("/admin", adminApi);

app.get("/", (request, response) => {
  response.send("<h1>Ecommerce-backend</h1>");
});
app.listen(PORT, () => {
  mongoose
    .connect(MONGODB_CONNECTION_STRING)
    .then(console.log("Database successfully connected"))
    .catch((error) => console.error(error));
  console.log(`Your backend server is running on http://localhost:${PORT}`);
});
