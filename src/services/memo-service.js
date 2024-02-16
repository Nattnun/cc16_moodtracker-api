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

exports.getBreakDownMemo = (userId) =>
  prisma.$queryRaw`SELECT em.emotionalGroup, COUNT(*) AS emotion_count FROM memo mm LEFT JOIN emotion em ON mm.emotion_id = em.id WHERE mm.user_id = ${userId} GROUP BY em.emotionalGroup`;
