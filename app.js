const dataBase = require("./database");

dataBase.content("127.0.0.1", "root", "", "music");

const read = async () => {
  const res = await dataBase.handleData("UPDATE ai_users SET display_name = ? WHERE ID = ?", ["123", 1]);
  console.log(res["changedRows"]);
};
read();
