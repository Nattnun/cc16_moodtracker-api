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

exports.getMostEmotion = (userId) =>
  prisma.$queryRaw`SELECT em.name,em.emotionalGroup, em.id, COUNT(*) AS count_per_emotion FROM memo mm LEFT JOIN emotion em ON mm.emotion_id = em.id WHERE mm.user_id = ${userId} GROUP BY em.id ORDER BY count_per_emotion DESC Limit 10`;

//time-period
exports.getMorningEmotion = (userId) =>
  prisma.$queryRaw`SELECT COUNT(*) AS count_emotionalGroup ,em.emotionalGroup , mm.time_period FROM  memo mm LEFT JOIN emotion em ON mm.emotion_id = em.id WHERE mm.user_id = ${userId} AND time_period = 'MORNING' GROUP BY em.emotionalGroup`;

exports.getAfternoonEmotion = (userId) =>
  prisma.$queryRaw`SELECT COUNT(*) AS count_emotionalGroup ,em.emotionalGroup , mm.time_period FROM  memo mm LEFT JOIN emotion em ON mm.emotion_id = em.id WHERE mm.user_id = ${userId} AND time_period = 'AFTERNOON' GROUP BY em.emotionalGroup`;

exports.getEveningsEmotion = (userId) =>
  prisma.$queryRaw`SELECT COUNT(*) AS count_emotionalGroup ,em.emotionalGroup , mm.time_period FROM  memo mm LEFT JOIN emotion em ON mm.emotion_id = em.id WHERE mm.user_id = ${userId} AND time_period = 'EVENINGS' GROUP BY em.emotionalGroup`;

exports.getLateNightEmotion = (userId) =>
  prisma.$queryRaw`SELECT COUNT(*) AS count_emotionalGroup ,em.emotionalGroup , mm.time_period FROM  memo mm LEFT JOIN emotion em ON mm.emotion_id = em.id WHERE mm.user_id = ${userId} AND time_period = 'LATENIGHT' GROUP BY em.emotionalGroup`;
