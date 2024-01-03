const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'fsociety-student',
  database: 'delta_app',
  password: '123'
});

// let query = "SHOW TABLES";

// try {
//     connection.query(query, (err, result) => {
//         if (err) throw err;
//         console.log(result);
//         console.log(result.length);
//     });
// } catch (err) {
//     console.log(err);
// }


// // Inserting new data with placeholder argument
// let query = "INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)";
// let user = ["12w221", "temp_user71", "temp@gmail.com", "pasword@123"];

// // with placeholder argument
// try {
//   connection.query(query, user, (err, result) => {
//       if (err) throw err;
//       console.log(result);
//       console.log(result.length);
//   });
// } catch (err) {
//   console.log(err);
// }

// let query = "INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)";
// let user = ["12w221", "temp_user71", "temp@gmail.com", "pasword@123"];

// inserting multiple user by Array of Array
let query = "INSERT INTO user (id, username, email, password) VALUES ?";
let users = [
  ["wee2221wq", "user71_temp21", "12wtemp@gmail.com", "passwd21"],
  ["teuyu231", "newuser4562", "hwgfg@hotmail.com", "uty22passwd"],
];

try {
  connection.query(query, [users], (err, result) => {
    if (err) throw err;
    console.log(result);
    console.log(result.length);
  });
} catch (err) {
  console.log(err);
}

connection.end();

let getRandomUser = () => {
  return {
    id: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}

// console.log(getRandomUser());