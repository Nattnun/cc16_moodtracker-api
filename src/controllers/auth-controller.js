const catchError = require("../utils/catch-error");
const createError = require("../utils/create-error");
const userService = require("../services/user-service");
const hashService = require("../services/hash-service");
const jwtService = require("../services/jwt-service");
const dataService = require("../services/default-data-service");

exports.register = catchError(async (req, res, next) => {
  const existsUser = await userService.findUserByEmailOrMobile(
    req.body.email || req.body.mobile
  );

  if (existsUser) {
    createError("EMAIL_MOBILE_IN_USE", 400);
  }

  req.body.password = await hashService.hash(req.body.password);

  const newUser = await userService.createUser(req.body);
  const payload = { userId: newUser.id };
  const accessToken = jwtService.sign(payload);
  delete newUser.password;

  const people = await dataService.createDefaultDataPeople(newUser.id);
  const place = await dataService.createDefaultDataPlace(newUser.id);
  const theme = await dataService.createDefaultDataTheme(newUser.id);

  res.status(201).json({ accessToken, newUser, people, place, theme });
});

exports.login = catchError(async (req, res, next) => {
  const existsUser = await userService.findUserByEmailOrMobile(
    req.body.emailOrMobile
  );

  if (!existsUser) {
    createError("Invalid email or mobile or password", 400);
  }

  const isMatch = await hashService.compare(
    req.body.password,
    existsUser.password
  );
  if (!isMatch) {
    createError("Invalid email or mobile or password", 400);
  }

  const payload = { userId: existsUser.id };
  const accessToken = jwtService.sign(payload);
  delete existsUser.password;

  res.status(200).json({ accessToken, user: existsUser });
});

exports.getUser = (req, res, next) => {
  res.status(200).json({ user: req.user });
};
