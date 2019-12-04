const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "users");
const getUsers = () => {
  const folders = fs.readdirSync(root);
  return folders.map(folder => {
    const user = {};
    const keys = fs.readdirSync(path.join(root, folder));
    keys.forEach(key => {
      user[key] = fs.readFileSync(path.join(root, folder, key), "utf8");
    });
    return user;
  });
};

module.exports = {
  getUsers
};
