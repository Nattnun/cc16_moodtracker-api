const prisma = require("../models/prisma");

exports.getThemesTagsByUserId = (userId) =>
  prisma.theme.findMany({ where: { userId } });

exports.getPlacesTagsByUserId = (userId) =>
  prisma.place.findMany({ where: { userId } });

exports.getPeopleTagsByUserId = (userId) =>
  prisma.people.findMany({ where: { userId } });

//createTags

exports.createThemeTag = (tagData, userId) =>
  prisma.theme.create({ data: { name: tagData, userId, tagType: "USER" } });

exports.createPlaceTag = (tagData, userId) =>
  prisma.place.create({ data: { name: tagData, userId, tagType: "USER" } });

exports.createPeopleTag = (tagData, userId) =>
  prisma.people.create({ data: { name: tagData, userId, tagType: "USER" } });
