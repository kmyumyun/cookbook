const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

//misc items
require("./resources/util");

// create new db.config.js file with your db settings
const dbConfig = require("./resources/config/db.config");

// routes
const routes = require("./api/routes/cookBookRoutes");
const authRoute = require("./api/routes/auth.route");

const app = express();
const port = process.env.PORT || 3000;
const corsOptions = {
    origin: "http://localhost:8081"
};

mongoose.Promise = global.Promise;
mongoose
    .connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true  
    });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use("/tasks", routes);
app.use("/auth", authRoute);

app.get("/", (req, res) => {
    res.json({message: "Welcome to test app!"});
});

app.listen(port, () => {
    console.log("Server is listening on port: ", port);
});