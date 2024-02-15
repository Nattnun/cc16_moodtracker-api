const prisma = require("../models/prisma");

exports.createEmotionMemo = (memoData) =>
  prisma.memo.create({ data: memoData });
