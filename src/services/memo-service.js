const prisma = require("../models/prisma");

exports.createEmotionMemo = (memoData) =>
  prisma.memo.create({ data: memoData });

exports.getLatestMemo = (userId) =>
  prisma.memo.findFirst({
    where: { userId },
    orderBy: { createdAt: "desc" },
    include: { emotion: true },
  });

exports.getAllMemo = (userId) =>
  prisma.memo.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
    include: { emotion: true },
  });
