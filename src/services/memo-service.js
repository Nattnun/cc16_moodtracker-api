const prisma = require("../models/prisma");

exports.createEmotionMemo = (memoData) =>
  prisma.memo.create({ data: memoData });

exports.updateTags = (memoId, tagData) =>
  prisma.memo.update({ where: { id: memoId }, data: tagData });

exports.getLatestMemo = (userId) =>
  prisma.memo.findFirst({
    where: { userId },
    orderBy: { createdAt: "desc" },
    include: { emotion: true },
  });

exports.deleteMemoById = (memoId) =>
  prisma.memo.delete({ where: { id: memoId } });

exports.getMemoById = (memoId) => {
  return prisma.memo.findFirst({
    where: { id: memoId },

    include: { emotion: true, theme: true, place: true, people: true },
  });
};

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

//day-of-week
exports.getSundayEmotion = (userId) =>
  prisma.$queryRaw`SELECT COUNT(*) AS count_emotionalGroup ,em.emotionalGroup , mm.week_day FROM  memo mm LEFT JOIN emotion em ON mm.emotion_id = em.id WHERE mm.user_id = ${userId} AND mm.week_day = 'SUN' GROUP BY em.emotionalGroup`;

exports.getMondayEmotion = (userId) =>
  prisma.$queryRaw`SELECT COUNT(*) AS count_emotionalGroup ,em.emotionalGroup , mm.week_day FROM  memo mm LEFT JOIN emotion em ON mm.emotion_id = em.id WHERE mm.user_id = ${userId} AND mm.week_day = 'MON' GROUP BY em.emotionalGroup`;

exports.getTuesdayEmotion = (userId) =>
  prisma.$queryRaw`SELECT COUNT(*) AS count_emotionalGroup ,em.emotionalGroup , mm.week_day FROM  memo mm LEFT JOIN emotion em ON mm.emotion_id = em.id WHERE mm.user_id = ${userId} AND mm.week_day = 'TUE' GROUP BY em.emotionalGroup`;

exports.getWednesdayEmotion = (userId) =>
  prisma.$queryRaw`SELECT COUNT(*) AS count_emotionalGroup ,em.emotionalGroup , mm.week_day FROM  memo mm LEFT JOIN emotion em ON mm.emotion_id = em.id WHERE mm.user_id = ${userId} AND mm.week_day = 'WED' GROUP BY em.emotionalGroup`;

exports.getThursdayEmotion = (userId) =>
  prisma.$queryRaw`SELECT COUNT(*) AS count_emotionalGroup ,em.emotionalGroup , mm.week_day FROM  memo mm LEFT JOIN emotion em ON mm.emotion_id = em.id WHERE mm.user_id = ${userId} AND mm.week_day = 'THU' GROUP BY em.emotionalGroup`;

exports.getFridayEmotion = (userId) =>
  prisma.$queryRaw`SELECT COUNT(*) AS count_emotionalGroup ,em.emotionalGroup , mm.week_day FROM  memo mm LEFT JOIN emotion em ON mm.emotion_id = em.id WHERE mm.user_id = ${userId} AND mm.week_day = 'FRI' GROUP BY em.emotionalGroup`;

exports.getSaturdayEmotion = (userId) =>
  prisma.$queryRaw`SELECT COUNT(*) AS count_emotionalGroup ,em.emotionalGroup , mm.week_day FROM  memo mm LEFT JOIN emotion em ON mm.emotion_id = em.id WHERE mm.user_id = ${userId} AND mm.week_day = 'SAT' GROUP BY em.emotionalGroup`;

//Tags
exports.getAllTheme = (userId) =>
  prisma.theme.findMany({
    where: { userId },
    include: {
      Memo: {
        include: { emotion: true },
        orderBy: { createdAt: "desc" },
        take: 6,
      },
    },
  });

exports.getAllPlace = (userId) =>
  prisma.place.findMany({
    where: { userId },
    include: {
      Memo: {
        include: { emotion: true },
        orderBy: { createdAt: "desc" },
        take: 6,
      },
    },
  });

exports.getAllPeople = (userId) =>
  prisma.people.findMany({
    where: { userId },
    include: {
      Memo: {
        include: { emotion: true },
        orderBy: { createdAt: "desc" },
        take: 6,
      },
    },
  });
