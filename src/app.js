require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const authRoute = require("./routes/auth-route");
const emotionRoute = require("./routes/emotion-route");
const tagsRoute = require("./routes/tags-route");
const memoRoute = require("./routes/memo-route");

const errorMiddleware = require("./middlewares/error");
const notFoundMiddleware = require("./middlewares/not-found");
const limiter = require("./middlewares/rate-limit");
const authenticate = require("./middlewares/authenticate");

const app = express();

app.use(cors());
app.use(express.json());
BigInt.prototype.toJSON = function () {
  return this.toString();
};
// app.use(limiter);
app.use(morgan("dev"));

app.use("/auth", authRoute);
app.use("/emotion", authenticate, emotionRoute);
app.use("/tags", authenticate, tagsRoute);
app.use("/memo", authenticate, memoRoute);

app.use(errorMiddleware);
app.use(notFoundMiddleware);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
