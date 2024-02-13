const prisma = require("../models/prisma");

exports.findUserByEmailOrMobile = (emailOrMobile) =>
  prisma.user.findFirst({
    where: { OR: [{ email: emailOrMobile }, { mobile: emailOrMobile }] },
  });

exports.createUser = (data) => prisma.user.create({ data });

exports.findUserById = (id) => prisma.user.findUnique({ where: { id } });
