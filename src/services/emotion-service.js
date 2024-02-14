const prisma = require("../models/prisma");

exports.getEmotionsByGroup = (emotionalGroup) =>
  prisma.emotion.findMany({
    where: { emotionalGroup },
  });

exports.getEmotionById = (id) => prisma.emotion.findFirst({ where: { id } });
