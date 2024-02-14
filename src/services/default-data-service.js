const prisma = require("../models/prisma");

exports.createDefaultDataTheme = (userId) =>
  prisma.theme.createMany({
    data: [
      { name: "work", userId },
      { name: "resting", userId },
      { name: "hanging-out", userId },
      { name: "driving", userId },
      { name: "eating", userId },
      { name: "fitness", userId },
      { name: "hobbies", userId },
    ],
  });

exports.createDefaultDataPlace = (userId) =>
  prisma.place.createMany({
    data: [
      { name: "work", userId },
      { name: "outside", userId },
      { name: "home", userId },
      { name: "school", userId },
      { name: "commuting", userId },
    ],
  });

exports.createDefaultDataPeople = (userId) =>
  prisma.people.createMany({
    data: [
      { name: "by-myself", userId },
      { name: "family", userId },
      { name: "co-worker", userId },
      { name: "lover", userId },
      { name: "friends", userId },
      { name: "pets", userId },
    ],
  });
