const prisma = require("../models/prisma");

exports.getEmotionsByGroup = (emotionalGroup) =>
  prisma.emotion.findMany({
    where: { emotionalGroup: emotionalGroup },
  });
