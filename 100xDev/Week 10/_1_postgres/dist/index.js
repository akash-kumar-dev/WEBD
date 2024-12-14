"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const client = new pg_1.Client({
    //   connectionString: "ADD_YOUR_CONNECTION_STRING_HERE"
    connectionString: "postgres://postgres:11@localhost:5432/new1",
    //   host: "localhost",
    //   port: 5432,
    //   user: "postgres",
    //   password: "11",
    //   database: "new1",
});
function connectToDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            console.log("Connected to database");
        }
        catch (error) {
            console.error("Error connecting to database:", error);
        }
    });
}
// 1. create a new table in the database Run this only once
function createUserTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
        const result = yield client.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(255) NOT NULL UNIQUE,
      name VARCHAR(255),
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);
        yield client.end(); // Close the connection
        console.log(result);
    });
}
createUserTable();
// 2.  insert a new user into the database
function insertUser(username, name, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield client.query(`
      INSERT INTO users (username, name, email, password)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `, [username, name, email, password]);
            console.log("User inserted:", result.rows[0]);
        }
        catch (error) {
            console.error("Error inserting user:", error);
        }
    });
}
insertUser("admin", "Admin", "admin@example.com", "admin123");
// 3. search a user in the database
function getUser(email) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield client.query(`
      SELECT * FROM users
      WHERE email = $1
    `, [email]);
            console.log("User:", result.rows[0]);
        }
        catch (error) {
            console.error("Error getting user:", error);
        }
    });
}
getUser("admin@example.com");
// 3. Delete a user in the database
// async function deleteUser(email: string) {
//   try {
//     const result = await client.query(`
//       DELETE FROM users
//       WHERE email = $1
//       RETURNING *
//     `, [email]);
//     console.log("User deleted:", result.rows[0]);
//   } catch (error) {
//     console.error("Error deleting user:", error);
//   }
// }
// 4. get all users from the database
// async function getUsers() {
//   try {
//     const result = await client.query(`
//       SELECT * FROM users
//     `);
//     console.log("Users:", result.rows);
//   } catch (error) {
//     console.error("Error getting users:", error);
//   }
// }
// connectToDatabase()
//   .then(async () => {
//     await insertUser("anshu2", "anshu", "anshu2@gmail.com", "12345")    // You can add more users here by calling this function multiple times with different values
//     // await deleteUser("anshu2@gmail.com")
//     // await getUsers()
//     await client.end(); 
//   }) 
//   .catch((error) => {
//     console.error("Error connecting to database:", error);
//   });
