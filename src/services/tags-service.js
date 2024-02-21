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

//findAndUpdateMemoByMemoId

exports.themeIdToNull = (themeId) =>
  prisma.memo.updateMany({ where: { themeId }, data: { themeId: null } });

exports.placeIdToNull = (placeId) =>
  prisma.memo.updateMany({ where: { placeId }, data: { placeId: null } });

exports.peopleIdToNull = (peopleId) =>
  prisma.memo.updateMany({ where: { peopleId }, data: { peopleId: null } });

//deleteThemeByThemeId
exports.deleteTheme = (themeId) =>
  prisma.theme.delete({ where: { id: themeId } });

exports.deletePlace = (placeId) =>
  prisma.place.delete({ where: { id: placeId } });

exports.deletePeople = (peopleId) =>
  prisma.people.delete({ where: { id: peopleId } });
