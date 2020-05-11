const jwt = require("jsonwebtoken");
const config = require("../../resources/config/settings.config.json");
const message = require("../../resources/messages.resource.json");

exports.verifyToken = (req, res, next) => {
  let bearerToken = req.headers["authorization"];

  if (!bearerToken) {
    return res.status(403).send({ error: message.validate.authentication.token.missing });
  }

  let actualToken = bearerToken.replace("Bearer ", "");
  jwt.verify(actualToken, config.appSettings.jwtSecret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ error: message.validate.authentication.token.invalid });
    }
    req.userId = decoded.id;
    next();
  });
};