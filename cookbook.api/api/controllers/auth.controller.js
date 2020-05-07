const mongoose = require("mongoose");
const UserModel = require("../models/auth/user.model");
const config = require("../../settings.config.json");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.createUser = function(req, res){
    let newUser = new UserModel(req.body);
    newUser.save((err, user) => {
        if(err){
            res.send(err);
        }

        res.json(`User with data: ${user} created!`);
    });
};

exports.getAllUsers = function (req, res) {
    UserModel.find({}, function(err, result) {
        if (err) {
            res.send(err);
          } else {
            res.send(result);
          }
    })
}

exports.login = function(req, res) {
    UserModel.findOne({
        username: req.body.username
      })
        .exec((err, user) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
    
          if (!user) {
            return res.status(404).send({ message: "User Not found." });
          }
    
          var validPassword = bcrypt.compareSync(
            req.body.password,
            user.password
          );
    
          if (!validPassword) {
            return res.status(401).send({
              accessToken: null,
              message: "Invalid Password!"
            });
          }
    
          var token = jwt.sign({ id: user.id }, config.appSettings.jwtSecret, {
            expiresIn: 10 // 24 hours
          });
    
          res.status(200).send({
            id: user._id,
            username: user.username,
            email: user.email,
            accessToken: token
          });
        });
};

// TODO: check if username is unique
exports.register = function(req, res) {
    const user = new UserModel({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
      });
    
      user.save((err, user) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
        
        res.send({ message: `User: ${user.username} was registered successfully!` });
      });
};