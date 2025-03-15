const mysql = require("mysql2");
exports.content = (host, user, password, database) => {
  con = mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: database,
  });
};
exports.handleData = async (data, value) => {
  return new Promise((resolve, reject) => {
    con.query(data, value, (err, res) => {
      if (err) reject(err);
      resolve(res);
    });
  });
};


