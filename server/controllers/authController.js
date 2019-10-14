const bcrypt = require("bcryptjs");

async function getUser(req, res) {
  if (req.session.user) {
    res.status(200).json(req.session.user);
  }
}

async function register(req, res) {
  const { firstName, lastName, age, phoneNum, username, password } = req.body;
  const db = req.app.get("db");

  const foundUser = await db.auth.checkForUsername([username]);

  if (foundUser[0]) {
    res.status(200).json("Username Taken");
  } else {
    const salt = await bcrypt.genSaltSync(10);
    const hash = await bcrypt.hashSync(password, salt);
    const newUser = await db.auth.registerUser([
      firstName,
      lastName,
      age,
      phoneNum,
      username,
      hash
    ]);

    req.session.user = {
      user_id: newUser[0].user_id,
      username: newUser[0].username,
      firstName: newUser[0].first_name,
      lastName: newUser[0].last_name,
      age: newUser[0].age,
      phoneNum: newUser[0].phone_number
    };

    res.status(200).json(req.session.user);
  }
}

async function login(req, res) {
  const { username, password } = req.body;
  const db = req.app.get("db");

  const foundUser = await db.auth.checkForUsername([username]);

  if (!foundUser[0]) {
    res.status(400).json("Username or Password incorrect.");
  } else {
    const isAuthenticated = bcrypt.compareSync(password, foundUser[0].hash);
    if (!isAuthenticated) {
      res.status(403).json("Username or Password incorrect.");
    } else {
      req.session.user = {
        user_id: foundUser[0].user_id,
        username: foundUser[0].username,
        firstName: foundUser[0].first_name,
        lastName: foundUser[0].last_name,
        age: foundUser[0].age,
        phoneNum: foundUser[0].phone_number,
        url: foundUser[0].url
      };
      res.status(200).json(req.session.user);
    }
  }
}

async function logout(req, res) {
  req.session.destroy();
  res.sendStatus(200);
}

module.exports = {
  getUser,
  register,
  login,
  logout
};
