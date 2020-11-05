import bcrypt from "bcryptjs";

const users = [
  {
    name: "Super Admin",
    email: "admin@rencanain.co.id",
    password: bcrypt.hashSync("admin", 10),
    isAdmin: true,
  },
  {
    name: "Callista",
    email: "callista@vendor.com",
    password: bcrypt.hashSync("vendor", 10),
    isVendorOwner: true,
  },
  {
    name: "Dzaky Badawi",
    email: "dzaky.badawi@gmail.com",
    password: bcrypt.hashSync("password", 10),
  },
];

export default users;
