import bcrypt from 'bcryptjs'

const users = [
  {
    name: "Admin User",
    email: "papapin@bigmir.net",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "  User1",
    email: "user1@bigmir.net",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "  User2",
    email: "user2@bigmir.net",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "  User3",
    email: "user3@bigmir.net",
    password: bcrypt.hashSync("123456", 10),
  },
];