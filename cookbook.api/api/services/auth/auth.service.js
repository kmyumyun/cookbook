const jwt = require("jsonwebtoken");
const config = require("../../../settings.config.json");

exports.verifyToken = (req, res, next) => {
  let token = req.headers["authorization"].replace("Bearer ", "");

  if (!token) {
    return res.status(403).send({ message: token });
  }

  jwt.verify(token, config.appSettings.jwtSecret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized!" });
    }
    req.userId = decoded.id;
    next();
  });
};
