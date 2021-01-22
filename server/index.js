import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/users", userRoutes);
app.use("/posts", postRoutes);

const CONNECTION_URL =
  "mongodb+srv://root:1234@memory-project.2mpad.mongodb.net/memoryDB?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    })
  )
  .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);
