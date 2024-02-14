const prisma = require("../models/prisma");

exports.getThemesTagsByUserId = (userId) =>
  prisma.theme.findMany({ where: { userId } });

exports.getPlacesTagsByUserId = (userId) =>
  prisma.place.findMany({ where: { userId } });

exports.getPeopleTagsByUserId = (userId) =>
  prisma.people.findMany({ where: { userId } });
