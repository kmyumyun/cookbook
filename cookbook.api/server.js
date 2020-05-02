const express = require("express");
const app = express();

const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./api/routes/cookBookRoutes");

mongoose.set('useUnifiedTopology', true);
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/CookBookDB",  {useNewUrlParser: true});

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use("/tasks", routes);
app.listen(port, () => {
    console.log("Server is listening on port: ", port);
});